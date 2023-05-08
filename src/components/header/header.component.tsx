import styles from "./header.module.css";

type HeaderProps = {
  /**
   * The children to render in the header.
   */
  children: React.ReactNode;
};

/**
 * A header.
 */
export const Header: React.FC<HeaderProps> = ({ children }) => (
  <h1 className={styles.header}>{children}</h1>
);
