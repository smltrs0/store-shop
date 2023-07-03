import { render, fireEvent } from "@testing-library/react";
import PasswordInput from "./PasswordInput";

describe("PasswordInput", () => {
  it("renders without error", () => {
    render(<PasswordInput />);
  });

  it("calls onChange callback correctly", () => {
    const mockOnChange = jest.fn();
    const testValue = "test123";
    const { getByLabelText } = render(
      <PasswordInput value="" onChange={mockOnChange} />
    );
    const passwordInput = getByLabelText("Contraseña");

    fireEvent.change(passwordInput, { target: { value: testValue } });

    expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: testValue } }));
  });
});
