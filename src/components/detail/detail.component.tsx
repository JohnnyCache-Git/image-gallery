import { Label } from "../label/label.component";
import { Value } from "../value/value.component";

import styles from "./detail.module.css";

export type DetailData = {
  /**
   * The name of the detail.
   */
  name: string;
  /**
   * The value of the detail.
   */
  value?: string;
};

type DetailProps = {
  /**
   * The detail data.
   * Component returns null if value is falsy.
   */
  data: DetailData;
};

/**
 * A detail. Renders a label and a value.
 */
export const Detail: React.FC<DetailProps> = ({ data }) => {
  if (!data.value) {
    return null;
  }

  return (
    <div className={styles.detail}>
      <Label>{data.name}</Label>
      <Value>{data.value}</Value>
    </div>
  );
};
