import classNames from "classnames";

import styles from "./action-button.module.css";

type ActionButtonProps = {
  /**
   * The children to render in the button.
   */
  children: React.ReactNode;

  /**
   * The function that will be invoked when the button is clicked.
   */
  onClick: () => void;

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
 * An button that performs an action when clicked.
 */
export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
  className,
  ariaLabel,
}) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      tabIndex={0}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
