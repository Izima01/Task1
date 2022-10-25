import React from 'react'
import slack from '../Assets/slack.svg';
import github from '../Assets/github.svg';

const Socials = () => {
    return (
        <div className='social'>
            <a href="/">
                <img src={slack} alt="" />
            </a>
            <a href="https://github.com/Izima01">
                <img src={github} alt="" />
            </a>
        </div>
    )
}

export default Socials