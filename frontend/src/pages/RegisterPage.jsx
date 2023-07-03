import { useState } from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../components/Register/RegisterForm";
import { createUser } from "../features/user/userActions";

const RegisterPage = () => {
	const dispatch = useDispatch();
	const [error, setError] = useState('');
  
	const handleSubmit = (userdata) => {
	  if (!userdata.name || !userdata.email || !userdata.password || !userdata.password_confirmation) {
		setError('Todos los campos son requeridos');
		return;
	  }
  
	  if (userdata.password !== userdata.password_confirmation) {
		setError('Las contraseñas no coinciden');
		return;
	  }
  
	  if (userdata.password.length < 6) {
		setError('La contraseña debe tener al menos 6 caracteres');
		return;
	  }
  
	  setError('');
	  dispatch(createUser(userdata));
	};
  
	return (
	  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
		<div className="max-w-md w-full bg-white p-8 shadow-lg rounded-md">
		  <h2 className="text-2xl mb-4">Registro</h2>
		  <RegisterForm onSubmit={handleSubmit} error={error} />
		</div>
	  </div>
	);
  };
  
  export default RegisterPage;