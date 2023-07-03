import { render, fireEvent } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("RegisterForm", () => {
  it("renders without error", () => {
    render(<RegisterForm />);
  });

  it("updates name value correctly", () => {
    const { getByLabelText } = render(<RegisterForm />);
    const nameInput = getByLabelText("Usuario");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    expect(nameInput.value).toBe("John Doe");
  });

  it("updates email value correctly", () => {
    const { getByLabelText } = render(<RegisterForm />);
    const emailInput = getByLabelText("Correo Electrónico");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  it("updates password value correctly", () => {
    const { getByLabelText } = render(<RegisterForm />);
    const passwordInput = getByLabelText("Contraseña");

    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(passwordInput.value).toBe("password123");
  });

  it("updates confirm password value correctly", () => {
    const { getByLabelText } = render(<RegisterForm />);
    const confirmPasswordInput = getByLabelText("Confirmar Contraseña");

    fireEvent.change(confirmPasswordInput, { target: { value: "password123" } });

    expect(confirmPasswordInput.value).toBe("password123");
  });

  it("calls onSubmit with correct userdata on form submission", () => {
    const mockOnSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <RegisterForm onSubmit={mockOnSubmit} />
    );

    fireEvent.change(getByLabelText("Usuario"), { target: { value: "John Doe" } });
    fireEvent.change(getByLabelText("Correo Electrónico"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Contraseña"), { target: { value: "password123" } });
    fireEvent.change(getByLabelText("Confirmar Contraseña"), {
      target: { value: "password123" },
    });

    fireEvent.click(getByText("Registrarse"));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: "John Doe",
      email: "test@example.com",
      password: "password123",
      password_confirmation: "password123",
    });
  });

  it("displays error message when error prop is provided", () => {
    const { getByText } = render(<RegisterForm error="Error message" />);
    const errorMessage = getByText("Error message");

    expect(errorMessage).toBeInTheDocument();
  });
});
