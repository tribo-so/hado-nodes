import { builder, DynamicPropertiesContext } from "src/nodes";
import { KinboxCustomField, KinboxPaginatedResponse } from "./types.kinbox";

function getCustomFieldId(placeholder: string) {
  return `custom-field:${placeholder}`;
}

function transformKinboxCustomFieldToProperty(customField: KinboxCustomField) {
  switch (customField.type) {
    case "number":
      return builder.property.number({
        badge: "Custom",
        id: getCustomFieldId(customField.placeholder),
        label: customField.name,
      });
    case "decimal":
      return builder.property.number({
        badge: "Custom",
        id: getCustomFieldId(customField.placeholder),
        label: customField.name,
      });
    case "select":
      let kOptions =
        typeof customField.options === "string"
          ? JSON.parse(customField.options)
          : customField.options;
      return builder.property.select({
        id: getCustomFieldId(customField.placeholder),
        label: customField.name,
        badge: "Custom",
        options: kOptions.map((option: { value: string }) => ({
          value: option.value,
          label: option.value,
        })),
      });
    case "multi-select":
      let kMultiOptions =
        typeof customField.options === "string"
          ? JSON.parse(customField.options)
          : customField.options;
      return builder.property.select({
        id: getCustomFieldId(customField.placeholder),
        label: customField.name,
        badge: "Custom",
        options: kMultiOptions.map((option: { value: string }) => ({
          value: option.value,
          label: option.value,
        })),
      });
    case "textarea":
      return builder.property.text({
        id: getCustomFieldId(customField.placeholder),
        badge: "Custom",
        label: customField.name,
      });
    case "json":
      return builder.property.text({
        id: getCustomFieldId(customField.placeholder),
        badge: "Custom",
        label: customField.name,
      });
    default:
    case "text":
      return builder.property.text({
        id: getCustomFieldId(customField.placeholder),
        badge: "Custom",
        label: customField.name,
      });
  }
}

export function transformKinboxCustomFieldsToProperties(
  entity: KinboxCustomField["entity"],
  customFields: KinboxCustomField[]
) {
  return customFields
    .filter((customField) => customField.entity === entity)
    .map(transformKinboxCustomFieldToProperty);
}

export function transformPropertiesToKinboxPayload(
  properties: Record<string, any>
) {
  return Object.entries(properties).reduce((acc, [placeholder, value]) => {
    if (placeholder.startsWith("custom-field:")) {
      const realPlaceholder = placeholder.split("custom-field:")[1];
      acc = {
        ...acc,
        customFields: {
          ...(acc?.customFields || {}),
          [realPlaceholder]: { value },
        },
      };
    } else {
      acc[placeholder] = value;
    }

    return acc;
  }, {} as any);
}

export const getCustomFieldsProperties = async (
  ctx: DynamicPropertiesContext
) => {
  const response =
    await ctx.fetch<KinboxPaginatedResponse<KinboxCustomField>>(
      "/custom-fields"
    );

  return {
    properties: [],
    optional_properties: transformKinboxCustomFieldsToProperties(
      ctx.action_id as KinboxCustomField["entity"],
      response.data.data
    ),
  };
};
