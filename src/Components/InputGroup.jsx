import React from 'react';
import '../Pages/Contact.css';

const InputGroup = ({ label, placeholder, type, id, errorMsg, handleChange, value, name, error }) => {
    return (
        <div className='group'>
            <label htmlFor={value}>{label}</label>
            <input type={type} id={id} name={name} placeholder={placeholder} className={error ? 'errorInput' : ''} value={value} onChange={handleChange} />
            <p className='error'>{error ? errorMsg : ""}</p>
        </div>
    )
}

export default InputGroup