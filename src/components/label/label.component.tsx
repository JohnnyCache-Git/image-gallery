import classNames from "classnames";

import styles from "./label.module.css";

type LabelProps = {
  /**
   * The children to render in the label.
   */
  children: React.ReactNode;

  /**
   * The CSS class(es) to be applied to the component.
   */
  className?: string;

  /**
   * Aria label to provide better accessibility.
   */
  ariaLabel?: string;
};

/**
 * Renders a label.
 */
export const Label: React.FC<LabelProps> = ({
  children,
  className,
  ariaLabel,
}) => (
  <div aria-label={ariaLabel} className={classNames(styles.label, className)}>
    {children}
  </div>
);
