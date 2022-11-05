import React, { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Components/Footer';
import InputGroup from '../Components/InputGroup';
import './Contact.css'

const Contact = () => {
    const initialValue = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        agree: false
    };

    const [userData, setUserData] = useState(initialValue);
    const [errorList, setErrorList] = useState([]);

    const name = "Izima Obisike";
    const { firstName, lastName, email, message, agree } = userData;

    const handleChange = (e) => {
        const { value, name, checked, type } = e.target;
        if (!value) {
            setErrorList(errorList => [...errorList, name]);
        } if (value) {
            setErrorList(errorList => errorList.filter(error => error !== name));
        }
        setUserData({ ...userData, [name] : type ==="checkbox" ? checked : value });
    };

    useEffect(() => {
        // console.log(errorList);
    }, [errorList]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    }

    return (
        <div className='container'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form action="">
                <div className='row'>
                    <InputGroup
                        errorMsg='You have to input your first name.'
                        placeholder='Enter your first name'
                        handleChange={handleChange}
                        label='First Name'
                        value={firstName}
                        name='firstName'
                        id='first_name'
                        type='text'
                        error={errorList.includes('firstName')}
                    />
                    
                    <InputGroup
                        // errorMsg='This is a hint text to help user.'
                        errorMsg='You have to input your last name.'
                        placeholder='Enter your last name'
                        handleChange={handleChange}
                        label='Last Name'
                        value={lastName}
                        name='lastName'
                        type='text'
                        id='last_name'
                        error={errorList.includes('lastName')}
                    />
                </div>
                <div className='w-100 mt-6'>
                    <InputGroup
                        errorMsg='You have to input your email.'
                        placeholder='yourname@email.com'
                        handleChange={handleChange}
                        label='Email'
                        value={email}
                        name='email'
                        type='email'
                        id='email'
                        error={errorList.includes('email')}
                    />
                </div>
                <div className='group mt-6'>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={handleChange}
                        className={errorList.includes('message')  ? 'errorInput' : ''}
                        id='message'
                        rows="5"
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                    ></textarea>
                    <p className='error'>{errorList.includes('message') ? 'Please enter a message' : ''}</p>
                </div>

                <div className='d-flex'>
                    <input
                        type="checkbox"
                        id='check'
                        name='agree'
                        className={errorList.includes('agree') ? 'errorInput' : ''}
                        value={agree}
                        onChange={handleChange}
                    />
                    <label htmlFor="agree" id='agree'>You agree to providing your data to {name} who may contact you.</label>
                    <p className='error'>{errorList.includes('agree') ? 'You have to agree to provide your data' : ''}</p>
                </div>
                <button type='submit' id='btn_submit' onClick={handleSubmit}>Send Message</button>
            </form>
            <Footer />
        </div>
    )
}

export default Contact