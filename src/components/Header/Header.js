import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const userName = localStorage.getItem('userName'); // Pegando o nome do usuário
    const roleId = localStorage.getItem('roleid'); // Pegando o roleId do usuário

    const handleLogout = () => {
        // Lógica de logout, removendo o localStorage
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('roleid');
        window.location.href = '/login'; // Redireciona para a página de login após o logout
    };

    return (
        <header className="header">
            <h1 className="logo">E-Commerce</h1>
            <nav>
                <ul className="navList">
                    <li><Link to="/" className="navLink">Página Inicial</Link></li>
                    {userName ? (
                        <li className="dropdown">
                            <button className="dropdown-btn">
                                Olá, {userName}
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link to="/profile" className="dropdown-item">Perfil</Link></li>
                                <li><Link to="/orders" className="dropdown-item">Meus Pedidos</Link></li>
                                <li onClick={handleLogout} className="dropdown-item">Sair</li>
                            </ul>
                        </li>
                    ) : (
                        <li><Link to="/login" className="navLink">Entrar</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
