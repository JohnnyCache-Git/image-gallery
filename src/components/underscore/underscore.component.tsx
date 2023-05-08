import styles from "./underscore.module.css";

type UnderscoreProps = {
  /**
   * The children to render in the children.
   */
  children: React.ReactNode;
};

/**
 * An underscore. Renders a border to underscore given children.
 */
export const Underscore: React.FC<UnderscoreProps> = ({ children }) => (
  <div className={styles.underscore}>{children}</div>
);
