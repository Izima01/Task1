import React from 'react';
import '../App.css'

const Link = ({ link, id, name }) => {
    return (
        <a href={link} id={id} className='link'>
            {name}
        </a>
    )
}

export default Link