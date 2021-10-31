import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const Admin = () => {
    const [data, setData] = useState({});

    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
         console.log(data)
         axios.post('https://awsome-tour-server.herokuapp.com/places', data)
         .then(res => {
             console.log(res)
             if(res.data.insertedId){
                alert('A place is Added Successfully.');
             }
             
         })

    }


    return (
        <div>
            <h1 className="fw-bold text-center mt-5">Hero Admin</h1>
            <h6 className="fw-bold text-center">Insert Your data to Show on <span className="text-danger fs-3 mb-5">UI</span> </h6>

            <div className="d-flex justify-content-center">
                 <form onSubmit={handleSubmit(onSubmit)}>
                     <input className=" w-100 ps-2 pe-4 py-2 rounded" placeholder="Tourist Pleace Name" {...register("name")} />
                     <br /><br />
                     <input className=" w-100 ps-2 pe-4 py-2 rounded" placeholder="Images" {...register("img")} />
                     <br /><br />
                      <input className=" w-100 ps-2 pe-4 py-2 rounded" placeholder="Tourist Place Overview" {...register("description")} />
                      <br /><br />
                     <input className=" w-100 ps-2 pe-4 py-2 rounded" placeholder="Cost: Packages_1" type="number" {...register("cost1")} />
                     <br /><br />
                     <input className=" w-100 ps-2 pe-4 py-2 rounded" placeholder="Cost: Packages_2" type="number" {...register("cost2")} />
                     <br /><br />
                     <input className=" w-100 ps-2 pe-4 py-2 rounded" placeholder="Cost: Packages_3" type="number" {...register("cost3")} />
                     <br /><br />
                     <input className=" w-100 ps-2 pe-4 py-2 rounded" placeholder="Total Customer" type="number" {...register("customer")} />
                     <br /><br />
                     <input className=" w-100 ps-2 pe-4 py-2 rounded" placeholder="Rating" type="number" {...register("rating")} />
                     <br /><br />
                     <input className=" w-100 ps-2 pe-4 py-2 rounded" placeholder="Tour Duration Days" type="number" {...register("duration")} />
                     <br /><br />
                     <input className="pe-2 text-light btn btn-secondary" type="submit" />
                     <br /><br />
                 </form>
            </div>
        </div>
    );
};

export default Admin;