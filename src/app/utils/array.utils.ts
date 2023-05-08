/**
 * Checks whether an array is null, undefined, or empty.
 * @param array The array to check.
 * @returns Returns `true` if the array is null, undefined, or has zero length, otherwise `false`.
 */
export const arrayIsNullOrEmpty = (array: object[]): boolean => !array?.length;
