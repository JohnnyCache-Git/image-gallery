import { PhotoGallery } from "../components/photo-gallery/photo-gallery.component";
import { PhotoPanel } from "../components/photo-panel/photo-panel.component";
import { Header } from "../components/header/header.component";
import { HorizontalTabs } from "../components/horizontal-tabs/horizontal-tabs.component";
import { MobileModal } from "../components/mobile-modal/mobile-modal.component";

import styles from "./photos.module.css";
import { TAB_OPTIONS, usePhotos } from "./use-photos.hook";

const PAGE_TAB_OPTIONS: TAB_OPTIONS[] = ["Recently Added", "Favorited"];

/**
 * The photos page. Renders tabs, a photo gallery, and a photo panel.
 */
export const Photos = () => {
  const {
    selectedTab,
    selectedPhoto,
    showMobileModal,
    toggleModal,
    onClickPhoto,
    onPhotosLoad,
    onClickTab,
  } = usePhotos();

  return (
    <div className={styles.photos}>
      <div className={styles.photo_selector}>
        <Header>Photos</Header>
        <HorizontalTabs
          selectedTab={selectedTab}
          tabOptions={PAGE_TAB_OPTIONS}
          onClickTab={onClickTab}
          className={styles.tabs}
        />
        <PhotoGallery
          selectedPhotoId={selectedPhoto?.id}
          onClickPhoto={onClickPhoto}
          onPhotosLoad={onPhotosLoad}
          filter={selectedTab}
        />
      </div>
      <div className={styles.panel}>
        <PhotoPanel selectedPhoto={selectedPhoto} />
      </div>
      {showMobileModal && (
        <MobileModal handleClose={toggleModal}>
          <PhotoPanel
            selectedPhoto={selectedPhoto}
            onDeletePhoto={toggleModal}
          />
        </MobileModal>
      )}
    </div>
  );
};
