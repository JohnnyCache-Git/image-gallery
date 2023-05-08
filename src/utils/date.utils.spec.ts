import { formatDatetimeAsDate } from "./date.utils";

describe("Utils", () => {
  describe("formatDatetimeAsDate", () => {
    it("returns an empty string when no datetime is provided", () => {
      expect(formatDatetimeAsDate()).toEqual("");
    });

    it("formats a datetime string as expected wthen datetime provided", () => {
      expect(formatDatetimeAsDate("2023-05-08T12:34:56.789Z")).toEqual(
        "May 08, 2023"
      );
    });
  });
});
