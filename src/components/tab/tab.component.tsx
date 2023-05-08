import classNames from "classnames";

import styles from "./tab.module.css";

type TabProps = {
  /**
   * True if the tab is selected.
   */
  isSelected: boolean;

  /**
   * The function that will be invoked when the tab is clicked.
   */
  onClick: () => void;

  /**
   * The children to render in the tab.
   */
  children: React.ReactNode;
};

/**
 * A tab.
 */
export const Tab: React.FC<TabProps> = ({ isSelected, onClick, children }) => (
  <button
    className={classNames(styles.tab, {
      [styles.selected_tab]: isSelected,
    })}
    onClick={onClick}
    tabIndex={0}
    role="tab"
  >
    {children}
  </button>
);
