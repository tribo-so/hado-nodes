import { z } from "zod";
import { AuthorizationType, NodeCategory, PropertyType } from "./enums";
import { DynamicOptionsPowered } from "./types";
export declare const zSelectOption: z.ZodObject<{
    value: z.ZodString;
    label: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    label?: string;
    badge?: string;
    value?: string;
    description?: string;
}, {
    label?: string;
    badge?: string;
    value?: string;
    description?: string;
}>;
declare const zSelectProperty: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
    options: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }, {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }>, "atleastone">;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: [{
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }, ...{
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }[]];
    type?: PropertyType.SELECT;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: [{
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }, ...{
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }[]];
    type?: PropertyType;
}>;
export declare const zDynamicOptions: z.ZodObject<{
    enabled: z.ZodBoolean;
    depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    enabled?: boolean;
    depends_on?: string[];
}, {
    enabled?: boolean;
    depends_on?: string[];
}>;
export declare const zComboboxProperty: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
    dynamic_options: z.ZodObject<{
        enabled: z.ZodBoolean;
        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        enabled?: boolean;
        depends_on?: string[];
    }, {
        enabled?: boolean;
        depends_on?: string[];
    }>;
    options: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }, {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }[];
    type?: PropertyType.COMBOBOX;
    dynamic_options?: {
        enabled?: boolean;
        depends_on?: string[];
    };
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }[];
    type?: PropertyType;
    dynamic_options?: {
        enabled?: boolean;
        depends_on?: string[];
    };
}>;
declare const zMultiSelectProperty: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
    dynamic_options: z.ZodObject<{
        enabled: z.ZodBoolean;
        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        enabled?: boolean;
        depends_on?: string[];
    }, {
        enabled?: boolean;
        depends_on?: string[];
    }>;
    options: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        value?: string;
        description?: string;
    }, {
        label?: string;
        value?: string;
        description?: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: {
        label?: string;
        value?: string;
        description?: string;
    }[];
    type?: PropertyType.MULTI_SELECT;
    dynamic_options?: {
        enabled?: boolean;
        depends_on?: string[];
    };
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: {
        label?: string;
        value?: string;
        description?: string;
    }[];
    type?: PropertyType;
    dynamic_options?: {
        enabled?: boolean;
        depends_on?: string[];
    };
}>;
declare const zNumberProperty: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType.NUMBER;
    min?: number;
    max?: number;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType;
    min?: number;
    max?: number;
}>;
declare const zPhoneProperty: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType.PHONE;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType;
}>;
declare const zTextProperty: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXT, PropertyType>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType.TEXT;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType;
}>;
declare const zTextareaProperty: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
    rows: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType.TEXTAREA;
    rows?: number;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType;
    rows?: number;
}>;
declare const zSwitchProperty: z.ZodObject<Omit<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
}>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    hide_condition?: string;
    type?: PropertyType.SWITCH;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    hide_condition?: string;
    type?: PropertyType;
}>;
declare const zDatetimeProperty: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
}>;
export declare const zSectionProperty: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SECTION, PropertyType>;
    properties: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "atleastone">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {}>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
        rows: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>]>, "many">;
    inline: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    hide_condition?: string;
    type?: PropertyType.SECTION;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    })[];
    inline?: boolean;
}, {
    id?: string;
    label?: string;
    hide_condition?: string;
    type?: PropertyType;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    })[];
    inline?: boolean;
}>;
export declare const zAllProperties: z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
    options: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }, {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }>, "atleastone">;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: [{
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }, ...{
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }[]];
    type?: PropertyType.SELECT;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: [{
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }, ...{
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }[]];
    type?: PropertyType;
}>, z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType.NUMBER;
    min?: number;
    max?: number;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType;
    min?: number;
    max?: number;
}>, z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
}>, z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
    rows: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType.TEXTAREA;
    rows?: number;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType;
    rows?: number;
}>, z.ZodObject<Omit<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
}>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    hide_condition?: string;
    type?: PropertyType.CHECKBOX;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    hide_condition?: string;
    type?: PropertyType;
}>, z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
    dynamic_options: z.ZodObject<{
        enabled: z.ZodBoolean;
        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        enabled?: boolean;
        depends_on?: string[];
    }, {
        enabled?: boolean;
        depends_on?: string[];
    }>;
    options: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        value?: string;
        description?: string;
    }, {
        label?: string;
        value?: string;
        description?: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: {
        label?: string;
        value?: string;
        description?: string;
    }[];
    type?: PropertyType.MULTI_SELECT;
    dynamic_options?: {
        enabled?: boolean;
        depends_on?: string[];
    };
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: {
        label?: string;
        value?: string;
        description?: string;
    }[];
    type?: PropertyType;
    dynamic_options?: {
        enabled?: boolean;
        depends_on?: string[];
    };
}>, z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
    dynamic_options: z.ZodObject<{
        enabled: z.ZodBoolean;
        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        enabled?: boolean;
        depends_on?: string[];
    }, {
        enabled?: boolean;
        depends_on?: string[];
    }>;
    options: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }, {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }[];
    type?: PropertyType.COMBOBOX;
    dynamic_options?: {
        enabled?: boolean;
        depends_on?: string[];
    };
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    options?: {
        label?: string;
        badge?: string;
        value?: string;
        description?: string;
    }[];
    type?: PropertyType;
    dynamic_options?: {
        enabled?: boolean;
        depends_on?: string[];
    };
}>, z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType.PHONE;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    required?: boolean;
    placeholder?: string;
    hide_condition?: string;
    type?: PropertyType;
}>, z.ZodObject<Omit<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodString>;
    tip: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, {
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
}>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    hide_condition?: string;
    type?: PropertyType.SWITCH;
}, {
    id?: string;
    label?: string;
    badge?: string;
    tip?: string;
    hide_condition?: string;
    type?: PropertyType;
}>]>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SECTION, PropertyType>;
    properties: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "atleastone">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {}>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
        rows: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>]>, "many">;
    inline: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
    hide_condition: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    hide_condition?: string;
    type?: PropertyType.SECTION;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    })[];
    inline?: boolean;
}, {
    id?: string;
    label?: string;
    hide_condition?: string;
    type?: PropertyType;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    })[];
    inline?: boolean;
}>]>;
export declare const zNodeOperation: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "atleastone">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {}>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
        rows: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>]>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SECTION, PropertyType>;
        properties: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "atleastone">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
            min: z.ZodOptional<z.ZodNumber>;
            max: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {}>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
            rows: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>]>, "many">;
        inline: z.ZodOptional<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType.SECTION;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    }, {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    }>]>, "many">>;
    dynamic_properties: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        enabled?: boolean;
        depends_on?: string[];
    }, {
        enabled?: boolean;
        depends_on?: string[];
    }>>;
    optional_properties: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        tip: z.ZodOptional<z.ZodString>;
        properties: z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "atleastone">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
            min: z.ZodOptional<z.ZodNumber>;
            max: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {}>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
            rows: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>]>, z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SECTION, PropertyType>;
            properties: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }>, "atleastone">;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
                min: z.ZodOptional<z.ZodNumber>;
                max: z.ZodOptional<z.ZodNumber>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {}>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
                rows: z.ZodOptional<z.ZodNumber>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
            }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
                dynamic_options: z.ZodObject<{
                    enabled: z.ZodBoolean;
                    depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enabled?: boolean;
                    depends_on?: string[];
                }, {
                    enabled?: boolean;
                    depends_on?: string[];
                }>;
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    label?: string;
                    value?: string;
                    description?: string;
                }, {
                    label?: string;
                    value?: string;
                    description?: string;
                }>, "many">;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
                dynamic_options: z.ZodObject<{
                    enabled: z.ZodBoolean;
                    depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enabled?: boolean;
                    depends_on?: string[];
                }, {
                    enabled?: boolean;
                    depends_on?: string[];
                }>;
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }>, "many">;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
            }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            }>]>, "many">;
            inline: z.ZodOptional<z.ZodBoolean>;
            label: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType.SECTION;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        }, {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        }>]>, "many">;
        dynamic: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        tip?: string;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        } | {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType.SECTION;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        })[];
        dynamic?: boolean;
    }, {
        label?: string;
        tip?: string;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        } | {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        })[];
        dynamic?: boolean;
    }>>;
    default_properties_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    id?: string;
    label?: string;
    description?: string;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    } | {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType.SECTION;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    })[];
    dynamic_properties?: {
        enabled?: boolean;
        depends_on?: string[];
    };
    optional_properties?: {
        label?: string;
        tip?: string;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        } | {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType.SECTION;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        })[];
        dynamic?: boolean;
    };
    default_properties_values?: Record<string, any>;
}, {
    id?: string;
    label?: string;
    description?: string;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    } | {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    })[];
    dynamic_properties?: {
        enabled?: boolean;
        depends_on?: string[];
    };
    optional_properties?: {
        label?: string;
        tip?: string;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        } | {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        })[];
        dynamic?: boolean;
    };
    default_properties_values?: Record<string, any>;
}>;
export declare const zCredentialMeta: z.ZodObject<{
    type: z.ZodString;
    authorization_type: z.ZodNativeEnum<typeof AuthorizationType>;
    bearer_token_key: z.ZodOptional<z.ZodString>;
    base_url: z.ZodString;
    label: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "atleastone">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {}>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
        rows: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>]>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SECTION, PropertyType>;
        properties: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "atleastone">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
            min: z.ZodOptional<z.ZodNumber>;
            max: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {}>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
            rows: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>]>, "many">;
        inline: z.ZodOptional<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType.SECTION;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    }, {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    label?: string;
    type?: string;
    description?: string;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    } | {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType.SECTION;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    })[];
    authorization_type?: AuthorizationType;
    bearer_token_key?: string;
    base_url?: string;
}, {
    label?: string;
    type?: string;
    description?: string;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    } | {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    })[];
    authorization_type?: AuthorizationType;
    bearer_token_key?: string;
    base_url?: string;
}>;
export declare const zNodeMeta: z.ZodObject<{
    type: z.ZodString;
    color: z.ZodString;
    text_color: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    description: z.ZodString;
    image_src: z.ZodOptional<z.ZodString>;
    category: z.ZodNativeEnum<typeof NodeCategory>;
    properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "atleastone">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {}>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
        rows: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
        dynamic_options: z.ZodObject<{
            enabled: z.ZodBoolean;
            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            enabled?: boolean;
            depends_on?: string[];
        }, {
            enabled?: boolean;
            depends_on?: string[];
        }>;
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
    }>, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodString>;
        tip: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        placeholder: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, {
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    }, {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    }>]>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SECTION, PropertyType>;
        properties: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "atleastone">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
            min: z.ZodOptional<z.ZodNumber>;
            max: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {}>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
            rows: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>]>, "many">;
        inline: z.ZodOptional<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
        hide_condition: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType.SECTION;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    }, {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    }>]>, "many">>;
    default_properties_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        operations: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }>, "atleastone">;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
                min: z.ZodOptional<z.ZodNumber>;
                max: z.ZodOptional<z.ZodNumber>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {}>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
                rows: z.ZodOptional<z.ZodNumber>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
            }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
                dynamic_options: z.ZodObject<{
                    enabled: z.ZodBoolean;
                    depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enabled?: boolean;
                    depends_on?: string[];
                }, {
                    enabled?: boolean;
                    depends_on?: string[];
                }>;
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    label?: string;
                    value?: string;
                    description?: string;
                }, {
                    label?: string;
                    value?: string;
                    description?: string;
                }>, "many">;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
                dynamic_options: z.ZodObject<{
                    enabled: z.ZodBoolean;
                    depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enabled?: boolean;
                    depends_on?: string[];
                }, {
                    enabled?: boolean;
                    depends_on?: string[];
                }>;
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }>, "many">;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
            }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            }>]>, z.ZodObject<{
                id: z.ZodString;
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SECTION, PropertyType>;
                properties: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
                    options: z.ZodArray<z.ZodObject<{
                        value: z.ZodString;
                        label: z.ZodString;
                        description: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }>, "atleastone">;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
                    min: z.ZodOptional<z.ZodNumber>;
                    max: z.ZodOptional<z.ZodNumber>;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {}>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
                    rows: z.ZodOptional<z.ZodNumber>;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
                }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
                    dynamic_options: z.ZodObject<{
                        enabled: z.ZodBoolean;
                        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        enabled?: boolean;
                        depends_on?: string[];
                    }, {
                        enabled?: boolean;
                        depends_on?: string[];
                    }>;
                    options: z.ZodArray<z.ZodObject<{
                        value: z.ZodString;
                        label: z.ZodString;
                        description: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        label?: string;
                        value?: string;
                        description?: string;
                    }, {
                        label?: string;
                        value?: string;
                        description?: string;
                    }>, "many">;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
                    dynamic_options: z.ZodObject<{
                        enabled: z.ZodBoolean;
                        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        enabled?: boolean;
                        depends_on?: string[];
                    }, {
                        enabled?: boolean;
                        depends_on?: string[];
                    }>;
                    options: z.ZodArray<z.ZodObject<{
                        value: z.ZodString;
                        label: z.ZodString;
                        description: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }>, "many">;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
                }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                }>]>, "many">;
                inline: z.ZodOptional<z.ZodBoolean>;
                label: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: PropertyType.SECTION;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                })[];
                inline?: boolean;
            }, {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: PropertyType;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                })[];
                inline?: boolean;
            }>]>, "many">>;
            dynamic_properties: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>>;
            optional_properties: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                tip: z.ZodOptional<z.ZodString>;
                properties: z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
                    options: z.ZodArray<z.ZodObject<{
                        value: z.ZodString;
                        label: z.ZodString;
                        description: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }>, "atleastone">;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
                    min: z.ZodOptional<z.ZodNumber>;
                    max: z.ZodOptional<z.ZodNumber>;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {}>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
                    rows: z.ZodOptional<z.ZodNumber>;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
                }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
                    dynamic_options: z.ZodObject<{
                        enabled: z.ZodBoolean;
                        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        enabled?: boolean;
                        depends_on?: string[];
                    }, {
                        enabled?: boolean;
                        depends_on?: string[];
                    }>;
                    options: z.ZodArray<z.ZodObject<{
                        value: z.ZodString;
                        label: z.ZodString;
                        description: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        label?: string;
                        value?: string;
                        description?: string;
                    }, {
                        label?: string;
                        value?: string;
                        description?: string;
                    }>, "many">;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
                    dynamic_options: z.ZodObject<{
                        enabled: z.ZodBoolean;
                        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        enabled?: boolean;
                        depends_on?: string[];
                    }, {
                        enabled?: boolean;
                        depends_on?: string[];
                    }>;
                    options: z.ZodArray<z.ZodObject<{
                        value: z.ZodString;
                        label: z.ZodString;
                        description: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }>, "many">;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                }>, z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
                }>, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                    id: z.ZodString;
                    label: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                    tip: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    placeholder: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, {
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
                }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                }, {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                }>]>, z.ZodObject<{
                    id: z.ZodString;
                    type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SECTION, PropertyType>;
                    properties: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                        id: z.ZodString;
                        label: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodString>;
                        required: z.ZodOptional<z.ZodBoolean>;
                        placeholder: z.ZodOptional<z.ZodString>;
                        hide_condition: z.ZodOptional<z.ZodString>;
                    }, {
                        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
                        options: z.ZodArray<z.ZodObject<{
                            value: z.ZodString;
                            label: z.ZodString;
                            description: z.ZodOptional<z.ZodString>;
                            badge: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }>, "atleastone">;
                    }>, "strip", z.ZodTypeAny, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType.SELECT;
                    }, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType;
                    }>, z.ZodObject<z.objectUtil.extendShape<{
                        id: z.ZodString;
                        label: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodString>;
                        required: z.ZodOptional<z.ZodBoolean>;
                        placeholder: z.ZodOptional<z.ZodString>;
                        hide_condition: z.ZodOptional<z.ZodString>;
                    }, {
                        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
                        min: z.ZodOptional<z.ZodNumber>;
                        max: z.ZodOptional<z.ZodNumber>;
                    }>, "strip", z.ZodTypeAny, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.NUMBER;
                        min?: number;
                        max?: number;
                    }, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        min?: number;
                        max?: number;
                    }>, z.ZodObject<z.objectUtil.extendShape<{
                        id: z.ZodString;
                        label: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodString>;
                        required: z.ZodOptional<z.ZodBoolean>;
                        placeholder: z.ZodOptional<z.ZodString>;
                        hide_condition: z.ZodOptional<z.ZodString>;
                    }, {}>, "strip", z.ZodTypeAny, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    }, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    }>, z.ZodObject<z.objectUtil.extendShape<{
                        id: z.ZodString;
                        label: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodString>;
                        required: z.ZodOptional<z.ZodBoolean>;
                        placeholder: z.ZodOptional<z.ZodString>;
                        hide_condition: z.ZodOptional<z.ZodString>;
                    }, {
                        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
                        rows: z.ZodOptional<z.ZodNumber>;
                    }>, "strip", z.ZodTypeAny, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.TEXTAREA;
                        rows?: number;
                    }, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        rows?: number;
                    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                        id: z.ZodString;
                        label: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodString>;
                        required: z.ZodOptional<z.ZodBoolean>;
                        placeholder: z.ZodOptional<z.ZodString>;
                        hide_condition: z.ZodOptional<z.ZodString>;
                    }, {
                        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
                    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.CHECKBOX;
                    }, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    }>, z.ZodObject<z.objectUtil.extendShape<{
                        id: z.ZodString;
                        label: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodString>;
                        required: z.ZodOptional<z.ZodBoolean>;
                        placeholder: z.ZodOptional<z.ZodString>;
                        hide_condition: z.ZodOptional<z.ZodString>;
                    }, {
                        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
                        dynamic_options: z.ZodObject<{
                            enabled: z.ZodBoolean;
                            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        }, "strip", z.ZodTypeAny, {
                            enabled?: boolean;
                            depends_on?: string[];
                        }, {
                            enabled?: boolean;
                            depends_on?: string[];
                        }>;
                        options: z.ZodArray<z.ZodObject<{
                            value: z.ZodString;
                            label: z.ZodString;
                            description: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            label?: string;
                            value?: string;
                            description?: string;
                        }, {
                            label?: string;
                            value?: string;
                            description?: string;
                        }>, "many">;
                    }>, "strip", z.ZodTypeAny, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.MULTI_SELECT;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    }, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    }>, z.ZodObject<z.objectUtil.extendShape<{
                        id: z.ZodString;
                        label: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodString>;
                        required: z.ZodOptional<z.ZodBoolean>;
                        placeholder: z.ZodOptional<z.ZodString>;
                        hide_condition: z.ZodOptional<z.ZodString>;
                    }, {
                        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
                        dynamic_options: z.ZodObject<{
                            enabled: z.ZodBoolean;
                            depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        }, "strip", z.ZodTypeAny, {
                            enabled?: boolean;
                            depends_on?: string[];
                        }, {
                            enabled?: boolean;
                            depends_on?: string[];
                        }>;
                        options: z.ZodArray<z.ZodObject<{
                            value: z.ZodString;
                            label: z.ZodString;
                            description: z.ZodOptional<z.ZodString>;
                            badge: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }>, "many">;
                    }>, "strip", z.ZodTypeAny, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.COMBOBOX;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    }, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    }>, z.ZodObject<z.objectUtil.extendShape<{
                        id: z.ZodString;
                        label: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodString>;
                        required: z.ZodOptional<z.ZodBoolean>;
                        placeholder: z.ZodOptional<z.ZodString>;
                        hide_condition: z.ZodOptional<z.ZodString>;
                    }, {
                        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
                    }>, "strip", z.ZodTypeAny, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.PHONE;
                    }, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                        id: z.ZodString;
                        label: z.ZodOptional<z.ZodString>;
                        badge: z.ZodOptional<z.ZodString>;
                        tip: z.ZodOptional<z.ZodString>;
                        required: z.ZodOptional<z.ZodBoolean>;
                        placeholder: z.ZodOptional<z.ZodString>;
                        hide_condition: z.ZodOptional<z.ZodString>;
                    }, {
                        type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
                    }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.SWITCH;
                    }, {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    }>]>, "many">;
                    inline: z.ZodOptional<z.ZodBoolean>;
                    label: z.ZodOptional<z.ZodString>;
                    hide_condition: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType.SECTION;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType.SELECT;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.COMBOBOX;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.MULTI_SELECT;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.NUMBER;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.PHONE;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.TEXTAREA;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.CHECKBOX;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.SWITCH;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                }, {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                }>]>, "many">;
                dynamic: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                tip?: string;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                } | {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType.SECTION;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType.SELECT;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.COMBOBOX;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.MULTI_SELECT;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.NUMBER;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.PHONE;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.TEXTAREA;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.CHECKBOX;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.SWITCH;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                })[];
                dynamic?: boolean;
            }, {
                label?: string;
                tip?: string;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                } | {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                })[];
                dynamic?: boolean;
            }>>;
            default_properties_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            description?: string;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            } | {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: PropertyType.SECTION;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                })[];
                inline?: boolean;
            })[];
            dynamic_properties?: {
                enabled?: boolean;
                depends_on?: string[];
            };
            optional_properties?: {
                label?: string;
                tip?: string;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                } | {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType.SECTION;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType.SELECT;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.COMBOBOX;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.MULTI_SELECT;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.NUMBER;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.PHONE;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.TEXTAREA;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.CHECKBOX;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.SWITCH;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                })[];
                dynamic?: boolean;
            };
            default_properties_values?: Record<string, any>;
        }, {
            id?: string;
            label?: string;
            description?: string;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            } | {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: PropertyType;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                })[];
                inline?: boolean;
            })[];
            dynamic_properties?: {
                enabled?: boolean;
                depends_on?: string[];
            };
            optional_properties?: {
                label?: string;
                tip?: string;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                } | {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                })[];
                dynamic?: boolean;
            };
            default_properties_values?: Record<string, any>;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        operations?: {
            id?: string;
            label?: string;
            description?: string;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            } | {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: PropertyType.SECTION;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                })[];
                inline?: boolean;
            })[];
            dynamic_properties?: {
                enabled?: boolean;
                depends_on?: string[];
            };
            optional_properties?: {
                label?: string;
                tip?: string;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                } | {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType.SECTION;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType.SELECT;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.COMBOBOX;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.MULTI_SELECT;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.NUMBER;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.PHONE;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.TEXTAREA;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.CHECKBOX;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.SWITCH;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                })[];
                dynamic?: boolean;
            };
            default_properties_values?: Record<string, any>;
        }[];
    }, {
        label?: string;
        operations?: {
            id?: string;
            label?: string;
            description?: string;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            } | {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: PropertyType;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                })[];
                inline?: boolean;
            })[];
            dynamic_properties?: {
                enabled?: boolean;
                depends_on?: string[];
            };
            optional_properties?: {
                label?: string;
                tip?: string;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                } | {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                })[];
                dynamic?: boolean;
            };
            default_properties_values?: Record<string, any>;
        }[];
    }>, "many">>;
    dynamic_properties: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        enabled?: boolean;
        depends_on?: string[];
    }, {
        enabled?: boolean;
        depends_on?: string[];
    }>>;
    credentials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        authorization_type: z.ZodNativeEnum<typeof AuthorizationType>;
        bearer_token_key: z.ZodOptional<z.ZodString>;
        base_url: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "atleastone">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
            min: z.ZodOptional<z.ZodNumber>;
            max: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {}>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
            rows: z.ZodOptional<z.ZodNumber>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
            dynamic_options: z.ZodObject<{
                enabled: z.ZodBoolean;
                depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                enabled?: boolean;
                depends_on?: string[];
            }, {
                enabled?: boolean;
                depends_on?: string[];
            }>;
            options: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                label: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        }>, z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodOptional<z.ZodString>;
            badge: z.ZodOptional<z.ZodString>;
            tip: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            placeholder: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, {
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
        }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        }, {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        }>]>, z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SECTION, PropertyType>;
            properties: z.ZodArray<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SELECT, PropertyType>;
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }>, "atleastone">;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.NUMBER, PropertyType>;
                min: z.ZodOptional<z.ZodNumber>;
                max: z.ZodOptional<z.ZodNumber>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {}>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.TEXTAREA, PropertyType>;
                rows: z.ZodOptional<z.ZodNumber>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.CHECKBOX, PropertyType>;
            }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.MULTI_SELECT, PropertyType>;
                dynamic_options: z.ZodObject<{
                    enabled: z.ZodBoolean;
                    depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enabled?: boolean;
                    depends_on?: string[];
                }, {
                    enabled?: boolean;
                    depends_on?: string[];
                }>;
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    label?: string;
                    value?: string;
                    description?: string;
                }, {
                    label?: string;
                    value?: string;
                    description?: string;
                }>, "many">;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.COMBOBOX, PropertyType>;
                dynamic_options: z.ZodObject<{
                    enabled: z.ZodBoolean;
                    depends_on: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    enabled?: boolean;
                    depends_on?: string[];
                }, {
                    enabled?: boolean;
                    depends_on?: string[];
                }>;
                options: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodOptional<z.ZodString>;
                    badge: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }>, "many">;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            }>, z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.PHONE, PropertyType>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            }>, z.ZodObject<Omit<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodOptional<z.ZodString>;
                badge: z.ZodOptional<z.ZodString>;
                tip: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                placeholder: z.ZodOptional<z.ZodString>;
                hide_condition: z.ZodOptional<z.ZodString>;
            }, {
                type: z.ZodEffects<z.ZodNativeEnum<typeof PropertyType>, PropertyType.SWITCH, PropertyType>;
            }>, "required" | "placeholder">, "strip", z.ZodTypeAny, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            }, {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            }>]>, "many">;
            inline: z.ZodOptional<z.ZodBoolean>;
            label: z.ZodOptional<z.ZodString>;
            hide_condition: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType.SECTION;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        }, {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        type?: string;
        description?: string;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        } | {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType.SECTION;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        })[];
        authorization_type?: AuthorizationType;
        bearer_token_key?: string;
        base_url?: string;
    }, {
        label?: string;
        type?: string;
        description?: string;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        } | {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        })[];
        authorization_type?: AuthorizationType;
        bearer_token_key?: string;
        base_url?: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    label?: string;
    type?: string;
    description?: string;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType.SELECT;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.COMBOBOX;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType.MULTI_SELECT;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.NUMBER;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.PHONE;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType.TEXTAREA;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.CHECKBOX;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType.SWITCH;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    } | {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType.SECTION;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    })[];
    dynamic_properties?: {
        enabled?: boolean;
        depends_on?: string[];
    };
    default_properties_values?: Record<string, any>;
    color?: string;
    text_color?: string;
    image_src?: string;
    category?: NodeCategory;
    actions?: {
        label?: string;
        operations?: {
            id?: string;
            label?: string;
            description?: string;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            } | {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: PropertyType.SECTION;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                })[];
                inline?: boolean;
            })[];
            dynamic_properties?: {
                enabled?: boolean;
                depends_on?: string[];
            };
            optional_properties?: {
                label?: string;
                tip?: string;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType.SELECT;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.COMBOBOX;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType.MULTI_SELECT;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType.SWITCH;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                } | {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType.SECTION;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType.SELECT;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.COMBOBOX;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType.MULTI_SELECT;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.NUMBER;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.PHONE;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType.TEXTAREA;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.CHECKBOX;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType.SWITCH;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                })[];
                dynamic?: boolean;
            };
            default_properties_values?: Record<string, any>;
        }[];
    }[];
    credentials?: {
        label?: string;
        type?: string;
        description?: string;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.COMBOBOX;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType.MULTI_SELECT;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.NUMBER;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType.TEXTAREA;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.CHECKBOX;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType.SWITCH;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        } | {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType.SECTION;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType.SELECT;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.COMBOBOX;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType.MULTI_SELECT;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.NUMBER;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.PHONE;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType.TEXTAREA;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.CHECKBOX;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType.SWITCH;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        })[];
        authorization_type?: AuthorizationType;
        bearer_token_key?: string;
        base_url?: string;
    }[];
}, {
    label?: string;
    type?: string;
    description?: string;
    properties?: ({
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: [{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }, ...{
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[]];
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            badge?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        options?: {
            label?: string;
            value?: string;
            description?: string;
        }[];
        type?: PropertyType;
        dynamic_options?: {
            enabled?: boolean;
            depends_on?: string[];
        };
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        min?: number;
        max?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
        type?: PropertyType;
        rows?: number;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        hide_condition?: string;
        type?: PropertyType;
    } | {
        id?: string;
        label?: string;
        badge?: string;
        tip?: string;
        required?: boolean;
        placeholder?: string;
        hide_condition?: string;
    } | {
        id?: string;
        label?: string;
        hide_condition?: string;
        type?: PropertyType;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        })[];
        inline?: boolean;
    })[];
    dynamic_properties?: {
        enabled?: boolean;
        depends_on?: string[];
    };
    default_properties_values?: Record<string, any>;
    color?: string;
    text_color?: string;
    image_src?: string;
    category?: NodeCategory;
    actions?: {
        label?: string;
        operations?: {
            id?: string;
            label?: string;
            description?: string;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            } | {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: PropertyType;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                })[];
                inline?: boolean;
            })[];
            dynamic_properties?: {
                enabled?: boolean;
                depends_on?: string[];
            };
            optional_properties?: {
                label?: string;
                tip?: string;
                properties?: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: [{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }, ...{
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[]];
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        badge?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    options?: {
                        label?: string;
                        value?: string;
                        description?: string;
                    }[];
                    type?: PropertyType;
                    dynamic_options?: {
                        enabled?: boolean;
                        depends_on?: string[];
                    };
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    min?: number;
                    max?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                } | {
                    id?: string;
                    label?: string;
                    hide_condition?: string;
                    type?: PropertyType;
                    properties?: ({
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: [{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }, ...{
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[]];
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            badge?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        options?: {
                            label?: string;
                            value?: string;
                            description?: string;
                        }[];
                        type?: PropertyType;
                        dynamic_options?: {
                            enabled?: boolean;
                            depends_on?: string[];
                        };
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        min?: number;
                        max?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                        rows?: number;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        hide_condition?: string;
                        type?: PropertyType;
                    } | {
                        id?: string;
                        label?: string;
                        badge?: string;
                        tip?: string;
                        required?: boolean;
                        placeholder?: string;
                        hide_condition?: string;
                    })[];
                    inline?: boolean;
                })[];
                dynamic?: boolean;
            };
            default_properties_values?: Record<string, any>;
        }[];
    }[];
    credentials?: {
        label?: string;
        type?: string;
        description?: string;
        properties?: ({
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: [{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }, ...{
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[]];
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                badge?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            options?: {
                label?: string;
                value?: string;
                description?: string;
            }[];
            type?: PropertyType;
            dynamic_options?: {
                enabled?: boolean;
                depends_on?: string[];
            };
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            min?: number;
            max?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: PropertyType;
            rows?: number;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: PropertyType;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
        } | {
            id?: string;
            label?: string;
            hide_condition?: string;
            type?: PropertyType;
            properties?: ({
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: [{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }, ...{
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[]];
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    badge?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                options?: {
                    label?: string;
                    value?: string;
                    description?: string;
                }[];
                type?: PropertyType;
                dynamic_options?: {
                    enabled?: boolean;
                    depends_on?: string[];
                };
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                min?: number;
                max?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: PropertyType;
                rows?: number;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                hide_condition?: string;
                type?: PropertyType;
            } | {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
            })[];
            inline?: boolean;
        })[];
        authorization_type?: AuthorizationType;
        bearer_token_key?: string;
        base_url?: string;
    }[];
}>;
export declare const builder: {
    property: {
        text: (definition: Omit<z.infer<typeof zTextProperty>, "type"> & {
            id: string;
        }) => z.infer<typeof zTextProperty>;
        textarea: (definition: Omit<z.infer<typeof zTextareaProperty>, "type"> & {
            id: string;
        }) => z.infer<typeof zTextareaProperty>;
        switch: (definition: Omit<z.infer<typeof zSwitchProperty>, "type"> & {
            id: string;
        }) => z.infer<typeof zSwitchProperty>;
        select: (definition: Omit<z.infer<typeof zSelectProperty>, "type"> & {
            id: string;
            options: z.infer<typeof zSelectOption>[];
        }) => z.infer<typeof zSelectProperty>;
        combobox: (definition: Omit<z.infer<typeof zComboboxProperty>, "type"> & {
            dynamic_options?: DynamicOptionsPowered;
            id: string;
            options: z.infer<typeof zSelectOption>[];
        }) => z.infer<typeof zComboboxProperty>;
        multiselect: (definition: Omit<z.infer<typeof zMultiSelectProperty>, "type"> & {
            id: string;
            options: z.infer<typeof zSelectOption>[];
        }) => z.infer<typeof zMultiSelectProperty>;
        phone: (definition: Omit<z.infer<typeof zPhoneProperty>, "type"> & {
            id: string;
        }) => z.infer<typeof zPhoneProperty>;
        number: (definition: Omit<z.infer<typeof zNumberProperty>, "type"> & {
            id: string;
        }) => z.infer<typeof zNumberProperty>;
        datetime: (definition: Omit<z.infer<typeof zDatetimeProperty>, "type"> & {
            id: string;
        }) => z.infer<typeof zDatetimeProperty>;
        section: (definition: Omit<z.infer<typeof zSectionProperty>, "type"> & {
            hide_condition?: `{{${string}}}`;
            id: string;
        }) => z.infer<typeof zSectionProperty>;
        action: (definition: Omit<z.infer<typeof zSectionProperty>, "type"> & {
            hide_condition?: `{{${string}}}`;
        }) => z.infer<typeof zSectionProperty>;
    };
};
export {};
