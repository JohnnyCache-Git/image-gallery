import { Size } from "../../api/images/image.resource";

/**
 * Formats a `Size` object as a string with the dimensions in the format "width × height".
 *
 * @param size  The `Size` object to format.
 * @returns Returns a string with the dimensions of the `Size` object in the format "width × height", or an empty string if `size` is `undefined`.
 */
export const getDimensionsString = (size: Size | undefined) =>
  !!size ? `${size.width} × ${size.height}` : "";
