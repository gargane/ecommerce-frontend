import React from 'react';
import Layout from '../../components/Layout/Layout'; // Importa Layout reutilizável
import './Register.css';

const Register = () => {
    return (
        <Layout>
            <div className="register-container">
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;
