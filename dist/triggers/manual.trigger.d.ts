import { NodeCategory } from "src/nodes";
declare const _default: {
    type: string;
    label: string;
    description: string;
    image_src: string;
    color: string;
    category: NodeCategory.TRIGGER;
    properties: any[];
    run: (ctx: import("src/nodes").RunContext, cmd: import("src/nodes").Commands) => Promise<void>;
};
export default _default;
