import { Title } from "../title/title.component";

import styles from "./description.module.css";

type DetailProps = {
  /**
   * The children to render in the description body.
   */
  children: React.ReactNode;

  /**
   * The CSS class(es) to be applied to the component.
   */
  className?: string;
};

/**
 * A description. Renders a title and description body.
 */
export const Description: React.FC<DetailProps> = ({ children, className }) => {
  if (!children) {
    return null;
  }

  return (
    <div className={className}>
      <Title>Description</Title>
      <div className={styles.description_body}>{children}</div>
    </div>
  );
};
