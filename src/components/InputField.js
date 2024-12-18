import React from 'react';
import './InputField.css';  // Certifique-se de que o arquivo CSS está importado

const InputField = ({ type, id, label, value, onChange }) => {
    return (
        <div className="input-container">
            <input
                type={type}
                id={id}
                className="input-field"
                value={value}
                onChange={onChange}
                placeholder=" " 
            />
            <label htmlFor={id} className="input-label">
                {label}
            </label>
        </div>
    );
};

export default InputField;
