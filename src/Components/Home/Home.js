import React from 'react';
import Facilities from '../Facilities/Facilities';
import Header from '../Header/Header';
import TopDestinations from '../TopDestinations/TopDestinations';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <TopDestinations></TopDestinations>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;