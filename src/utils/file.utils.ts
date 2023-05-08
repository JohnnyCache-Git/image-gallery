// Technically, these are KiB, MiB, etc. But kept this pattern to be consistent with mockup.
const fileSizeUnits = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

/**
 * Converts given size to string with size units.
 * Based on https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
 *
 * @param bytes   The size in bytes.
 * @returns Returns a string representation of the number of bytes with the appropriate unit.
 */
export const formatBytes = (bytes: number) => {
  let unitIndex = 0;

  while (bytes >= 1024 && ++unitIndex) {
    bytes = bytes / 1024;
  }

  return (
    bytes.toFixed(bytes < 10 && unitIndex > 0 ? 1 : 0) +
    " " +
    fileSizeUnits[unitIndex]
  );
};
