import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true); // Alterna entre login e criação de conta

    return (
        <div style={styles.container}>
            <h2>{isLogin ? 'Login' : 'Criação de Conta'}</h2>

            <form style={styles.form}>
                <label style={styles.label}>
                    Email:
                    <input type="email" style={styles.input} placeholder="Digite seu email" />
                </label>
                <label style={styles.label}>
                    Senha:
                    <input type="password" style={styles.input} placeholder="Digite sua senha" />
                </label>

                <button type="submit" style={styles.button}>
                    {isLogin ? 'Entrar' : 'Criar Conta'}
                </button>
            </form>

            <p onClick={() => setIsLogin(!isLogin)} style={styles.toggle}>
                {isLogin ? 'Ainda não tem conta? Crie uma aqui.' : 'Já tem uma conta? Faça login aqui.'}
            </p>
        </div>
        // TESET
    );
};

const styles = {
    container: { padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' },
    form: { display: 'flex', flexDirection: 'column', gap: '10px' },
    label: { display: 'flex', flexDirection: 'column', textAlign: 'left' },
    input: { padding: '8px', fontSize: '1rem', marginTop: '5px' },
    button: { padding: '10px', backgroundColor: '#000', color: '#fff', cursor: 'pointer', fontSize: '1rem' },
    toggle: { color: 'blue', cursor: 'pointer', marginTop: '15px' },
};

export default Login;
