import styles from "./empty-heart.module.css";

type EmptyHeartProps = {
  /**
   * The color used to simulate transparency. Should be the same as the background color the heart is on.
   */
  transparentColor: string;
};

/**
 * Renders an empty heart. Achieves this by rendering a gray heart with CSS
 * and a transparent heart overlayed with the gray heart using CSS.
 *
 */
export const EmptyHeart: React.FC<EmptyHeartProps> = ({ transparentColor }) => {
  // Use a CSS var hack to dynamically set the color for the psuedo elements.
  const colorStyle = {
    "--color": transparentColor,
  } as React.CSSProperties;

  return (
    <>
      <div role="img" title="Empty Heart" className={styles.gray_heart} />
      <div className={styles.transparent_heart} style={colorStyle} />
    </>
  );
};
