import React from 'react';
import Hero from '../../components/home/Hero';
import About from '../../components/home/About';
import Features from '../../components/home/Features';
import Reviews from '../../components/home/Reviews';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>        
            <Hero />
            <About />
            <Features />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;
