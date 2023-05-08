/**
 * Represents an image resource object.
 */
export type ImageResource = {
  /**
   * The unique identifier of the image resource.
   */
  id: string;
  /**
   * The URL of the image resource.
   */
  url: string;
  /**
   * The filename of the image resource.
   */
  filename: string;
  /**
   * An optional description of the image resource.
   */
  description?: string;
  /**
   * The user who uploaded the image resource.
   */
  uploadedBy: string;
  /**
   * The date and time when the image resource was created.
   */
  createdAt: string;
  /**
   * The date and time when the image resource was last updated.
   */
  updatedAt: string;
  /**
   * The dimensions of the image resource.
   */
  dimensions: Size;
  /**
   * The resolution of the image resource.
   */
  resolution: Size;
  /**
   * The size of the image resource in bytes.
   */
  sizeInBytes: number;
  /**
   * An array of users who have access to the image resource.
   */
  sharedWith: User[];
  /**
   * A boolean indicating whether the image resource has been favorited by the user.
   */
  favorited: boolean;
};

/**
 * Represents the size object with height and width properties.
 */
export type Size = {
  /**
   * The height value of the size object.
   */
  height: number;
  /**
   * The width value of the size object.
   */
  width: number;
};

/**
 * Represents the user object.
 */
export type User = {
  /**
   * The unique identifier of the user.
   */
  id: string;
  /**
   * The name of the user.
   */
  name: string;
  /**
   * The avatar of the user.
   */
  avatar: string;
};
