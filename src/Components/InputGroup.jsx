import React from 'react';
import '../Pages/Contact.css';

const InputGroup = ({ label, placeholder, value, type }) => {
    return (
        <div className='group'>
            <label htmlFor={value}>{label}</label>
            <input type={type} placeholder={placeholder} value={value} />
        </div>
    )
}

export default InputGroup