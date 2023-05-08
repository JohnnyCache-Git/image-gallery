import { Heart } from "../heart/heart.component";
import { EmptyHeart } from "../empty-heart/empty-heart.component";

import styles from "./favorite-button.module.css";

export type FavoriteButtonProps = {
  /**
   * True if the button is favorited. Determines if the button renders an empty or full heart.
   */
  isFavorited: boolean;

  /**
   * The function that will be invoked when the button is clicked.
   */
  onClick: () => void;
};

/**
 * A Favorite button.
 */
export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorited,
  onClick,
}) => (
  <button
    title={isFavorited ? "Favorited" : "Not Favorited"}
    className={styles.button}
    onClick={onClick}
    tabIndex={0}
    type={"button"}
  >
    {isFavorited ? <Heart /> : <EmptyHeart transparentColor="white" />}
  </button>
);
