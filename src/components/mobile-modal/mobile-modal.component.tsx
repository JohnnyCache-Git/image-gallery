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
    <div className={styles.page_mask} />
    <div className={styles.modal_wrapper}>
      <button
        tab-index="1"
        aria-label="close modal"
        className={styles.close}
        onClick={handleClose}
      >
        &times;
      </button>
      <div className={styles.modal_content} style={{ borderRadius: "8px" }}>
        {children}
      </div>
    </div>
  </>
);