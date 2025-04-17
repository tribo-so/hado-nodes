"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builder = exports.zNodeMeta = exports.zCredentialMeta = exports.zNodeOperation = exports.zAllProperties = exports.zSectionProperty = exports.zComboboxProperty = exports.zDynamicOptions = exports.zSelectOption = void 0;
const zod_1 = require("zod");
const enums_1 = require("./enums");
const zPropertyType = zod_1.z.nativeEnum(enums_1.PropertyType);
const zBaseProperty = zod_1.z.object({
    id: zod_1.z.string(),
    label: zod_1.z.string().optional(),
    badge: zod_1.z.string().optional(),
    tip: zod_1.z.string().optional(),
    required: zod_1.z.boolean().optional(),
    placeholder: zod_1.z.string().optional(),
    hide_condition: zod_1.z.string().optional(),
});
exports.zSelectOption = zod_1.z.object({
    value: zod_1.z.string(),
    label: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    badge: zod_1.z.string().optional(),
});
const zSelectProperty = zBaseProperty.extend({
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.SELECT),
    options: zod_1.z.array(exports.zSelectOption).nonempty(),
});
exports.zDynamicOptions = zod_1.z.object({
    enabled: zod_1.z.boolean(),
    depends_on: zod_1.z.string().array().optional(),
});
exports.zComboboxProperty = zBaseProperty.extend({
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.COMBOBOX),
    dynamic_options: exports.zDynamicOptions,
    options: zod_1.z.array(zod_1.z.object({
        value: zod_1.z.string(),
        label: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        badge: zod_1.z.string().optional(),
    })),
});
const zMultiSelectProperty = zBaseProperty.extend({
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.MULTI_SELECT),
    dynamic_options: zod_1.z.object({
        enabled: zod_1.z.boolean(),
        depends_on: zod_1.z.string().array().optional(),
    }),
    options: zod_1.z.array(zod_1.z.object({
        value: zod_1.z.string(),
        label: zod_1.z.string(),
        description: zod_1.z.string().optional(),
    })),
});
const zNumberProperty = zBaseProperty.extend({
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.NUMBER),
    min: zod_1.z.number().optional(),
    max: zod_1.z.number().optional(),
});
const zPhoneProperty = zBaseProperty.extend({
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.PHONE),
});
const zTextProperty = zBaseProperty.extend({
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.TEXT),
});
const zTextareaProperty = zBaseProperty.extend({
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.TEXTAREA),
    rows: zod_1.z.number().optional(),
});
const zCheckboxProperty = zBaseProperty
    .extend({
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.CHECKBOX),
})
    .omit({
    placeholder: true,
    required: true,
});
const zSwitchProperty = zBaseProperty
    .extend({
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.SWITCH),
})
    .omit({
    placeholder: true,
    required: true,
});
const zDatetimeProperty = zBaseProperty.extend({});
const zAllPropertiesWithoutSection = zod_1.z.union([
    zSelectProperty,
    zNumberProperty,
    zDatetimeProperty,
    zTextareaProperty,
    zCheckboxProperty,
    zMultiSelectProperty,
    exports.zComboboxProperty,
    zPhoneProperty,
    zSwitchProperty,
]);
exports.zSectionProperty = zod_1.z.object({
    id: zod_1.z.string().nonempty(),
    type: zPropertyType.refine((type) => type === enums_1.PropertyType.SECTION),
    properties: zod_1.z.array(zAllPropertiesWithoutSection),
    inline: zod_1.z.boolean().optional(),
    label: zod_1.z.string().optional(),
    hide_condition: zod_1.z.string().optional(),
});
exports.zAllProperties = zod_1.z.union([
    zAllPropertiesWithoutSection,
    exports.zSectionProperty,
]);
exports.zNodeOperation = zod_1.z.object({
    id: zod_1.z.string(),
    label: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    properties: exports.zAllProperties.array().optional(),
    dynamic_properties: zod_1.z
        .object({
        enabled: zod_1.z.boolean(),
        depends_on: zod_1.z.string().array().optional(),
    })
        .optional(),
    optional_properties: zod_1.z
        .object({
        label: zod_1.z.string(),
        tip: zod_1.z.string().optional(),
        properties: exports.zAllProperties.array(),
        dynamic: zod_1.z.boolean().optional(),
    })
        .optional(),
    default_properties_values: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
});
const zNodeAction = zod_1.z.object({
    label: zod_1.z.string(),
    operations: exports.zNodeOperation.array(),
});
exports.zCredentialMeta = zod_1.z.object({
    type: zod_1.z.string(),
    authorization_type: zod_1.z.nativeEnum(enums_1.AuthorizationType),
    bearer_token_key: zod_1.z.string().optional(),
    base_url: zod_1.z.string(),
    label: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    properties: exports.zAllProperties.array().optional(),
});
exports.zNodeMeta = zod_1.z.object({
    type: zod_1.z.string(),
    color: zod_1.z.string(),
    text_color: zod_1.z.string().optional(),
    label: zod_1.z.string(),
    description: zod_1.z.string(),
    image_src: zod_1.z.string().optional(),
    category: zod_1.z.nativeEnum(enums_1.NodeCategory),
    properties: exports.zAllProperties.array().optional(),
    default_properties_values: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
    actions: zNodeAction.array().optional(),
    dynamic_properties: zod_1.z
        .object({
        enabled: zod_1.z.boolean(),
        depends_on: zod_1.z.string().array().optional(),
    })
        .optional(),
    credentials: exports.zCredentialMeta.array().optional(),
});
const property = {
    text: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.TEXT });
    },
    textarea: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.TEXTAREA });
    },
    switch: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.SWITCH });
    },
    select: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.SELECT });
    },
    combobox: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.COMBOBOX });
    },
    multiselect: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.MULTI_SELECT });
    },
    phone: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.PHONE });
    },
    number: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.NUMBER });
    },
    datetime: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.DATETIME });
    },
    section: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.SECTION });
    },
    action: (definition) => {
        return Object.assign(Object.assign({}, definition), { type: enums_1.PropertyType.SECTION });
    },
};
exports.builder = {
    property,
};
//# sourceMappingURL=schemas.js.map