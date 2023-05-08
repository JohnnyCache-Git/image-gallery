import { formatBytes } from "../../app/utils/file.utils";
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
}) => (
  <div className={className}>
    <div aria-label="filename" className={styles.filename}>
      {filename}
    </div>
    <Label ariaLabel="filesize" className={styles.filesize}>
      {formatBytes(filesizeInBytes)}
    </Label>
  </div>
);
