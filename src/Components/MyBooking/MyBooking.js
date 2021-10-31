import React, { useEffect, useState } from 'react';

const MyBooking = () => {
    const [orders, setOrders] = useState([]);
    const [deleteBooking ,setDeleteBooking] = useState([])
    console.log(orders)

    useEffect(()=>{
        fetch('https://awsome-tour-server.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);

    const handleDelete = id => {
        const remainingBooks = deleteBooking.filter(items => items._id !== id);

        fetch(`https://awsome-tour-server.herokuapp.com/orders/${id}`, {
            method: "DELETE",
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                setDeleteBooking(remainingBooks);
            });
    }

    return (
        <div className="container ">
            <h3 className="text-center fw-bold my-5 pt-5">My Booking</h3>
           <div className="d-flex justify-content-center align-items-center">
           <table class="table w-50 my-5 pb-5">
              <thead>
                <tr>
                  <th scope="col">Pleace Name</th>
                 <th scope="col">Indivisual Cost</th>
                 <th scope="col"></th>
               </tr>
             </thead>
             <tbody>
             
              {
                  orders.map(order=> <tr>
                    <td>{order.name}</td>
                    <td>{order.cost3}</td>
                    <td><button onClick={()=>handleDelete(order._id)} className="btn btn-secondary">Cancel</button></td>
                  </tr>)
              }

             </tbody>
            </table>
           </div>
        </div>
    );
};

export default MyBooking;