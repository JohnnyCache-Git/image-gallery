import dayjs from "dayjs";

/**
 * Formats a datetime string as a date in the format "MMMM DD, YYYY".
 *
 * @param datetime  The datetime string to format.
 * @returns Returns the formatted date string, or an empty string if `datetime` is `undefined` or empty.
 */
export const formatDatetimeAsDate = (datetime?: string): string => {
  return !!datetime ? dayjs(datetime).format("MMMM DD, YYYY") : "";
};
