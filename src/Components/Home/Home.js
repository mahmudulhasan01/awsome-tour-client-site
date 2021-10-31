import React from 'react';
import Facilities from '../Facilities/Facilities';
import Header from '../Header/Header';
import TopDestinations from '../TopDestinations/TopDestinations';
import './home.css'

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <TopDestinations></TopDestinations>
            <div className="d-flex justify-content-center d-flex align-items-center bg-cancel">
            <div className=" w-50 text-center my-5 py-2">
                <h1 className="fs-1 fw-bold">Free <br /> cancellation</h1>
                <p className="fw-bold">You'll receive a full refund if you cancel at <br /> least 24 hours in advance of most <br /> experiences.</p>
            </div>
            </div>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;