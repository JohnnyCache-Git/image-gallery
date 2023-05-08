import { useDispatch, useSelector } from "react-redux";
import { selectImages } from "../../api/images/image-slice";
import { useGetImagesQuery } from "../../api/images/images.api";
import { useEffect, useMemo } from "react";
import { PHOTO_GALLERY_FILTER_OPTIONS } from "./photo-gallery.component";
import { ImageResource } from "../../api/images/image.resource";
import { sortByDateDesc } from "./photo-gallery.utils";

export const usePhotoGallery = (
  filter: PHOTO_GALLERY_FILTER_OPTIONS,
  onPhotosLoad: (images: ImageResource[]) => void
) => {
  const { isLoading, isError, error } = useGetImagesQuery("");

  const images = useSelector(selectImages);

  const photos = useMemo(() => {
    if (filter === "Favorited") {
      return images.filter((i) => i.favorited).sort(sortByDateDesc);
    }

    if (filter === "Recently Added") {
      return images.slice().sort(sortByDateDesc);
    }

    return [];
  }, [filter, images]);

  const photosLength = photos.length;

  useEffect(() => {
    if (photosLength > 0) {
      onPhotosLoad(photos);
    }

    // Only want to run this when photos length changes on load or delete.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photosLength]);

  return { isLoading, isError, error, photos };
};
