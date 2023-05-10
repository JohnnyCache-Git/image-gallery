import { useCallback, useState } from "react";
import { ImageResource } from "../api/images/image.resource";

export type TAB_OPTIONS = "Recently Added" | "Favorited";

/**
 * Helper hook for the photos page.
 */
export const usePhotos = () => {
  const [selectedTab, setSelectedTab] = useState<TAB_OPTIONS>("Recently Added");
  const [selectedPhoto, setSelectedPhoto] = useState<ImageResource>();
  const [showMobileModal, setShowMobileModal] = useState<boolean>();

  const toggleModal = useCallback(
    () => setShowMobileModal(!showMobileModal),
    [showMobileModal]
  );

  const onClickPhoto = useCallback(
    (image: ImageResource) => {
      setSelectedPhoto(image);
      toggleModal();
    },
    [toggleModal]
  );

  const onClickTab = useCallback(
    (tab: string) => setSelectedTab(tab as TAB_OPTIONS),
    []
  );

  const onPhotosLoad = useCallback(
    (images: ImageResource[]) => setSelectedPhoto(images[0]),
    []
  );

  return {
    selectedTab,
    selectedPhoto,
    showMobileModal,
    toggleModal,
    onClickPhoto,
    onPhotosLoad,
    onClickTab,
  };
};
