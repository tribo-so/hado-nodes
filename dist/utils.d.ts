import { Commands, NodePowered, RunContext, Credential, Node } from "src/nodes";
export declare const buildQueryString: (params?: Record<string, string>) => string;
export declare const CoreProperty: {
    pagination: {
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
    };
};
export declare const createRunFetcher: (dto: {
    baseUrl: string;
    bearerToken: string;
    cmd: Commands;
}) => import("axios").AxiosInstance;
export declare const createStaticFetcher: (dto: {
    baseUrl: string;
    bearerToken: string;
}) => import("axios").AxiosInstance;
export declare function createCredentialFetcher(dto: {
    node: NodePowered;
    credential: Credential;
}): import("axios").AxiosInstance;
export declare const generateRunContextMocks: (node: Node, opts: Partial<RunContext>) => [RunContext, Commands];
export declare const generateRunCommandsMock: (node: Node, credentials: Credential | {}) => Commands;
