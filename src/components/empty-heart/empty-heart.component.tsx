import styles from "./empty-heart.module.css";

/**
 * Renders an empty heart. Achieves this by rendering a gray heart with CSS
 * and a transparent heart overlayed with the gray heart using CSS.
 *
 * TECHDEBT: Assumes the background the heart is on is white. Requires a style
 * param in order to make the transparent heart work on non-white backgrounds.
 */
export const EmptyHeart = () => (
  <>
    <div role="img" title="Empty Heart" className={styles.gray_heart} />
    <div className={styles.transparent_heart} />
  </>
);
