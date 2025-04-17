"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = require("dayjs");
const nodes_1 = require("src/nodes");
exports.default = {
    type: "gemini",
    label: "Gemini",
    description: "Chat with DeepSeek",
    image_src: "https://cdn-icons-png.flaticon.com/512/10817/10817293.png",
    color: "#000000",
    category: nodes_1.NodeCategory.INTEGRATION,
    default_properties_values: {
        wait_type: "interval",
        wait_interval: 10,
        wait_interval_unit: "seconds",
    },
    properties: [
        nodes_1.builder.property.select({
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
        nodes_1.builder.property.section({
            id: "section_interval",
            inline: true,
            hide_condition: "{{ properties.wait_type != 'interval' }}",
            properties: [
                nodes_1.builder.property.number({
                    id: "wait_interval",
                    label: "Time to wait",
                    tip: "The amount of time to wait",
                    required: true,
                    min: 1,
                }),
                nodes_1.builder.property.select({
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
        nodes_1.builder.property.section({
            id: "section_datetime",
            inline: true,
            hide_condition: "{{ properties.wait_type != 'datetime' }}",
            properties: [
                nodes_1.builder.property.datetime({
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
                cmd.resume({ skip_run: true }, { delay_ms: ctx.properties.wait_interval * multiplier });
                break;
            case "datetime":
                const until_date = (0, dayjs_1.default)(ctx.properties.wait_datetime);
                const now = (0, dayjs_1.default)();
                if (until_date.isAfter(now)) {
                    cmd.halt();
                    cmd.resume({ skip_run: true }, { delay_ms: until_date.diff(now, "ms") });
                }
                break;
        }
    },
};
//# sourceMappingURL=gemini.node.js.map