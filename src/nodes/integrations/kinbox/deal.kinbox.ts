import { builder, buildQueryString, CoreProperty, NodeAction } from "src/nodes";
import { getCustomFieldsProperties, transformPropertiesToKinboxPayload } from "./helper.kinbox";
import { KinboxGeneric, KinboxPaginatedResponse } from "./types.kinbox";

const properties = {
  id: builder.property.text({
    id: "id",
    label: "Deal ID",
    required: true,
  }),
  name: builder.property.text({
    id: "name",
    label: "Nome",
  }),
  contactId: builder.property.number({
    id: "contactId",
    label: "Contact ID",
  }),
  search: builder.property.text({
    id: "search",
    label: "Name",
  }),
  createdAtFrom: builder.property.text({
    id: "createdAtFrom",
    label: "Created at from",
  }),
  createdAtTo: builder.property.text({
    id: "createdAtTo",
    label: "Created at to",
  }),
  winOrLostAtFrom: builder.property.text({
    id: "winOrLostAtFrom",
    label: "Resolved at from",
  }),
  winOrLostAtTo: builder.property.text({
    id: "winOrLostAtTo",
    label: "Resolved at to",
  }),
  status: builder.property.select({
    id: "status",
    label: "Status",
    options: [
      {
        value: "open",
        label: "Open",
      },
      {
        value: "won",
        label: "Won",
      },
      {
        value: "lost",
        label: "Lost",
      },
    ],
  }),
  pipelineId: builder.property.combobox({
    id: "pipelineId",
    label: "Pipeline",
    options: [],
    dynamic_options: {
      enabled: true,
      get: async (ctx) => {
        return ctx
          .fetch<KinboxPaginatedResponse<KinboxGeneric>>(`/pipelines`)
          .then((response) => {
            return response.data.data.map((pipeline) => {
              return { value: pipeline.id, label: pipeline.name };
            });
          });
      },
    },
  }),
  operatorId: builder.property.combobox({
    id: "operatorId",
    label: "Operator",
    options: [],
    dynamic_options: {
      enabled: true,
      get: async (ctx) => {
        return ctx
          .fetch<KinboxPaginatedResponse<KinboxGeneric>>(`/operators`)
          .then((response) => {
            return response.data.data.map((operator) => {
              return {
                icon: (operator as any).avatar,
                value: operator.id,
                label: operator.name,
              };
            });
          });
      },
    },
  }),
  groupId: builder.property.combobox({
    id: "groupId",
    label: "Group",
    options: [],
    dynamic_options: {
      enabled: true,
      get: async (ctx) => {
        return ctx
          .fetch<KinboxPaginatedResponse<KinboxGeneric>>(`/groups`)
          .then((response) => {
            return response.data.data.map((group) => {
              return {
                icon: (group as any).icon,
                value: group.id,
                label: group.name,
              };
            });
          });
      },
    },
  }),
  tagIds: builder.property.combobox({
    id: "tagIds",
    label: "Tags",
    options: [],
    dynamic_options: {
      enabled: true,
      get: async (ctx) => {
        return ctx
          .fetch<KinboxPaginatedResponse<KinboxGeneric>>(`/tags`)
          .then((response) => {
            return response.data.data.map((tag) => {
              return {
                icon: (tag as any).icon,
                value: tag.id,
                label: tag.name,
              };
            });
          });
      },
    },
  }),
  productIds: builder.property.combobox({
    id: "productIds",
    label: "Products",
    options: [],
    dynamic_options: {
      enabled: true,
      get: async (ctx) => {
        return ctx
          .fetch<KinboxPaginatedResponse<KinboxGeneric>>(`/products`)
          .then((response) => {
            return response.data.data.map((product) => {
              return {
                value: product.id,
                label: product.name,
              };
            });
          });
      },
    },
  }),
  value: builder.property.number({
    id: "value",
    label: "Value",
  }),
};

const saveProperties = [
  properties.status,
  properties.pipelineId,
  properties.operatorId,
  properties.groupId,
  properties.tagIds,
  properties.productIds,
  properties.value,
];

// ███████╗██╗  ██╗██████╗  ██████╗ ██████╗ ████████╗
// ██╔════╝╚██╗██╔╝██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝
// █████╗   ╚███╔╝ ██████╔╝██║   ██║██████╔╝   ██║
// ██╔══╝   ██╔██╗ ██╔═══╝ ██║   ██║██╔══██╗   ██║
// ███████╗██╔╝ ██╗██║     ╚██████╔╝██║  ██║   ██║
// ╚══════╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝
//
export default {
  id: "deal",
  label: "Deal",
  operations: [
    {
      id: "get",
      label: "Get a deal",
      properties: [properties.id],
      run: async (ctx, cmd) => {
        cmd.runFetch(`/deals/${ctx.properties.id}`, {});
      },
    },
    {
      id: "get_many",
      label: "Get many deals",
      dynamic_properties: {
        enabled: true,
        get: getCustomFieldsProperties,
      },
      properties: [CoreProperty.pagination],
      optional_properties: {
        label: "Filters",
        properties: [
          properties.contactId,
          properties.search,
          properties.createdAtFrom,
          properties.createdAtTo,
          properties.winOrLostAtFrom,
          properties.winOrLostAtTo,
          ...saveProperties,
        ],
      },
      run: async (ctx, cmd) => {
        const queryString = buildQueryString({
          ...ctx.properties,
          limit: ctx.properties.limit || 10,
          offset: ctx.properties.offset || 0,
        });
        cmd.runFetch<KinboxPaginatedResponse<KinboxGeneric>>(
          `/deals?${queryString}`
        );
      },
    },
    {
      id: "create",
      label: "Create a deal",
      dynamic_properties: {
        enabled: true,
        get: getCustomFieldsProperties,
      },
      properties: [
        {
          ...properties.name,
          required: true,
        },
        {
          ...properties.contactId,
          required: true,
        },
      ],
      optional_properties: {
        label: "Extra fields",
        properties: saveProperties,
      },
      run: async (ctx, cmd) => {
        cmd.runFetch.post(`/deals`, {
          body: JSON.stringify(
            transformPropertiesToKinboxPayload(ctx.properties)
          ),
        });
      },
    },
    {
      id: "update",
      label: "Update a deal",
      dynamic_properties: {
        enabled: true,
        get: getCustomFieldsProperties,
      },
      properties: [
        {
          ...properties.id,
          required: true,
        },
      ],
      optional_properties: {
        label: "Extra fields",
        properties: saveProperties,
      },
      run: async (ctx, cmd) => {
        const { id, ...rest } = ctx.properties;
        cmd.runFetch.patch(`/deals/${id}`, {
          body: JSON.stringify(transformPropertiesToKinboxPayload(rest)),
        });
      },
    },
    {
      id: "delete",
      label: "Delete a deal",
      properties: [
        {
          ...properties.id,
          required: true,
        },
      ],
      run: async (ctx, cmd) => {
        cmd.runFetch.delete(`/deals/${ctx.properties.id}`);
      },
    },
  ],
} satisfies NodeAction;
