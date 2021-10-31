import React, { useEffect, useState } from 'react';

const Facilities = () => {
    const [facilities, setFacilities] = useState([]);
    // console.log(facilities)

    useEffect(()=>{
        fetch('https://awsome-tour-server.herokuapp.com/facilities')
        .then(res => res.json())
        .then(data => setFacilities(data))
    },[]);

    return (
        <div className="text-center mt-5 bg-secondary py-5">
            <h4 className=" fw-bold mb-3 pb-4">Why book with Awsome Tour?</h4>

            <div className="row">
                {
                    facilities.map(facilitie=> <div
                    key={facilitie._id}
                    className="col-6 col-lg-3"
                    >
                        <i className="fas fa-trophy text-warning"></i> <br />
                        <h5 className="text-light">{facilitie.name}</h5>
                        <p className="text-light">{facilitie.details}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Facilities;