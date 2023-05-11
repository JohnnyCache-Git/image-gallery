/**
 * Determines if the current device is mobile or not. Only supports android and iPhone.
 *
 * @returns True if mobile device. False otherwise.
 */
export const isMobile = () => /Android|iPhone/i.test(navigator.userAgent);
