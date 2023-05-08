import { LoadingSpinner } from "../loading-spinner/loading-spinner.component";
import { PhotoGalleryItem } from "../photo-gallery-item/photo-gallery-item.component";
import { usePhotoGallery } from "./use-photo-gallery.hook";
import { ImageResource } from "../../api/images/image.resource";

import styles from "./photo-gallery.module.css";

export type PHOTO_GALLERY_FILTER_OPTIONS = "Recently Added" | "Favorited";

type PhotoGalleryProps = {
  /**
   * The selected photo ID.
   */
  selectedPhotoId?: string;

  /**
   * The function that will be invoked when a photo is clicked.
   *
   * @param image   The image that was clicked.
   */
  onClickPhoto: (image: ImageResource) => void;

  /**
   * The function that will be invoked when the photos load.
   *
   * @param image   The image that was clicked.
   */
  onPhotosLoad: (images: ImageResource[]) => void;

  /**
   * The filter to be applied to the photo gallery.
   */
  filter: PHOTO_GALLERY_FILTER_OPTIONS;
};

/**
 * A photo gallery of filtered photos. Has a selected photo.
 */
export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  selectedPhotoId,
  onClickPhoto,
  filter,
  onPhotosLoad,
}) => {
  const { isLoading, isError, error, photos } = usePhotoGallery(
    filter,
    onPhotosLoad
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <>{error?.toString()}</>;
  }

  if (!photos || photos.length < 1) {
    return null;
  }

  return (
    <div className={styles.gallery} role="list">
      {photos.map((photo) => (
        <div key={photo.id} onClick={() => onClickPhoto(photo)}>
          <PhotoGalleryItem
            photo={photo}
            isSelected={photo.id === selectedPhotoId}
          />
        </div>
      ))}
    </div>
  );
};
