import styles from "./value.module.css";

type ValueProps = {
  /**
   * The children to render in the value.
   */
  children: React.ReactNode;
};

/**
 * Renders a value.
 */
export const Value: React.FC<ValueProps> = ({ children }) => (
  <div className={styles.value}>{children}</div>
);
