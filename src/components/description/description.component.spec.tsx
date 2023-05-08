import { render, screen } from "@testing-library/react";
import { Description } from "./description.component";

describe("Components", () => {
  describe("Description", () => {
    test("Should render nothing when children are empty", () => {
      render(<Description>{}</Description>);
      expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    });

    test("Should render description when given children", () => {
      render(<Description>test</Description>);
      expect(screen.getByRole("heading").textContent).toEqual("Description");
    });
  });
});
