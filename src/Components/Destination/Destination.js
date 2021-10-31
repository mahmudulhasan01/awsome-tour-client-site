import React from 'react';
import { Link } from 'react-router-dom';
import './Destination.css'

const Destination = (props) => {
    // console.log(props.destination)
    const {name, img, _id} = props.destination
    return (
       
             <div className="col-6 col-lg-4">
                <div className="">
                    <div className="">

                    <div className="fw-bold">
                         <h6>{name}</h6>
                     </div>
                         <Link to={`/places/${_id}`}><img type="button" className="images-width rounded shadow-lg p-1 bg-body" src={img} alt="" /></Link>
                     </div>

                    </div>
.                                           
             </div>
    );
};

export default Destination;