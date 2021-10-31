import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const TourSpot = () => {
    const { id } = useParams();
    const [tourSpot, setTourSpot] = useState({});

    // console.log(tourSpot)

    const {name, img, description, cost1, cost2, cost3, customer,rating, durationa} = tourSpot;

    useEffect(()=>{
        fetch(`https://awsome-tour-server.herokuapp.com/places/${id}`)
        .then(res => res.json())
        .then(data => setTourSpot(data))
    },[id]);



    return (
       <div className="">
            <div className="container row my-5">

        <div className="col-6">
        <img className="w-75" src={img} alt="" />
        </div>
        <div className="col shadow-lg d-flex justify-content-center align-items-center">
         <div className="text-start">
         <h3> <span className="fw-bolder">From</span>$ {cost3}</h3>
         <p className="text-info">Lowest Price Guarantee</p>
        <input className="w-100 py-2 px-5 mb-3 rounded shadow text-danger" type="date" value="2021-11-01" placeholder=""/><br />
        <input className="w-100 py-2 mb-3 px-5 rounded shadow text-danger" placeholder="Number of travelers" type="number"/> <br />

        <Link to ='/mybooking'>
        <button className="btn btn-danger mb-3 btn-lg w-100 text-light fw-bold">Book Now</button>
        </Link>
         </div>
         </div>
         </div>


         <div className="d-flex justify-content-start align-items-center container">
                
            <div className="w-50">
                 <h3>Overview</h3>
                 <p>{description}</p>
             </div>

            </div>


         </div>
    );
};

export default TourSpot;
