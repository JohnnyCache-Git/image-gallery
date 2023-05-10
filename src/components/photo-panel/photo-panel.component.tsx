import { ImageResource } from "../../api/images/image.resource";
import { Description } from "../description/description.component";
import { Information } from "../information/information.component";
import { Photo } from "../photo.component.tsx/photo.component";
import { FileMetaData } from "../file-metadata/file-metadata.component";
import { usePhotoPanel } from "./use-photo-panel.hook";
import { ActionButton } from "../action-button/action-button.component";

import styles from "./photo-panel.module.css";

type PhotoPanelProps = {
  /**
   * The currently selected photo, if any.
   */
  selectedPhoto?: ImageResource;

  /**
   * The function that will be invoked when a photo is deleted.
   */
  onDeletePhoto?: () => void;
};

/**
 * A photo panel. Renders the photo, file metadata, a favorite button, some information, a description, and a delete button.
 * Information and description are optional.
 */
export const PhotoPanel: React.FC<PhotoPanelProps> = ({
  selectedPhoto,
  onDeletePhoto,
}) => {
  const { details, onClickDelete, panelPhoto, onClickFavorite } = usePhotoPanel(
    selectedPhoto,
    onDeletePhoto
  );

  if (!panelPhoto) {
    return null;
  }

  return (
    <div className={styles.panel}>
      <Photo className={styles.photo} photo={panelPhoto} />
      <FileMetaData
        className={styles.metadata}
        filename={panelPhoto.filename}
        filesizeInBytes={panelPhoto.sizeInBytes}
        onClickFavorite={onClickFavorite}
        isFavorited={panelPhoto.favorited}
      />
      <Information className={styles.information} details={details} />
      <Description className={styles.description}>
        {panelPhoto.description}
      </Description>
      <ActionButton
        className={styles.delete_button}
        onClick={onClickDelete}
        ariaLabel={`Delete ${panelPhoto.filename}`}
      >
        Delete
      </ActionButton>
    </div>
  );
};
