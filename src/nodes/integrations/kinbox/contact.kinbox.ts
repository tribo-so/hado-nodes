import { builder, buildQueryString, CoreProperty, NodeAction } from "src/nodes";
import {
  getCustomFieldsProperties,
  transformPropertiesToKinboxPayload,
} from "./helper.kinbox";
import { KinboxGeneric, KinboxPaginatedResponse } from "./types.kinbox";

const properties = {
  id: builder.property.number({
    id: "id",
    label: "Contact ID",
  }),
  name: builder.property.text({
    id: "name",
    label: "Nome",
  }),
  email: builder.property.text({
    id: "email",
    label: "E-mail",
  }),
  phone: builder.property.phone({
    id: "phone",
    label: "Telefone",
  }),
  origin: builder.property.text({
    id: "origin",
    label: "Origem",
  }),
  avatar: builder.property.text({
    id: "avatar",
    label: "Avatar",
  }),
  notes: builder.property.text({
    id: "notes",
    label: "Notas",
  }),
};

const saveProperties = [
  properties.name,
  properties.email,
  properties.phone,
  properties.origin,
  properties.avatar,
  properties.notes,
];

// ███████╗██╗  ██╗██████╗  ██████╗ ██████╗ ████████╗
// ██╔════╝╚██╗██╔╝██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝
// █████╗   ╚███╔╝ ██████╔╝██║   ██║██████╔╝   ██║
// ██╔══╝   ██╔██╗ ██╔═══╝ ██║   ██║██╔══██╗   ██║
// ███████╗██╔╝ ██╗██║     ╚██████╔╝██║  ██║   ██║
// ╚══════╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝
//
export default {
  id: "contact",
  label: "Contact",
  operations: [
    {
      id: "get",
      label: "Get a contact",
      properties: [properties.id],
      run: async (ctx, cmd) => {
        cmd.runFetch(`/contacts/${ctx.properties.id}`);
      },
    },
    {
      id: "get_many",
      label: "Get many contacts",
      default_properties_values: {
        limit: 10,
        offset: 0,
      },
      properties: [CoreProperty.pagination],
      optional_properties: {
        label: "Filters",
        properties: [properties.name, properties.email, properties.phone],
      },
      run: async (ctx, cmd) => {
        const queryString = buildQueryString({
          ...ctx.properties,
          limit: ctx.properties.limit || 10,
          offset: ctx.properties.offset || 0,
        });
        cmd.runFetch<KinboxPaginatedResponse<KinboxGeneric>>(
          `/contacts?${queryString}`
        );
      },
    },
    {
      id: "create",
      label: "Create a contact",
      dynamic_properties: {
        enabled: true,
        get: getCustomFieldsProperties,
      },
      properties: [
        {
          ...properties.name,
          required: true,
        },
      ],
      optional_properties: {
        label: "Extra fields",
        properties: saveProperties.filter((property) => property.id !== "name"),
      },
      run: async (ctx, cmd) => {
        cmd.runFetch.post(`/contacts`, {
          body: JSON.stringify(
            transformPropertiesToKinboxPayload(ctx.properties)
          ),
        });
      },
    },
    {
      id: "update",
      label: "Update a contact",
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
      dynamic_properties: {
        enabled: true,
        get: getCustomFieldsProperties,
      },
      run: async (ctx, cmd) => {
        const { id, ...rest } = ctx.properties;
        cmd.runFetch.patch(`/contacts/${id}`, {
          body: JSON.stringify(transformPropertiesToKinboxPayload(rest)),
        });
      },
    },
  ],
} satisfies NodeAction;
