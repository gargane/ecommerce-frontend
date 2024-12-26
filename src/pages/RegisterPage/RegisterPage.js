import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { register } from '../../services/authService'; 
import InputField from '../../components/InputField'; 
import './RegisterPage.css';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            setErrorMessage('Por favor, preencha todos os campos.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('As senhas não coincidem.');
            return;
        }

        // try {
        //     await register(name, email, password, navigate);
        // } catch (error) {
        //     setErrorMessage(error.message);
        // }
    };

    const handleBackToLogin = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <h2 className="title">Dados Pessoais</h2>
            <form className="form" onSubmit={handleSubmit}>
                <InputField
                    type="email"
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    type="text"
                    id="name"
                    label="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputField
                    type="number"
                    id="phoneNumber"
                    label="Telefone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <InputField
                    type="password"
                    id="password"
                    label="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputField
                    type="password"
                    id="confirm-password"
                    label="Confirmar Senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit" className="button">Criar Conta</button>
            </form>
            <p onClick={handleBackToLogin} className="back-to-login">Voltar para o login</p>
        </div>
    );
};

export default RegisterPage;
