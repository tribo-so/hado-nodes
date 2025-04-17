"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("src/nodes/utils");
const await_node_1 = require("./await.node");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("Await Node", () => {
    (0, vitest_1.it)("should halt and resume with correct delay", async () => {
        const args = (0, utils_1.generateRunContextMocks)(await_node_1.default, {
            properties: {
                wait_type: "interval",
                wait_interval: 2,
                wait_interval_unit: "minutes",
            },
        });
        await await_node_1.default.run(...args);
        (0, vitest_1.expect)(args[1].halt).toHaveBeenCalled();
        (0, vitest_1.expect)(args[1].resume).toHaveBeenCalledWith({ skip_run: true }, { delay_ms: 2 * 60 * 1000 });
    });
});
//# sourceMappingURL=await.node.test.js.map