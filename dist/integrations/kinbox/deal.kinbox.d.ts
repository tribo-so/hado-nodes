declare const _default: {
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
};
export default _default;
