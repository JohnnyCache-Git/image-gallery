import { formatBytes } from "./file.utils";

describe("Utils", () => {
  describe("formatBytes", () => {
    test("returns 0 bytes if passed 0", () => {
      expect(formatBytes(0)).toBe("0 bytes");
    });

    test("correctly formats bytes into KB, MB, GB, or TB", () => {
      expect(formatBytes(1024)).toBe("1.0 KB");
      expect(formatBytes(1024 * 1024)).toBe("1.0 MB");
      expect(formatBytes(1024 * 1024 * 1024)).toBe("1.0 GB");
      expect(formatBytes(1024 * 1024 * 1024 * 1024)).toBe("1.0 TB");
    });

    test("correctly formats bytes with decimal values", () => {
      expect(formatBytes(1000)).toBe("1000 bytes");
      expect(formatBytes(1500)).toBe("1.5 KB");
      expect(formatBytes(2000000)).toBe("1.9 MB");
      expect(formatBytes(3000000000)).toBe("2.8 GB");
      expect(formatBytes(4000000000000)).toBe("3.6 TB");
    });
  });
});
