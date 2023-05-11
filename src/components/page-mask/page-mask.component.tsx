import { useEffect } from "react";

import styles from "./page-mask.module.css";

export const PageMask = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return function cleanup() {
      document.body.style.overflow = "unset";
    };
  }, []);

  return <div className={styles.page_mask} />;
};
