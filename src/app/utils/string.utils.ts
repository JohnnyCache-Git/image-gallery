import { Size } from "../../api/images/image.resource";

export const getDimensionsString = (size: Size | undefined) =>
  !!size ? `${size.width} × ${size.height}` : "";
