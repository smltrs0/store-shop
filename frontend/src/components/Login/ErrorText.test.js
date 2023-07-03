import { render } from "@testing-library/react";
import ErrorText from "./ErrorText";

describe("ErrorText", () => {
  it("renders without error", () => {
    render(<ErrorText message="Test error message" />);
  });

  it("displays the error message correctly", () => {
    const errorMessage = "Test error message";
    const { getByText } = render(<ErrorText message={errorMessage} />);
    const errorText = getByText(errorMessage);

    expect(errorText).toBeInTheDocument();
  });
});
