import { render, fireEvent } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton", () => {
  it("renders without error", () => {
    render(<SubmitButton />);
  });

  it("calls onSubmit callback correctly", () => {
    const mockOnSubmit = jest.fn();
    const { getByText } = render(<SubmitButton onSubmit={mockOnSubmit} />);
    const submitButton = getByText("Iniciar sesión");

    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});