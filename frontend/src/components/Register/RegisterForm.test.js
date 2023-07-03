import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("RegisterForm", () => {
  it("should update name field value", () => {
    const dataForm = { name: "", email: "", password: "", password_confirmation: "" };
    const handlerDataFor = jest.fn();
    const { getByLabelText } = render(
      <RegisterForm handlerDataFor={handlerDataFor} dataForm={dataForm} />
    );

    const nameInput = getByLabelText("Usuario");
    fireEvent.change(nameInput, { target: { value: "test test" } });

    expect(handlerDataFor).toHaveBeenCalledWith({ name: "test test", email: "", password: "", password_confirmation: "" });
  });

  it("should update email field value", () => {
    const dataForm = { name: "", email: "", password: "", password_confirmation: "" };
    const handlerDataFor = jest.fn();
    const { getByLabelText } = render(
      <RegisterForm handlerDataFor={handlerDataFor} dataForm={dataForm} />
    );

    const emailInput = getByLabelText("Correo Electrónico");
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    expect(handlerDataFor).toHaveBeenCalledWith({ name: "", email: "john@example.com", password: "", password_confirmation: "" });
  });

  it("should update password field value", () => {
    const dataForm = { name: "", email: "", password: "", password_confirmation: "" };
    const handlerDataFor = jest.fn();
    const { getByLabelText } = render(
      <RegisterForm handlerDataFor={handlerDataFor} dataForm={dataForm} />
    );

    const passwordInput = getByLabelText("Contraseña");
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(handlerDataFor).toHaveBeenCalledWith({ name: "", email: "", password: "password123", password_confirmation: "" });
  });

  it("should update confirmPassword field value", () => {
    const dataForm = { name: "", email: "", password: "", password_confirmation: "" };
    const handlerDataFor = jest.fn();
    const { getByLabelText } = render(
      <RegisterForm handlerDataFor={handlerDataFor} dataForm={dataForm} />
    );

    const confirmPasswordInput = getByLabelText("Confirmar Contraseña");
    fireEvent.change(confirmPasswordInput, { target: { value: "password123" } });

    expect(handlerDataFor).toHaveBeenCalledWith({ name: "", email: "", password: "", password_confirmation: "password123" });
  });

  it("should call onSubmit when the form is submitted", () => {
    const dataForm = { name: "", email: "", password: "", password_confirmation: "" };
    const handlerDataFor = jest.fn();
    const onSubmit = jest.fn();
    const { getByText } = render(
      <RegisterForm
        onSubmit={onSubmit}
        handlerDataFor={handlerDataFor}
        dataForm={dataForm}
      />
    );

    const submitButton = getByText("Registrarse");
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith(dataForm);
  });
  
  // Aquí puedes agregar más pruebas unitarias según tus necesidades
  
});
