import { z } from "zod";
import { AuthorizationType, NodeCategory, PropertyType } from "./enums";
import { DynamicOptionsPowered } from "./types";

// ██████╗ ██████╗  ██████╗ ██████╗ ███████╗██████╗ ████████╗██╗███████╗███████╗
// ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██║██╔════╝██╔════╝
// ██████╔╝██████╔╝██║   ██║██████╔╝█████╗  ██████╔╝   ██║   ██║█████╗  ███████╗
// ██╔═══╝ ██╔══██╗██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗   ██║   ██║██╔══╝  ╚════██║
// ██║     ██║  ██║╚██████╔╝██║     ███████╗██║  ██║   ██║   ██║███████╗███████║
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝╚══════╝╚══════╝
//

const zPropertyType = z.nativeEnum(PropertyType);

const zBaseProperty = z.object({
  id: z.string(),
  label: z.string().optional(),
  badge: z.string().optional(),
  tip: z.string().optional(),
  required: z.boolean().optional(),
  placeholder: z.string().optional(),
  hide_condition: z.string().optional(),
});

export const zSelectOption = z.object({
  value: z.string(),
  label: z.string(),
  description: z.string().optional(),
  badge: z.string().optional(),
});

const zSelectProperty = zBaseProperty.extend({
  type: zPropertyType.refine((type) => type === PropertyType.SELECT),
  options: z.array(zSelectOption).nonempty(),
});

export const zDynamicOptions = z.object({
  enabled: z.boolean(),
  depends_on: z.string().array().optional(),
});

export const zDynamicProperties = z.object({
  enabled: z.boolean(),
  depends_on: z.string().array().optional(),
});

export const zComboboxProperty = zBaseProperty.extend({
  type: zPropertyType.refine((type) => type === PropertyType.COMBOBOX),
  dynamic_options: zDynamicOptions,
  options: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
      description: z.string().optional(),
      badge: z.string().optional(),
    })
  ),
});

const zMultiSelectProperty = zBaseProperty.extend({
  type: zPropertyType.refine((type) => type === PropertyType.MULTI_SELECT),
  dynamic_options: z.object({
    enabled: z.boolean(),
    depends_on: z.string().array().optional(),
  }),
  options: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
      description: z.string().optional(),
    })
  ),
});

const zNumberProperty = zBaseProperty.extend({
  type: zPropertyType.refine((type) => type === PropertyType.NUMBER),
  min: z.number().optional(),
  max: z.number().optional(),
});

const zPhoneProperty = zBaseProperty.extend({
  type: zPropertyType.refine((type) => type === PropertyType.PHONE),
});

const zTextProperty = zBaseProperty.extend({
  type: zPropertyType.refine((type) => type === PropertyType.TEXT),
});

const zTextareaProperty = zBaseProperty.extend({
  type: zPropertyType.refine((type) => type === PropertyType.TEXTAREA),
  rows: z.number().optional(),
});

const zCheckboxProperty = zBaseProperty
  .extend({
    type: zPropertyType.refine((type) => type === PropertyType.CHECKBOX),
  })
  .omit({
    placeholder: true,
    required: true,
  });

const zSwitchProperty = zBaseProperty
  .extend({
    type: zPropertyType.refine((type) => type === PropertyType.SWITCH),
  })
  .omit({
    placeholder: true,
    required: true,
  });

const zDatetimeProperty = zBaseProperty.extend({});

const zAllPropertiesWithoutSection = z.union([
  zSelectProperty,
  zNumberProperty,
  zDatetimeProperty,
  zTextareaProperty,
  zCheckboxProperty,
  zMultiSelectProperty,
  zComboboxProperty,
  zPhoneProperty,
  zSwitchProperty,
]);

export const zSectionProperty = z.object({
  id: z.string().nonempty(),
  type: zPropertyType.refine((type) => type === PropertyType.SECTION),
  properties: z.array(zAllPropertiesWithoutSection),
  inline: z.boolean().optional(),
  label: z.string().optional(),
  hide_condition: z.string().optional(),
});

export const zAllProperties = z.union([
  zAllPropertiesWithoutSection,
  zSectionProperty,
]);

//  █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
// ██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
// ███████║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
// ██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
// ██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
// ╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
//
export const zNodeOperation = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string().optional(),
  properties: zAllProperties.array().optional(),
  dynamic_properties: zDynamicProperties.optional(),
  optional_properties: z
    .object({
      label: z.string(),
      tip: z.string().optional(),
      properties: zAllProperties.array(),
      dynamic: z.boolean().optional(),
    })
    .optional(),
  default_properties_values: z.record(z.string(), z.any()).optional(),
});

const zNodeAction = z.object({
  label: z.string(),
  operations: zNodeOperation.array(),
});

// ███╗   ███╗███████╗████████╗ █████╗
// ████╗ ████║██╔════╝╚══██╔══╝██╔══██╗
// ██╔████╔██║█████╗     ██║   ███████║
// ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║
// ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║
// ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝
//

export const zCredentialMeta = z.object({
  type: z.string(),
  authorization_type: z.nativeEnum(AuthorizationType),
  bearer_token_key: z.string().optional(),
  base_url: z.string(),
  label: z.string(),
  description: z.string().optional(),
  properties: zAllProperties.array().optional(),
});

export const zNodeMeta = z.object({
  type: z.string(),
  color: z.string(),
  text_color: z.string().optional(),
  label: z.string(),
  description: z.string(),
  image_src: z.string().optional(),
  category: z.nativeEnum(NodeCategory),
  // properties: zAllProperties.array().optional(),
  // default_properties_values: z.record(z.string(), z.any()).optional(),
  actions: zNodeAction.array().optional(),
  // dynamic_properties: z
  //   .object({
  //     enabled: z.boolean(),
  //     depends_on: z.string().array().optional(),
  //   })
  //   .optional(),
  credentials: zCredentialMeta.array().optional(),
});

// ██████╗ ██╗   ██╗██╗██╗     ██████╗ ███████╗██████╗     ██╗  ██╗███████╗██╗     ██████╗ ███████╗██████╗
// ██╔══██╗██║   ██║██║██║     ██╔══██╗██╔════╝██╔══██╗    ██║  ██║██╔════╝██║     ██╔══██╗██╔════╝██╔══██╗
// ██████╔╝██║   ██║██║██║     ██║  ██║█████╗  ██████╔╝    ███████║█████╗  ██║     ██████╔╝█████╗  ██████╔╝
// ██╔══██╗██║   ██║██║██║     ██║  ██║██╔══╝  ██╔══██╗    ██╔══██║██╔══╝  ██║     ██╔═══╝ ██╔══╝  ██╔══██╗
// ██████╔╝╚██████╔╝██║███████╗██████╔╝███████╗██║  ██║    ██║  ██║███████╗███████╗██║     ███████╗██║  ██║
// ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝
//
const property = {
  text: (
    definition: Omit<z.infer<typeof zTextProperty>, "type"> & { id: string }
  ) => {
    return { ...definition, type: PropertyType.TEXT } as z.infer<
      typeof zTextProperty
    >;
  },
  textarea: (
    definition: Omit<z.infer<typeof zTextareaProperty>, "type"> & { id: string }
  ) => {
    return { ...definition, type: PropertyType.TEXTAREA } as z.infer<
      typeof zTextareaProperty
    >;
  },
  switch: (
    definition: Omit<z.infer<typeof zSwitchProperty>, "type"> & { id: string }
  ) => {
    return { ...definition, type: PropertyType.SWITCH } as z.infer<
      typeof zSwitchProperty
    >;
  },
  // checkbox: (definition: Omit<z.infer<typeof zCheckboxProperty>, "type">) => {
  //   return { ...definition, type: PropertyType.CHECKBOX } as z.infer<
  //     typeof zCheckboxProperty
  //   >;
  // },
  select: (
    definition: Omit<z.infer<typeof zSelectProperty>, "type"> & {
      id: string;
      options: z.infer<typeof zSelectOption>[];
    }
  ) => {
    return { ...definition, type: PropertyType.SELECT } as z.infer<
      typeof zSelectProperty
    >;
  },
  combobox: (
    definition: Omit<z.infer<typeof zComboboxProperty>, "type"> & {
      dynamic_options?: DynamicOptionsPowered;
      id: string;
      options: z.infer<typeof zSelectOption>[];
    }
  ) => {
    return { ...definition, type: PropertyType.COMBOBOX } as z.infer<
      typeof zComboboxProperty
    >;
  },
  multiselect: (
    definition: Omit<z.infer<typeof zMultiSelectProperty>, "type"> & {
      id: string;
      options: z.infer<typeof zSelectOption>[];
    }
  ) => {
    return { ...definition, type: PropertyType.MULTI_SELECT } as z.infer<
      typeof zMultiSelectProperty
    >;
  },
  phone: (
    definition: Omit<z.infer<typeof zPhoneProperty>, "type"> & { id: string }
  ) => {
    return { ...definition, type: PropertyType.PHONE } as z.infer<
      typeof zPhoneProperty
    >;
  },
  number: (
    definition: Omit<z.infer<typeof zNumberProperty>, "type"> & { id: string }
  ) => {
    return { ...definition, type: PropertyType.NUMBER } as z.infer<
      typeof zNumberProperty
    >;
  },
  datetime: (
    definition: Omit<z.infer<typeof zDatetimeProperty>, "type"> & { id: string }
  ) => {
    return { ...definition, type: PropertyType.DATETIME } as z.infer<
      typeof zDatetimeProperty
    >;
  },
  section: (
    definition: Omit<z.infer<typeof zSectionProperty>, "type"> & {
      hide_condition?: `{{${string}}}`;
      id: string;
    }
  ) => {
    return { ...definition, type: PropertyType.SECTION } as z.infer<
      typeof zSectionProperty
    >;
  },
  action: (
    definition: Omit<z.infer<typeof zSectionProperty>, "type"> & {
      hide_condition?: `{{${string}}}`;
    }
  ) => {
    return { ...definition, type: PropertyType.SECTION } as z.infer<
      typeof zSectionProperty
    >;
  },
};

export const builder = {
  property,
};
