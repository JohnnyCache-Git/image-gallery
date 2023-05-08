import { ImageResource } from "../../api/images/image.resource";
import { sortByDateDesc } from "./photo-gallery.utils";

describe("Utils", () => {
  describe("sortByDateDesc", () => {
    it("sorts an array of ImageResource objects by createdAt in descending order", () => {
      const input: ImageResource[] = [
        {
          id: "1",
          url: "https://example.com/1.jpg",
          filename: "1.jpg",
          uploadedBy: "user1",
          createdAt: "2022-03-01T12:00:00.000Z",
          updatedAt: "2022-03-01T12:00:00.000Z",
          dimensions: { width: 100, height: 100 },
          resolution: { width: 72, height: 72 },
          sizeInBytes: 1000,
          sharedWith: [],
          favorited: false,
        },
        {
          id: "2",
          url: "https://example.com/2.jpg",
          filename: "2.jpg",
          uploadedBy: "user2",
          createdAt: "2021-02-15T00:00:00.000Z",
          updatedAt: "2021-02-15T00:00:00.000Z",
          dimensions: { width: 200, height: 200 },
          resolution: { width: 72, height: 72 },
          sizeInBytes: 2000,
          sharedWith: [],
          favorited: true,
        },
        {
          id: "3",
          url: "https://example.com/3.jpg",
          filename: "3.jpg",
          uploadedBy: "user3",
          createdAt: "2023-05-08T23:59:59.999Z",
          updatedAt: "2023-05-08T23:59:59.999Z",
          dimensions: { width: 300, height: 300 },
          resolution: { width: 72, height: 72 },
          sizeInBytes: 3000,
          sharedWith: [],
          favorited: false,
        },
      ];

      const expectedOutput: ImageResource[] = [
        {
          id: "3",
          url: "https://example.com/3.jpg",
          filename: "3.jpg",
          uploadedBy: "user3",
          createdAt: "2023-05-08T23:59:59.999Z",
          updatedAt: "2023-05-08T23:59:59.999Z",
          dimensions: { width: 300, height: 300 },
          resolution: { width: 72, height: 72 },
          sizeInBytes: 3000,
          sharedWith: [],
          favorited: false,
        },
        {
          id: "1",
          url: "https://example.com/1.jpg",
          filename: "1.jpg",
          uploadedBy: "user1",
          createdAt: "2022-03-01T12:00:00.000Z",
          updatedAt: "2022-03-01T12:00:00.000Z",
          dimensions: { width: 100, height: 100 },
          resolution: { width: 72, height: 72 },
          sizeInBytes: 1000,
          sharedWith: [],
          favorited: false,
        },
        {
          id: "2",
          url: "https://example.com/2.jpg",
          filename: "2.jpg",
          uploadedBy: "user2",
          createdAt: "2021-02-15T00:00:00.000Z",
          updatedAt: "2021-02-15T00:00:00.000Z",
          dimensions: { width: 200, height: 200 },
          resolution: { width: 72, height: 72 },
          sizeInBytes: 2000,
          sharedWith: [],
          favorited: true,
        },
      ];
      expect(input.sort(sortByDateDesc)).toEqual(expectedOutput);
    });

    it("should return a negative number if a.createdAt is after b.createdAt", () => {
      const a = {
        id: "1",
        url: "https://example.com/image1.jpg",
        filename: "image1.jpg",
        description: "An image",
        uploadedBy: "user1",
        createdAt: "2022-02-02T00:00:00Z",
        updatedAt: "2022-01-01T00:00:00Z",
        dimensions: { width: 100, height: 100 },
        resolution: { width: 72, height: 72 },
        sizeInBytes: 1000,
        sharedWith: [],
        favorited: false,
      };
      const b = {
        id: "2",
        url: "https://example.com/image2.jpg",
        filename: "image2.jpg",
        description: "Another image",
        uploadedBy: "user2",
        createdAt: "2022-01-01T00:00:01Z",
        updatedAt: "2022-01-01T00:00:01Z",
        dimensions: { width: 200, height: 200 },
        resolution: { width: 72, height: 72 },
        sizeInBytes: 2000,
        sharedWith: [],
        favorited: false,
      };
      const result = sortByDateDesc(a, b);
      expect(result).toBeLessThan(0);
    });

    it("should return a positive number if a.createdAt is before b.createdAt", () => {
      const a = {
        id: "1",
        url: "https://example.com/image1.jpg",
        filename: "image1.jpg",
        description: "An image",
        uploadedBy: "user1",
        createdAt: "2022-01-01T00:00:00Z",
        updatedAt: "2022-01-01T00:00:00Z",
        dimensions: { width: 100, height: 100 },
        resolution: { width: 72, height: 72 },
        sizeInBytes: 1000,
        sharedWith: [],
        favorited: false,
      };
      const b = {
        id: "2",
        url: "https://example.com/image2.jpg",
        filename: "image2.jpg",
        description: "Another image",
        uploadedBy: "user2",
        createdAt: "2022-02-02T00:00:01Z",
        updatedAt: "2022-01-01T00:00:01Z",
        dimensions: { width: 200, height: 200 },
        resolution: { width: 72, height: 72 },
        sizeInBytes: 2000,
        sharedWith: [],
        favorited: false,
      };
      const result = sortByDateDesc(a, b);
      expect(result).toBeGreaterThan(0);
    });

    it("should return 0 if a.createdAt is equal to b.createdAt", () => {
      const a = {
        id: "1",
        url: "https://example.com/image1.jpg",
        filename: "image1.jpg",
        description: "An image",
        uploadedBy: "user1",
        createdAt: "2022-03-01T12:00:00.000Z",
        updatedAt: "2022-01-01T00:00:00Z",
        dimensions: { width: 100, height: 100 },
        resolution: { width: 72, height: 72 },
        sizeInBytes: 1000,
        sharedWith: [],
        favorited: false,
      };
      const b = {
        id: "2",
        url: "https://example.com/image2.jpg",
        filename: "image2.jpg",
        description: "Another image",
        uploadedBy: "user2",
        createdAt: "2022-03-01T12:00:00.000Z",
        updatedAt: "2022-01-01T00:00:01Z",
        dimensions: { width: 200, height: 200 },
        resolution: { width: 72, height: 72 },
        sizeInBytes: 2000,
        sharedWith: [],
        favorited: false,
      };
      const result = sortByDateDesc(a, b);
      expect(result).toBe(0);
    });
  });
});
