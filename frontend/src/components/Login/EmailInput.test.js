import { render, fireEvent } from "@testing-library/react";
import EmailInput from "./EmailInput";

describe("EmailInput", () => {
  it("renders without error", () => {
    render(<EmailInput />);
  });

  it("calls onChange callback correctly", () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(<EmailInput onChange={mockOnChange} />);
    const emailInput = getByLabelText("Email");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
    expect(mockOnChange.mock.calls[0][0].target.value).toBe("test@example.com");
  });
});
