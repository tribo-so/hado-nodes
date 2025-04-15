import { Node, NodeCategory } from "src/nodes";

export default {
  type: "trigger:manual",
  label: "Trigger Manual",
  description:
    "Triggers start your workflow. Workflows can have multiple triggers.",
  image_src:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 48 48'%3E%3Cg fill='white' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'%3E%3Cpath d='M24 4v8'/%3E%3Cpath fill='white' fill-rule='evenodd' d='m22 22l20 4l-6 4l6 6l-6 6l-6-6l-4 6z' clip-rule='evenodd'/%3E%3Cpath d='m38.142 9.858l-5.657 5.657M9.858 38.142l5.657-5.657M4 24h8M9.858 9.858l5.657 5.657'/%3E%3C/g%3E%3C/svg%3E",
  color: "#10b981",
  category: NodeCategory.TRIGGER,
  properties: [],
  run: async (ctx, cmd) => {
    cmd.output({
      teste: "testeoutputtrigger",
    });
  },
} satisfies Node;
