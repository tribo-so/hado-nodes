import { generateRunContextMocks } from "src/nodes/utils";
import AwaitNode from "./await.node";
import { describe, it, expect, vi } from "vitest";

describe("Await Node", () => {
  it("should halt and resume with correct delay", async () => {
    const args = generateRunContextMocks(AwaitNode, {
      properties: {
        wait_type: "interval",
        wait_interval: 2,
        wait_interval_unit: "minutes",
      },
    });
,
    await AwaitNode.actions?.[0]?.operations?.[0]?.run(...args);

    expect(args[1].halt).toHaveBeenCalled();
    expect(args[1].resume).toHaveBeenCalledWith(
      { skip_run: true },
      { delay_ms: 2 * 60 * 1000 }
    );
  });
});
