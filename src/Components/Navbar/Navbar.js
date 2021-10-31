import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Navbar = () => {
  const {user, logOut} = useAuth();
    return (
        <div className="fixed-top">
             <div className="d-flex py-3 justify-content-around bg-dark">
        <div className="">
          <h3 className="text-light fw-bold">Awsome Tour</h3>
        </div>
        <div className="">
          <Link className="text-decoration-none pe-2 text-light btn btn-outline-success me-1" to="/home">Home</Link>

          {user?.email ?
            <Link className="text-decoration-none pe-2 text-light btn btn-outline-success me-1" to={`/mybooking`}>My Booking</Link>
            :
            <NavHashLink className="text-decoration-none pe-2 text-light btn btn-outline-success me-1" to="#about">About us</NavHashLink>
          }
          <Link className="text-decoration-none pe-2 text-danger fw-bold btn btn-outline-success me-1" to="/admin">Add A New Pleace</Link>

        {user?.email && <Link className="text-decoration-none  pe-2 text-light btn btn-outline-success me-1" to="/menageorder">Manage All Booking</Link>}
          
          
          {user?.email?
                    <button onClick={logOut} className=" text-light btn btn-outline-success me-1">LogOut</button>
                    

                   :
                   <Link className="text-decoration-none pe-2 text-light btn btn-outline-success me-1" to="/login">Login</Link>
          }
         
          
          {user?.email &&
            <span className="text-light"><img width="35px" className="rounded-circle" src={user?.photoURL} alt="" /> {user.displayName}</span>}
        </div>
      </div>
        </div>
    );
};

export default Navbar;