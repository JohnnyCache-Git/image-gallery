import { ImageResource } from "../../api/images/image.resource";

/**
 * Sorts an array of ImageResources by date in descending order.
 *
 * @param a   The first ImageResource to compare.
 * @param b   The second ImageResource to compare.
 * @returns Returns a negative value if `a` is less than `b`, a positive value if `a` is greater than `b`, or zero if they are equal.
 */
export const sortByDateDesc = function (
  a: ImageResource,
  b: ImageResource
): number {
  var dateA = new Date(a.createdAt).getTime();
  var dateB = new Date(b.createdAt).getTime();
  return dateB - dateA;
};
