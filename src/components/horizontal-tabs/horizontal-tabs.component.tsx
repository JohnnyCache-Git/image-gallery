import classNames from "classnames";
import { Tab } from "../tab/tab.component";

import styles from "./horizontal-tabs.module.css";

type HorizontalTabsProps = {
  /**
   * The tab options.
   */
  tabOptions: string[];

  /**
   * The selected tab.
   */
  selectedTab: string;

  /**
   * The function that will be invoked when a tab is clicked.
   *
   * @param tab   The tab that was clicked.
   */
  onClickTab: (tab: string) => void;

  /**
   * The CSS class(es) to be applied to the component.
   */
  className?: string;
};

/**
 * Renders horizontal tabs.
 */
export const HorizontalTabs: React.FC<HorizontalTabsProps> = ({
  tabOptions,
  selectedTab,
  onClickTab,
  className,
}) => (
  <div role="tablist" className={classNames(styles.tabs, className)}>
    {tabOptions.map((tab) => (
      <Tab
        isSelected={selectedTab === tab}
        onClick={() => onClickTab(tab)}
        key={tab}
      >
        {tab}
      </Tab>
    ))}
  </div>
);
