import React, { useState } from 'react';
import InputField from '../../components/InputField';
import './RegisterPage.css';
import InputMask from 'react-input-mask';
const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phoneNumber: '',
        cpf: '',
        birthDate: '',
        password: '',
        confirmPassword: '',
        cep: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        country: 'Brasil',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            name,
            phoneNumber,
            cpf,
            birthDate,
            password,
            confirmPassword,
        } = formData;

        if (!email || !name || !phoneNumber || !cpf || !birthDate || !password || !confirmPassword) {
            setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('As senhas não coincidem.');
            return;
        }

        // Envio para a API (descomente e ajuste)
        // try {
        //     await register(formData, navigate);
        // } catch (error) {
        //     setErrorMessage(error.message);
        // }
    };

    return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-section">
                <h3>Dados Pessoais</h3>
                <InputField
                    type="email"
                    id="email"
                    label="E-mail*"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    id="name"
                    label="Nome Completo*"
                    value={formData.name}
                    onChange={handleChange}
                />
                <InputMask
                    mask="(99) 99999-9999" // Máscara para telefone no formato brasileiro
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange(e)} // Reutiliza seu handler
                >
                    {(inputProps) => (
                        <InputField
                            {...inputProps}
                            id="phoneNumber"
                            type="text"
                            label="Celular*"
                        />
                    )}
                </InputMask>
                <InputField
                    type="text"
                    id="cpf"
                    label="CPF*"
                    value={formData.cpf}
                    onChange={handleChange}
                />
                <InputField
                    type="date"
                    id="birthDate"
                    label="Data de Nascimento*"
                    value={formData.birthDate}
                    onChange={handleChange}
                />
                <InputField
                    type="password"
                    id="password"
                    label="Senha*"
                    value={formData.password}
                    onChange={handleChange}
                />
                <InputField
                    type="password"
                    id="confirmPassword"
                    label="Confirmar Senha*"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </div>
            <div className="form-section">
                <h3>Dados de Entrega</h3>
                <InputField
                    type="text"
                    id="cep"
                    label="CEP*"
                    value={formData.cep}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    id="street"
                    label="Logradouro*"
                    value={formData.street}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    id="number"
                    label="Número*"
                    value={formData.number}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    id="complement"
                    label="Complemento"
                    value={formData.complement}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    id="neighborhood"
                    label="Bairro*"
                    value={formData.neighborhood}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    id="city"
                    label="Cidade*"
                    value={formData.city}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    id="state"
                    label="Estado*"
                    value={formData.state}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    id="country"
                    label="País*"
                    value={formData.country}
                    onChange={handleChange}
                />
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit" className="button">
                Concluir Cadastro
            </button>
        </form>
    </div>
    );
};

export default RegisterPage;
