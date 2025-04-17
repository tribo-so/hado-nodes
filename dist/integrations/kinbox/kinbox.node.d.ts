import { NodeCategory, AuthorizationType } from "src/nodes";
declare const _default: {
    type: string;
    label: string;
    description: string;
    image_src: string;
    color: string;
    category: NodeCategory.INTEGRATION;
    default_properties_values: {};
    properties: any[];
    actions: ({
        id: string;
        label: string;
        operations: ({
            id: string;
            label: string;
            properties: {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: import("src/nodes").PropertyType.NUMBER;
                min?: number;
                max?: number;
            }[];
            run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => Promise<void>;
            default_properties_values?: undefined;
            optional_properties?: undefined;
            dynamic_properties?: undefined;
        } | {
            id: string;
            label: string;
            default_properties_values: {
                limit: number;
                offset: number;
            };
            properties: {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: import("src/nodes").PropertyType.SECTION;
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
                    type?: import("src/nodes").PropertyType.SELECT;
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
                    type?: import("src/nodes").PropertyType.COMBOBOX;
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
                    type?: import("src/nodes").PropertyType.MULTI_SELECT;
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
                    type?: import("src/nodes").PropertyType.NUMBER;
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
                    type?: import("src/nodes").PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.SWITCH;
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
            }[];
            optional_properties: {
                label: string;
                properties: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.TEXT;
                })[];
            };
            run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => Promise<void>;
            dynamic_properties?: undefined;
        } | {
            id: string;
            label: string;
            dynamic_properties: {
                enabled: true;
            };
            properties: {
                required: true;
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                placeholder?: string;
                hide_condition?: string;
                type?: import("src/nodes").PropertyType.TEXT;
            }[];
            optional_properties: {
                label: string;
                properties: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.TEXT;
                })[];
            };
            run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => Promise<void>;
            default_properties_values?: undefined;
        } | {
            id: string;
            label: string;
            dynamic_properties: {
                enabled: true;
            };
            properties: {
                required: true;
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                placeholder?: string;
                hide_condition?: string;
                type?: import("src/nodes").PropertyType.NUMBER;
                min?: number;
                max?: number;
            }[];
            optional_properties: {
                label: string;
                properties: ({
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.TEXT;
                })[];
            };
            run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => Promise<void>;
            default_properties_values?: undefined;
        })[];
    } | {
        id: string;
        label: string;
        operations: ({
            id: string;
            label: string;
            properties: {
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                required?: boolean;
                placeholder?: string;
                hide_condition?: string;
                type?: import("src/nodes").PropertyType.TEXT;
            }[];
            run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => Promise<void>;
            dynamic_properties?: undefined;
            optional_properties?: undefined;
        } | {
            id: string;
            label: string;
            dynamic_properties: {
                enabled: true;
            };
            properties: {
                id?: string;
                label?: string;
                hide_condition?: string;
                type?: import("src/nodes").PropertyType.SECTION;
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
                    type?: import("src/nodes").PropertyType.SELECT;
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
                    type?: import("src/nodes").PropertyType.COMBOBOX;
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
                    type?: import("src/nodes").PropertyType.MULTI_SELECT;
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
                    type?: import("src/nodes").PropertyType.NUMBER;
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
                    type?: import("src/nodes").PropertyType.PHONE;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    required?: boolean;
                    placeholder?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.TEXTAREA;
                    rows?: number;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.CHECKBOX;
                } | {
                    id?: string;
                    label?: string;
                    badge?: string;
                    tip?: string;
                    hide_condition?: string;
                    type?: import("src/nodes").PropertyType.SWITCH;
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
            }[];
            optional_properties: {
                label: string;
                properties: ({
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
                    type?: import("src/nodes").PropertyType.SELECT;
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
                    type?: import("src/nodes").PropertyType.COMBOBOX;
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
                    type?: import("src/nodes").PropertyType.NUMBER;
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
                    type?: import("src/nodes").PropertyType.TEXT;
                })[];
            };
            run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => Promise<void>;
        } | {
            id: string;
            label: string;
            dynamic_properties: {
                enabled: true;
            };
            properties: ({
                required: true;
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                placeholder?: string;
                hide_condition?: string;
                type?: import("src/nodes").PropertyType.TEXT;
            } | {
                required: true;
                id?: string;
                label?: string;
                badge?: string;
                tip?: string;
                placeholder?: string;
                hide_condition?: string;
                type?: import("src/nodes").PropertyType.NUMBER;
                min?: number;
                max?: number;
            })[];
            optional_properties: {
                label: string;
                properties: ({
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
                    type?: import("src/nodes").PropertyType.SELECT;
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
                    type?: import("src/nodes").PropertyType.COMBOBOX;
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
                    type?: import("src/nodes").PropertyType.NUMBER;
                    min?: number;
                    max?: number;
                })[];
            };
            run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => Promise<void>;
        })[];
    })[];
    credentials: {
        type: string;
        label: string;
        authorization_type: AuthorizationType.BEARER;
        base_url: string;
        bearer_token_key: string;
        properties: {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: import("src/nodes").PropertyType.TEXT;
        }[];
        test: (ctx: import("src/nodes").TestCredentialContext) => Promise<{
            success: boolean;
        }>;
    }[];
    run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => Promise<void>;
    get_dynamic_properties: (ctx: import("src/nodes").DynamicPropertiesContext) => Promise<{
        properties: any[];
        optional_properties: ({
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
            type?: import("src/nodes").PropertyType.SELECT;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            required?: boolean;
            placeholder?: string;
            hide_condition?: string;
            type?: import("src/nodes").PropertyType.NUMBER;
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
            type?: import("src/nodes").PropertyType.TEXT;
        })[];
    }>;
};
export default _default;
