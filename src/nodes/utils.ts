import _ from "lodash";
import { builder } from "src/nodes";

export const buildQueryString = (params: Record<string, string> = {}) => {
  return new URLSearchParams(
    _.pickBy(params, (v) => v !== undefined)
  ).toString();
};

export const CoreProperty = {
  pagination: builder.property.section({
    id: "pagination",
    inline: true,
    properties: [
      builder.property.number({
        id: "limit",
        label: "Limit",
        required: true,
        min: 1,
        max: 50,
      }),
      builder.property.number({
        id: "offset",
        label: "Offset",
        required: true,
        min: 0,
      }),
    ],
  }),
};
