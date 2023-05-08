import { arrayIsNullOrEmpty } from "./array.utils";

describe("Utils", () => {
  describe("arrayIsNullOrEmpty", () => {
    test("returns true if the array is null or empty", () => {
      expect(arrayIsNullOrEmpty([])).toBe(true);
    });

    test("returns false if the array is not null and not empty", () => {
      expect(arrayIsNullOrEmpty([{ id: 1 }, { id: 2 }])).toBe(false);
    });
  });
});
