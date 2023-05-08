import { getDimensionsString } from "./string.utils";

describe("Utils", () => {
  describe("getDimensionsString", () => {
    test("returns empty string if passed undefined", () => {
      expect(getDimensionsString(undefined)).toBe("");
    });

    test("returns formatted dimensions string if passed a size object", () => {
      expect(getDimensionsString({ width: 100, height: 200 })).toBe(
        "100 × 200"
      );
      expect(getDimensionsString({ width: 500, height: 500 })).toBe(
        "500 × 500"
      );
    });
  });
});
