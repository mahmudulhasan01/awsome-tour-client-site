import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';
import './TopDestinations.css'

const TopDestinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/places')
        .then(res => res.json())
        .then(data => setDestinations(data));
    },[])
    return (
        <div className="container">
            <h2 className="text-center fw-bold mt-4 ">Top Destinations</h2>
           <div className="d-flex justify-content-center d-flex align-items-center row">
           {
                destinations.map(destination=> <Destination
                key={destination._id}
                destination={destination}
                ></Destination> )
            }
           </div>
        </div>
    );
};

export default TopDestinations;