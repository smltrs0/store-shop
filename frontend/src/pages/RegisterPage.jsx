import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "../components/Register/RegisterForm";
import { createUser } from "../features/user/userActions";
import { Navigate } from "react-router-dom";
import Toast from "../components/Toast";
import { clearMessagedata } from "../features/user/userSlice";

const RegisterPage = () => {
	const dispatch = useDispatch();
	const [inputError, setInputError] = useState('');
	const initialStateUserData = {
		name: '',
		email: '',
		password: '',
		password_confirmation: ''
	}

	const { messageUser, messageErrorUser } = useSelector(
		(state) => ({
			messageUser: state.user.messageUser,
			messageErrorUser: state.user.messageErrorUser,
		}),
		[]
	);

	useEffect(() => {
		if (messageErrorUser) {
			Toast.fire({
				icon: "error",
				title: messageErrorUser,
			});
		} else if (messageUser) {
			Toast.fire({
				icon: "success",
				title: messageUser,
			});
			setUserdata(initialStateUserData);
		}
		dispatch(clearMessagedata());
	}, [messageUser, messageErrorUser, dispatch]);


	const handleSubmit = (userdata) => {
		if (!userdata.name || !userdata.email || !userdata.password || !userdata.password_confirmation) {
			setInputError('Todos los campos son requeridos');
			return;
		}
		if (userdata.password !== userdata.password_confirmation) {
			setInputError('Las contraseñas no coinciden');
			return;
		}
		if (userdata.password.length < 6) {
			setInputError('La contraseña debe tener al menos 6 caracteres');
			return;
		}
		setInputError('');
		dispatch(createUser(userdata));
	};

	const [userdata, setUserdata] = useState(initialStateUserData);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="max-w-md w-full bg-white p-8 shadow-lg rounded-md">
				<h2 className="text-2xl mb-4">Registro</h2>
				<RegisterForm onSubmit={handleSubmit} error={inputError} handlerDataFor={setUserdata} dataForm={userdata} />
			</div>
		</div>
	);
};

export default RegisterPage;