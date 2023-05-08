import { render, screen } from "@testing-library/react";
import { FavoriteButton } from "./favorite-button.component";

describe("Components", () => {
  describe("FavoriteButton", () => {
    const onClickCallback = jest.fn();

    test("Should render Heart when isFavorited is true", () => {
      render(<FavoriteButton onClick={onClickCallback} isFavorited={true} />);

      expect(screen.getByRole("button").title).toEqual("Favorited");
      expect(screen.getByRole("img").title).toEqual("Heart");
    });

    test("Should render Empty Heart when isFavorited is true", () => {
      render(<FavoriteButton onClick={onClickCallback} isFavorited={false} />);

      expect(screen.getByRole("button").title).toEqual("Not Favorited");
      expect(screen.getByRole("img").title).toEqual("Empty Heart");
    });
  });
});
