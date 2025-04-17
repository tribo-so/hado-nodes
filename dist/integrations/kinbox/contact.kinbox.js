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
    id: nodes_1.builder.property.number({
        id: "id",
        label: "Contact ID",
    }),
    name: nodes_1.builder.property.text({
        id: "name",
        label: "Nome",
    }),
    email: nodes_1.builder.property.text({
        id: "email",
        label: "E-mail",
    }),
    phone: nodes_1.builder.property.phone({
        id: "phone",
        label: "Telefone",
    }),
    origin: nodes_1.builder.property.text({
        id: "origin",
        label: "Origem",
    }),
    avatar: nodes_1.builder.property.text({
        id: "avatar",
        label: "Avatar",
    }),
    notes: nodes_1.builder.property.text({
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
exports.default = {
    id: "contact",
    label: "Contact",
    operations: [
        {
            id: "get",
            label: "Get a contact",
            properties: [properties.id],
            run: async (ctx, cmd) => {
                console.log("get ----- chegou aqui", ctx.properties.id);
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
            properties: [nodes_1.CoreProperty.pagination],
            optional_properties: {
                label: "Filters",
                properties: [properties.name, properties.email, properties.phone],
            },
            run: async (ctx, cmd) => {
                const queryString = (0, nodes_1.buildQueryString)(Object.assign(Object.assign({}, ctx.properties), { limit: ctx.properties.limit || 10, offset: ctx.properties.offset || 0 }));
                cmd.runFetch(`/contacts?${queryString}`);
            },
        },
        {
            id: "create",
            label: "Create a contact",
            dynamic_properties: {
                enabled: true,
            },
            properties: [
                Object.assign(Object.assign({}, properties.name), { required: true }),
            ],
            optional_properties: {
                label: "Extra fields",
                properties: saveProperties.filter((property) => property.id !== "name"),
            },
            run: async (ctx, cmd) => {
                cmd.runFetch.post(`/contacts`, {
                    body: JSON.stringify((0, helper_kinbox_1.transformPropertiesToKinboxPayload)(ctx.properties)),
                });
            },
        },
        {
            id: "update",
            label: "Update a contact",
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
                cmd.runFetch.patch(`/contacts/${id}`, {
                    body: JSON.stringify((0, helper_kinbox_1.transformPropertiesToKinboxPayload)(rest)),
                });
            },
        },
    ],
};
//# sourceMappingURL=contact.kinbox.js.map