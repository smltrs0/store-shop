import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { sessionLogIn } from '../features/auth/authActions';
import { Navigate } from 'react-router-dom';
import Login from './Login';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('../features/auth/authActions', () => ({
  sessionLogIn: jest.fn(),
}));

describe('Login', () => {
  test('renders login form', () => {
    useSelector.mockReturnValueOnce({ error: { message: '' }, isLoggedIn: false });
    render(<Login />);
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Contraseña');
    const submitButton = screen.getByText('Iniciar sesión');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

//   test('handles input change', () => {
//     useSelector.mockReturnValueOnce({ error: { message: '' }, isLoggedIn: false });
//     render(<Login />);

//     const emailInput = screen.getByLabelText('Email');
//     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//     expect(emailInput.value).toBe('test@example.com');

//     const passwordInput = screen.getByLabelText('Contraseña');
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     expect(passwordInput.value).toBe('password123');
//   });

//   test('submits login form', () => {
//     const dispatchMock = jest.fn();
//     useDispatch.mockReturnValue(dispatchMock);
//     useSelector.mockReturnValueOnce({ error: { message: '' }, isLoggedIn: false });
//     render(<Login />);

//     const emailInput = screen.getByLabelText('Email');
//     const passwordInput = screen.getByLabelText('Contraseña');
//     const submitButton = screen.getByText('Iniciar sesión');
//     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     fireEvent.click(submitButton);

//     expect(dispatchMock).toHaveBeenCalledWith(sessionLogIn({ email: 'test@example.com', password: 'password123' }));
//   });


//   test('displays error message if login fails', () => {
//     useSelector.mockReturnValueOnce({ error: { message: true  }, isLoggedIn: false });
//     render(<Login />);

//     const errorMessage = screen.getByText('Credenciales invalidas');
//     expect(errorMessage).toBeInTheDocument();
//   });
});
