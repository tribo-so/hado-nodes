"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("src/nodes");
const helper_kinbox_1 = require("./helper.kinbox");
const properties = {
    id: nodes_1.builder.property.text({
        id: "id",
        label: "Deal ID",
        required: true,
    }),
    name: nodes_1.builder.property.text({
        id: "name",
        label: "Nome",
    }),
    contactId: nodes_1.builder.property.number({
        id: "contactId",
        label: "Contact ID",
    }),
    search: nodes_1.builder.property.text({
        id: "search",
        label: "Name",
    }),
    createdAtFrom: nodes_1.builder.property.text({
        id: "createdAtFrom",
        label: "Created at from",
    }),
    createdAtTo: nodes_1.builder.property.text({
        id: "createdAtTo",
        label: "Created at to",
    }),
    winOrLostAtFrom: nodes_1.builder.property.text({
        id: "winOrLostAtFrom",
        label: "Resolved at from",
    }),
    winOrLostAtTo: nodes_1.builder.property.text({
        id: "winOrLostAtTo",
        label: "Resolved at to",
    }),
    status: nodes_1.builder.property.select({
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
    pipelineId: nodes_1.builder.property.combobox({
        id: "pipelineId",
        label: "Pipeline",
        options: [],
        dynamic_options: {
            enabled: true,
            get: async (ctx) => {
                console.log("get pipeline", ctx);
                return ctx
                    .fetch(`/pipelines`)
                    .then((response) => {
                    return response.data.data.map((pipeline) => {
                        return { value: pipeline.id, label: pipeline.name };
                    });
                });
            },
        },
    }),
    operatorId: nodes_1.builder.property.combobox({
        id: "operatorId",
        label: "Operator",
        options: [],
        dynamic_options: {
            enabled: true,
            get: async (ctx) => {
                return ctx
                    .fetch(`/operators`)
                    .then((response) => {
                    return response.data.data.map((operator) => {
                        return {
                            icon: operator.avatar,
                            value: operator.id,
                            label: operator.name,
                        };
                    });
                });
            },
        },
    }),
    groupId: nodes_1.builder.property.combobox({
        id: "groupId",
        label: "Group",
        options: [],
        dynamic_options: {
            enabled: true,
            get: async (ctx) => {
                return ctx
                    .fetch(`/groups`)
                    .then((response) => {
                    return response.data.data.map((group) => {
                        return {
                            icon: group.icon,
                            value: group.id,
                            label: group.name,
                        };
                    });
                });
            },
        },
    }),
    tagIds: nodes_1.builder.property.combobox({
        id: "tagIds",
        label: "Tags",
        options: [],
        dynamic_options: {
            enabled: true,
            get: async (ctx) => {
                return ctx
                    .fetch(`/tags`)
                    .then((response) => {
                    return response.data.data.map((tag) => {
                        return {
                            icon: tag.icon,
                            value: tag.id,
                            label: tag.name,
                        };
                    });
                });
            },
        },
    }),
    productIds: nodes_1.builder.property.combobox({
        id: "productIds",
        label: "Products",
        options: [],
        dynamic_options: {
            enabled: true,
            get: async (ctx) => {
                return ctx
                    .fetch(`/products`)
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
    value: nodes_1.builder.property.number({
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
exports.default = {
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
            },
            properties: [nodes_1.CoreProperty.pagination],
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
                const queryString = (0, nodes_1.buildQueryString)(Object.assign(Object.assign({}, ctx.properties), { limit: ctx.properties.limit || 10, offset: ctx.properties.offset || 0 }));
                cmd.runFetch(`/deals?${queryString}`);
            },
        },
        {
            id: "create",
            label: "Create a deal",
            dynamic_properties: {
                enabled: true,
            },
            properties: [
                Object.assign(Object.assign({}, properties.name), { required: true }),
                Object.assign(Object.assign({}, properties.contactId), { required: true }),
            ],
            optional_properties: {
                label: "Extra fields",
                properties: saveProperties,
            },
            run: async (ctx, cmd) => {
                cmd.runFetch.post(`/deals`, {
                    body: JSON.stringify((0, helper_kinbox_1.transformPropertiesToKinboxPayload)(ctx.properties)),
                });
            },
        },
        {
            id: "update",
            label: "Update a deal",
            dynamic_properties: {
                enabled: true,
            },
            properties: [
                Object.assign(Object.assign({}, properties.id), { required: true }),
            ],
            optional_properties: {
                label: "Extra fields",
                properties: saveProperties,
            },
            run: async (ctx, cmd) => {
                const _a = ctx.properties, { id } = _a, rest = __rest(_a, ["id"]);
                cmd.runFetch.patch(`/deals/${id}`, {
                    body: JSON.stringify((0, helper_kinbox_1.transformPropertiesToKinboxPayload)(rest)),
                });
            },
        },
        {
            id: "delete",
            label: "Delete a deal",
            properties: [
                Object.assign(Object.assign({}, properties.id), { required: true }),
            ],
            run: async (ctx, cmd) => {
                cmd.runFetch.delete(`/deals/${ctx.properties.id}`);
            },
        },
    ],
};
//# sourceMappingURL=deal.kinbox.js.map