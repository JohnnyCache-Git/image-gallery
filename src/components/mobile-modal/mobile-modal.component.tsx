import { PageMask } from "../page-mask/page-mask.component";
import { Underscore } from "../underscore/underscore.component";

import styles from "./mobile-modal.module.css";

type MobileModalProps = {
  /**
   * The children to render in the button.
   */
  children: React.ReactNode;

  /**
   * A method that is invoked when close is clicked.
   */
  handleClose: () => void;
};

/**
 * A modal for displaying on mobile devices.
 */
export const MobileModal: React.FC<MobileModalProps> = ({
  children,
  handleClose,
}) => (
  <>
    <PageMask />
    <div className={styles.modal_header}>
      <Underscore>
        <button
          tab-index="1"
          aria-label="close modal"
          className={styles.close}
          onClick={handleClose}
        >
          &times;
        </button>
      </Underscore>
    </div>
    <div className={styles.modal_content}>{children}</div>
  </>
);
