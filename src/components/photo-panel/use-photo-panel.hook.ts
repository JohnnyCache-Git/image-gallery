import { deleteImage, toggleFavoriteImage } from "../../api/images/image-slice";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ImageResource } from "../../api/images/image.resource";
import { formatDatetimeAsDate } from "../../utils/date.utils";
import { getDimensionsString } from "../../utils/string.utils";
import { DetailData } from "../detail/detail.component";
import { useAppDispatch } from "../../app/hooks";

/**
 * Helper hook for the photo panel.
 *
 * @param selectedPhoto   The selected photo.
 * @param onDeletePhoto   The function that will be invoked when a photo is deleted.
 */
export const usePhotoPanel = (
  selectedPhoto?: ImageResource,
  onDeletePhoto?: () => void
) => {
  const dispatch = useAppDispatch();
  const [panelPhoto, setPanelPhoto] = useState<ImageResource | undefined>(
    selectedPhoto
  );

  useEffect(() => {
    setPanelPhoto(selectedPhoto);
  }, [selectedPhoto]);

  const details: DetailData[] = useMemo(
    () => [
      { name: "Uploaded by", value: selectedPhoto?.uploadedBy },
      {
        name: "Created",
        value: formatDatetimeAsDate(selectedPhoto?.createdAt),
      },
      {
        name: "Last modified",
        value: formatDatetimeAsDate(selectedPhoto?.updatedAt),
      },
      {
        name: "Dimensions",
        value: getDimensionsString(selectedPhoto?.dimensions),
      },
      {
        name: "Resolution",
        value: getDimensionsString(selectedPhoto?.resolution),
      },
    ],
    [selectedPhoto]
  );

  const photoId = selectedPhoto?.id;
  const onClickDelete = useCallback(() => {
    if (photoId) {
      dispatch(deleteImage(photoId));
      onDeletePhoto?.();
      setPanelPhoto(undefined);
    }
  }, [dispatch, photoId, onDeletePhoto]);

  const onClickFavorite = useCallback(() => {
    if (panelPhoto) {
      dispatch(toggleFavoriteImage(photoId));
      setPanelPhoto({ ...panelPhoto, favorited: !panelPhoto?.favorited });
    }
  }, [dispatch, panelPhoto, photoId]);

  return { details, onClickDelete, onClickFavorite, panelPhoto };
};
