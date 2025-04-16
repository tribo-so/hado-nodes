import dayjs from "dayjs";
import { Node, NodeCategory, builder } from "src/nodes";

export default {
  type: "await2",
  label: "Await2",
  description: "Wait before continue with execution",
  image_src:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m3.88 14.13a1 1 0 0 1-.71.3a1 1 0 0 1-.7-.3l-3.46-3.46V5.68a1 1 0 1 1 2 0v5.92l2.87 2.87a1 1 0 0 1 0 1.41'/%3E%3C/svg%3E",
  color: "#ec4899",
  category: NodeCategory.CORE,
  default_properties_values: {
    wait_type: "interval",
    wait_interval: 10,
    wait_interval_unit: "seconds",
  },
  properties: [
    builder.property.select({
      id: "wait_type",
      label: "Wait for",
      required: true,
      options: [
        {
          value: "interval",
          label: "Time interval",
          description: "Waits for a certain amount of time",
        },
        {
          value: "datetime",
          label: "At Specified time",
          description: "Waits until a specific date and time to continue",
        },
      ],
    }),
    builder.property.section({
      id: "section_interval",
      inline: true,
      hide_condition: "{{ properties.wait_type != 'interval' }}",
      properties: [
        builder.property.number({
          id: "wait_interval",
          label: "Time to wait",
          tip: "The amount of time to wait",
          required: true,
          min: 1,
        }),
        builder.property.select({
          id: "wait_interval_unit",
          label: "Wait unit",
          required: true,
          options: [
            {
              value: "seconds",
              label: "Seconds",
            },
            {
              value: "minutes",
              label: "Minutes",
            },
            {
              value: "hours",
              label: "Hours",
            },
            {
              value: "days",
              label: "Days",
            },
          ],
        }),
      ],
    }),
    builder.property.section({
      id: "section_datetime",
      inline: true,
      hide_condition: "{{ properties.wait_type != 'datetime' }}",
      properties: [
        builder.property.datetime({
          id: "wait_datetime",
          label: "Wait until",
          tip: "The date and time to wait until",
          required: true,
        }),
      ],
    }),
  ],
  run: (ctx, cmd) => {
    switch (ctx.properties.wait_type) {
      case "interval":
        let multiplier = 1000;
        switch (ctx.properties.wait_interval_unit) {
          case "seconds":
            multiplier = 1000;
            break;
          case "minutes":
            multiplier = 60 * 1000;
            break;
          case "hours":
            multiplier = 60 * 60 * 1000;
            break;
          case "days":
            multiplier = 24 * 60 * 60 * 1000;
            break;
        }
        cmd.halt();
        cmd.resume(
          { skip_run: true },
          { delay_ms: ctx.properties.wait_interval * multiplier }
        );
        break;
      case "datetime":
        const until_date = dayjs(ctx.properties.wait_datetime);
        const now = dayjs();
        if (until_date.isAfter(now)) {
          cmd.halt();
          cmd.resume(
            { skip_run: true },
            { delay_ms: until_date.diff(now, "ms") }
          );
        }
        break;
    }
  },
} satisfies Node;
