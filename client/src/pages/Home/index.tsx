import React from 'react';
import Header from '../../ui/molecules/Header';
import Hero from '../../ui/atoms/Hero';

interface HomeProps {
    
}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
        <Header />
        <Hero />
        </>
    );
}

export default Home