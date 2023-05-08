import React from "react";
import { ImageResource } from "../../api/images/image.resource";
import classNames from "classnames";

import styles from "./photo.module.css";

type PhotoProps = {
  /**
   * The photo to render.
   */
  photo: ImageResource;

  /**
   * The CSS class(es) to be applied to the component.
   */
  className?: string;
};

/**
 * A photo.
 */
export const Photo: React.FC<PhotoProps> = ({ photo, className }) => (
  <img
    className={classNames(styles.photo, className)}
    src={photo.url}
    alt={photo.filename}
    title={photo.filename}
    tabIndex={0}
  />
);
