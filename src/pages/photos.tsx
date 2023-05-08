import { useState } from "react";
import { PhotoGallery } from "../components/photo-gallery/photo-gallery.component";
import { ImageResource } from "../api/images/image.resource";
import { PhotoPanel } from "../components/photo-panel/photo-panel.component";
import { Header } from "../components/header/header.component";
import { HorizontalTabs } from "../components/horizontal-tabs/horizontal-tabs.component";

import styles from "./photos.module.css";

type TAB_OPTIONS = "Recently Added" | "Favorited";
const PAGE_TAB_OPTIONS: TAB_OPTIONS[] = ["Recently Added", "Favorited"];

/**
 * The photos page. Renders tabs, a photo gallery, and a photo panel.
 */
export const Photos = () => {
  const [selectedTab, setSelectedTab] = useState<TAB_OPTIONS>("Recently Added");
  const [selectedPhoto, setSelectedPhoto] = useState<ImageResource>();

  return (
    <div className={styles.photos}>
      <div className={styles.photo_selector}>
        <Header>Photos</Header>
        <HorizontalTabs
          selectedTab={selectedTab}
          tabOptions={PAGE_TAB_OPTIONS}
          onClickTab={(tab) => setSelectedTab(tab as TAB_OPTIONS)}
          className={styles.tabs}
        />
        <PhotoGallery
          selectedPhotoId={selectedPhoto?.id}
          onClickPhoto={(image) => setSelectedPhoto(image)}
          onPhotosLoad={(images) => setSelectedPhoto(images[0])}
          filter={selectedTab}
        />
      </div>
      <div className={styles.panel}>
        <PhotoPanel selectedPhoto={selectedPhoto} />
      </div>
    </div>
  );
};
