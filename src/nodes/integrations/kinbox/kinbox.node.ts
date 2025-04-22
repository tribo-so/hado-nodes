import contact from "./contact.kinbox";
import deal from "./deal.kinbox";
import {
  KinboxCustomField,
  KinboxGeneric,
  KinboxPaginatedResponse,
} from "./types.kinbox";
import { transformKinboxCustomFieldsToProperties } from "./helper.kinbox";
import { Node, NodeCategory, AuthorizationType, builder } from "src/nodes";

export default {
  type: "kinbox",
  label: "Kinbox",
  description: "Kinbox integration",
  image_src:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='45' height='41' viewBox='0 0 45 41' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.95741 0.400542C1.53531 0.426797 -0.30782 2.58278 0.0429187 4.9795L4.76184 37.2254C5.04932 39.1899 6.73426 40.6462 8.71968 40.6462H36.5656C38.5698 40.6462 40.2647 39.1629 40.5303 37.1763L44.895 4.53008C45.2179 2.11439 43.3239 -0.0261745 40.8869 0.000241952L3.95741 0.400542ZM19.8558 14.4502C18.0244 14.4502 16.6204 16.0768 16.888 17.8886L17.6267 22.8886C17.8441 24.3601 19.1069 25.4502 20.5945 25.4502H25.0616C26.5355 25.4502 27.791 24.3796 28.0239 22.9242L28.8241 17.9242C29.1158 16.1015 27.7078 14.4502 25.8618 14.4502H19.8558Z' fill='%230071F5'/%3E%3C/svg%3E",
  color: "#f1f5f9",
  category: NodeCategory.INTEGRATION,
  default_properties_values: {},
  properties: [],
  actions: [contact, deal],
  credentials: [
    {
      type: "v3",
      label: "Kinbox API",
      authorization_type: AuthorizationType.BEARER,
      base_url: "https://api4.kinbox.com.br/v3",
      bearer_token_key: "token",
      properties: [
        builder.property.text({
          id: "token",
          label: "Token v3",
          required: true,
        }),
      ],
      test: async (ctx) => {
        await ctx.fetch("/custom-fields");
        return { success: true };
      },
    },
  ],
  run: async (ctx, cmd) => {
    cmd.runAction(ctx, cmd);
    cmd.halt();
  },
  get_dynamic_properties: async (ctx) => {
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
  },
  triggers: [
    {
      id: "session:new",
      label: "New Session",
      properties: [],
      run: async (ctx, cmd) => {
        cmd.output(ctx.input);
      },
      subscribe: async (ctx) => {
        const response = await ctx.fetch.post<KinboxGeneric>("/webhooks", {
          url: ctx.webhook_url,
          secret: "kinbox-secret",
          events: ["session:new"],
        });
        ctx.saveVariable(ctx.webhook_url, response.data.id, {
          secret: true,
        });
      },
      unsubscribe: async (ctx) => {
        const webhookId = ctx.variables[ctx.webhook_url];
        await ctx.fetch.delete(`/webhooks/${webhookId}`);
      },
    },
  ],
} satisfies Node;
