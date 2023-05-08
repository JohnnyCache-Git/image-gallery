import { render, screen } from "@testing-library/react";
import { Information } from "./information.component";

describe("Components", () => {
  describe("Information", () => {
    test("Should render nothing when array is null or empty", () => {
      render(<Information details={[]} />);
      expect(screen.queryByText("Information")).not.toBeInTheDocument();
    });

    test("Should render information when array is non-empty", () => {
      render(
        <Information details={[{ name: "test-name", value: "test-value" }]} />
      );
      expect(screen.getByText("Information")).toBeInTheDocument();
    });
  });
});
