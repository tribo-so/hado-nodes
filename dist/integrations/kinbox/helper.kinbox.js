"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformKinboxCustomFieldsToProperties = transformKinboxCustomFieldsToProperties;
exports.transformPropertiesToKinboxPayload = transformPropertiesToKinboxPayload;
const nodes_1 = require("src/nodes");
function getCustomFieldId(entity, placeholder) {
    return `custom-field:${placeholder}`;
}
function transformKinboxCustomFieldToProperty(customField) {
    switch (customField.type) {
        case "number":
            return nodes_1.builder.property.number({
                badge: "Custom",
                id: getCustomFieldId(customField.entity, customField.placeholder),
                label: customField.name,
            });
        case "decimal":
            return nodes_1.builder.property.number({
                badge: "Custom",
                id: getCustomFieldId(customField.entity, customField.placeholder),
                label: customField.name,
            });
        case "select":
            let kOptions = typeof customField.options === "string"
                ? JSON.parse(customField.options)
                : customField.options;
            return nodes_1.builder.property.select({
                id: getCustomFieldId(customField.entity, customField.placeholder),
                label: customField.name,
                badge: "Custom",
                options: kOptions.map((option) => ({
                    value: option.value,
                    label: option.value,
                })),
            });
        case "multi-select":
            let kMultiOptions = typeof customField.options === "string"
                ? JSON.parse(customField.options)
                : customField.options;
            return nodes_1.builder.property.select({
                id: getCustomFieldId(customField.entity, customField.placeholder),
                label: customField.name,
                badge: "Custom",
                options: kMultiOptions.map((option) => ({
                    value: option.value,
                    label: option.value,
                })),
            });
        case "textarea":
            return nodes_1.builder.property.text({
                id: getCustomFieldId(customField.entity, customField.placeholder),
                badge: "Custom",
                label: customField.name,
            });
        case "json":
            return nodes_1.builder.property.text({
                id: getCustomFieldId(customField.entity, customField.placeholder),
                badge: "Custom",
                label: customField.name,
            });
        default:
        case "text":
            return nodes_1.builder.property.text({
                id: getCustomFieldId(customField.entity, customField.placeholder),
                badge: "Custom",
                label: customField.name,
            });
    }
}
function transformKinboxCustomFieldsToProperties(entity, customFields) {
    return customFields
        .filter((customField) => customField.entity === entity)
        .map(transformKinboxCustomFieldToProperty);
}
function transformPropertiesToKinboxPayload(properties) {
    return Object.entries(properties).reduce((acc, [placeholder, value]) => {
        if (placeholder.startsWith("custom-field:")) {
            const realPlaceholder = placeholder.split("custom-field:")[1];
            acc = Object.assign(Object.assign({}, acc), { customFields: Object.assign(Object.assign({}, ((acc === null || acc === void 0 ? void 0 : acc.customFields) || {})), { [realPlaceholder]: { value } }) });
        }
        else {
            acc[placeholder] = value;
        }
        return acc;
    }, {});
}
//# sourceMappingURL=helper.kinbox.js.map