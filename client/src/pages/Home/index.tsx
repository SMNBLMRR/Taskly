import React from 'react';
import Header from '../../ui/molecules/Header';

interface HomeProps {
    
}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
        <Header />
            <h1>hi from homepage</h1>
        </>
    );
}

export default Home