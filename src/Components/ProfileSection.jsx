import React from 'react'
import picture from '../Assets/dp.jpg'
import './ProfileSection.css'

const ProfileSection = () => {
    return (
        <div className='' style={{ paddingTop: "56px" }}>
            <div className='pic'>
                <img src={picture} id="profile__img" alt="" />
            </div>
            <h2 id='twitter'>@IzimaObisike</h2>
            <h3 id='slack'>Slack Name</h3>
        </div>
    )
}

export default ProfileSection