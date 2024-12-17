import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>E-Commerce</h1>
            <nav>
                <ul style={styles.navList}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#000',
        color: '#fff',
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        gap: '15px',
    },
};

export default Header;
