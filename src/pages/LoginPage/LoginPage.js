import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService'; 
import InputField from '../../components/InputField'; 
import './LoginPage.css';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
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

    return (
        <div className="login-container">
            <h2>{isLogin ? 'Insira seu e-mail para entrar.' : 'Criação de Conta'}</h2>
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
                    {isLogin ? 'Entrar' : 'Criar Conta'}
                </button>
            </form>
            <p onClick={() => setIsLogin(!isLogin)} className="toggle-text">
                {isLogin ? 'Ainda não tem conta? Crie uma aqui.' : 'Já tem uma conta? Faça login aqui.'}
            </p>
        </div>
    );
};

export default LoginPage;
