import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService'; 
import InputField from '../../components/InputField'; 
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage('Por favor, preencha todos os campos.');
            return;
        }

        try {
            await login(email, password, navigate);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const handleForgotPassword = () => {
        console.log("Esqueceu a senha clicado");
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="container">
            <h2>Entrar</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <InputField
                    type="email"
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    type="password"
                    id="password"
                    label="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit" className="login-button">
                    Entrar
                </button>
            </form>
            <div className="footer-links">
            <p onClick={handleForgotPassword} className="forgot-password">Esqueceu a senha? clique aqui</p>
            <button onClick={handleRegister} className="register-button">Registrar</button>
        </div>
        </div>
    );
};

export default LoginPage;
