import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeSession } from '../features/auth/authUserSlice';

const Navigation = () => {

    const sessionUser = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleCloseSession = () => dispatch(closeSession());
    
    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Tienda virtual</h1>
                <nav>
                    <ul className="flex space-x-4">
                        {sessionUser.isLoggedIn ?
                            <>
                                <li>
                                    <Link className="text-white hover:text-gray-400" to="/home">Inicio</Link>
                                </li>
                                <li>
                                    <Link className="text-white hover:text-gray-400" to="/products">Productos</Link>
                                </li>
                                <li>
                                    <Link className="text-white hover:text-gray-400" to="/car">Carrito</Link>
                                </li>
                                <li>
                                    <Link className="text-white hover:text-gray-400" to="/orders">Pedidos</Link>
                                </li>
                                <li>
                                    <button className="text-white hover:text-gray-400" href="#" onClick={handleCloseSession}>Salir</button>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <Link className="text-white hover:text-gray-400" to="/register">Registrate</Link>
                                </li>
                                <li>
                                    <Link className="text-white hover:text-gray-400" to="/login">Login</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;