import React from 'react';
import LinksData from '../Assets/LinksData';
import Link from '../Components/Link';
import ProfileSection from '../Components/ProfileSection';
import Socials from '../Components/Socials';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom'

const Home = () => {
    const renderLinks = LinksData.map(({ name, link, id }, index) => {
        return (
        <Link name={name} link={link} id={id} key={index} />
        )
    })

    return (
        <div>
            <ProfileSection />
            <div className="links">
                {renderLinks}
            </div>
            {/* <NavLink to='/contact'  /> */}
            <Socials />
            <Footer />
        </div>
    )
}

export default Home