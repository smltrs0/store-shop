import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';
import ErrorText from './ErrorText';

const LoginForm = ({
    credenciales,
    handleInputChangeEmail,
    handleInputChangePassword,
    handleSubmit,
    error
}) => {
    const { email, password } = credenciales;

    return (
        <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
        >
            <EmailInput value={email} onChange={handleInputChangeEmail} />
            <PasswordInput value={password} onChange={handleInputChangePassword} />
            {error.message && <ErrorText message="Credenciales inválidas" />}
            <SubmitButton onSubmit={handleSubmit} />
        </form>
    );
};

export default LoginForm;