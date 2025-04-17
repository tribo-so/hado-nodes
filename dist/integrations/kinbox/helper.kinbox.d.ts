import { KinboxCustomField } from "./types.kinbox";
export declare function transformKinboxCustomFieldsToProperties(entity: KinboxCustomField["entity"], customFields: KinboxCustomField[]): ({
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
export declare function transformPropertiesToKinboxPayload(properties: Record<string, any>): any;
