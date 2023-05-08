import styles from "./title.module.css";

type TitleProps = {
  /**
   * The children to render in the title.
   */
  children: React.ReactNode;
};

/**
 * A title.
 */
export const Title: React.FC<TitleProps> = ({ children }) => (
  <h2 className={styles.title}>{children}</h2>
);
