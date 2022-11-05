import React from 'react';
import { useState } from 'react';
import InputGroup from '../Components/InputGroup';
import './Contact.css'

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const name = "Izima Obisike";

    return (
        <div className='container'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form action="">
                <div className='row'>
                    <InputGroup
                        placeholder='Enter your first name'
                        label='First Name'
                        value={firstName}
                        type='text'
                    />
                    
                    <InputGroup
                        placeholder='Enter your last name'
                        label='Last Name'
                        value={lastName}
                        type='text'
                    />
                </div>
                <div className='w-100 mt-6'>
                    <InputGroup
                        placeholder='yourname@email.com'
                        label='Email'
                        value={email}
                        type='email'
                    />
                </div>
                <div className='group mt-6'>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" value={message} cols="30" rows="5" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                </div>
                <div className='d-flex'>
                    <input type="checkbox" id='check' />
                    <label htmlFor="agree" id='agree'>You agree to providing your data to {name} who may contact you.</label>
                </div>
                <button type='submit' id='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact