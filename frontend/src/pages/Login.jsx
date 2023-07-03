import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sessionLogIn } from '../features/auth/authActions';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const [credenciales, setCredenciales] = useState({
    email: '',
    password: '',
  });

  const error = useSelector((state) => state.auth.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleInputChangeEmail = (event) => {
    setCredenciales({ ...credenciales, email: event.target.value });
  };

  const handleInputChangePassword = (event) => {
    setCredenciales({ ...credenciales, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sessionLogIn(credenciales));
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm
        credenciales={credenciales}
        handleInputChangeEmail={handleInputChangeEmail}
        handleInputChangePassword={handleInputChangePassword}
        handleSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
};

export default Login;
