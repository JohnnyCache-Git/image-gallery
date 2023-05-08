import { render, screen } from "@testing-library/react";
import { Detail } from "./detail.component";

describe("Components", () => {
  describe("Detail", () => {
    test("Should render nothing when value is falsy", () => {
      render(<Detail data={{ name: "test-name" }} />);
      expect(screen.queryByText("test-name")).not.toBeInTheDocument();
    });

    test("Should render detail when value is truthy", () => {
      render(<Detail data={{ name: "test-name", value: "test-value" }} />);
      expect(screen.getByText("test-name")).toBeInTheDocument();
    });
  });
});
