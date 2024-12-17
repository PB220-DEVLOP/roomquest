import React from 'react'
import UserDashboard from '../../components/client/UserDashboard'
import Gallery from '../../components/client/Gallery';
import Services from '../../components/client/Services';
import About from '../../components/client/About';
import Footer from '../../components/Footer';

const UserHome = () => {
    return (
        <>
            {/* Navbar */}
            <UserDashboard />
            <Gallery />
            <Services />
            <About />
        </>
    )
}

export default UserHome
