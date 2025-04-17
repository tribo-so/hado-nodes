import { NodeCategory } from "src/nodes";
declare const _default: {
    type: string;
    label: string;
    description: string;
    image_src: string;
    color: string;
    category: NodeCategory.INTEGRATION;
    default_properties_values: {
        wait_type: string;
        wait_interval: number;
        wait_interval_unit: string;
    };
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
            type?: import("src/nodes").PropertyType.PHONE;
        } | {
            id?: string;
            label?: string;
            badge?: string;
            tip?: string;
            hide_condition?: string;
            type?: import("src/nodes").PropertyType.SWITCH;
        })[];
        inline?: boolean;
    })[];
    run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => void;
};
export default _default;
