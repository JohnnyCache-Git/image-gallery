import { formatBytes } from "../../utils/file.utils";
import { FavoriteButton } from "../favorite-button/favorite-button.component";
import { Label } from "../label/label.component";

import styles from "./file-metadata.module.css";

type FileMetadataProps = {
  /**
   * The name of the file.
   */
  filename: string;
  /**
   * The filesize in bytes.
   */
  filesizeInBytes: number;

  /**
   * True if the file is favorited.
   */
  isFavorited?: boolean;

  /**
   * The function that will be invoked when the favorite button is clicked.
   */
  onClickFavorite?: () => void;

  /**
   * The CSS class(es) to be applied to the component.
   */
  className?: string;
};

/**
 * File metadata. Renders a filename and a label, vertically stacked.
 */
export const FileMetaData: React.FC<FileMetadataProps> = ({
  filename,
  filesizeInBytes,
  className,
  isFavorited,
  onClickFavorite,
}) => (
  <div className={className}>
    <div className={styles.container}>
      <div aria-label="filename" className={styles.filename}>
        {filename}
      </div>
      {onClickFavorite && (
        <FavoriteButton isFavorited={!!isFavorited} onClick={onClickFavorite} />
      )}
    </div>
    <Label ariaLabel="filesize" className={styles.filesize}>
      {formatBytes(filesizeInBytes)}
    </Label>
  </div>
);
