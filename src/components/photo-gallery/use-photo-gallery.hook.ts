import { selectImages } from "../../api/images/image-slice";
import { useGetImagesQuery } from "../../api/images/images.api";
import { useEffect, useMemo } from "react";
import { PHOTO_GALLERY_FILTER_OPTIONS } from "./photo-gallery.component";
import { ImageResource } from "../../api/images/image.resource";
import { sortByDateDesc } from "./photo-gallery.utils";
import { useAppSelector } from "../../app/hooks";

/**
 * Helper hook for the photo gallery.
 *
 * @param filter          The filter to be applied to the photo gallery.
 * @param onPhotosLoad    The function that will be invoked when the photos load.
 */
export const usePhotoGallery = (
  filter: PHOTO_GALLERY_FILTER_OPTIONS,
  onPhotosLoad: (images: ImageResource[]) => void
) => {
  const { isLoading, isError, error, isSuccess } = useGetImagesQuery("");

  const images = useAppSelector(selectImages);

  const photos = useMemo(() => {
    if (filter === "Favorited") {
      return images.filter((i) => i.favorited).sort(sortByDateDesc);
    }

    if (filter === "Recently Added") {
      return images.slice().sort(sortByDateDesc);
    }

    return [];
  }, [filter, images]);

  useEffect(() => {
    onPhotosLoad(photos);

    // Only want to run this once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  return { isLoading, isError, error, photos };
};
