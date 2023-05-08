import React from "react";
import { ImageResource } from "../../api/images/image.resource";
import classNames from "classnames";
import { FileMetaData } from "../file-metadata/file-metadata.component";
import { Photo } from "../photo.component.tsx/photo.component";

import styles from "./photo-gallery-item.module.css";

type PhotoGalleryItemProps = {
  /**
   * The photo.
   */
  photo: ImageResource;

  /**
   * True if the photo is selected.
   */
  isSelected?: boolean;
};

/**
 * A photo gallery item. Renders a photo and the file metadata.
 */
export const PhotoGalleryItem: React.FC<PhotoGalleryItemProps> = ({
  photo,
  isSelected,
}) => {
  return (
    <div role="listitem" className={styles.photo_gallery_item}>
      <Photo
        photo={photo}
        className={classNames(styles.thumbnail, {
          [styles.selected]: isSelected,
        })}
      />
      <FileMetaData
        filename={photo.filename}
        filesizeInBytes={photo.sizeInBytes}
        className={styles.metadata}
      />
    </div>
  );
};
