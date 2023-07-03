import { useState } from "react";

const RegisterForm = ({ onSubmit, error, handlerDataFor, dataForm }) => {
   

  
    const handlenameChange = (e) => handlerDataFor({ ...dataForm, name: e.target.value });
    const handleEmailChange = (e) => handlerDataFor({ ...dataForm, email: e.target.value });
    const handlePasswordChange = (e) => handlerDataFor({ ...dataForm, password: e.target.value });
    const handleConfirmPasswordChange = (e) =>
    handlerDataFor({ ...dataForm, password_confirmation: e.target.value });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(dataForm);
    };
  
    return (
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-1">
            Usuario
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={dataForm.name}
            onChange={handlenameChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handlePasswordChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={dataForm.password_confirmation}
            onChange={handleConfirmPasswordChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Registrarse
          </button>
        </div>
      </form>
    );
}
  
export default RegisterForm;