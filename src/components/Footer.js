import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} E-Commerce. Todos os direitos reservados.</p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#000',
        color: '#fff',
    },
};

export default Footer;
