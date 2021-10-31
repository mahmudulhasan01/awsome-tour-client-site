import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const {singInUseingGoogle, singInUseingGithub, error} = useAuth();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    // const handeleGoogleLogin = () => {
    //   singInUseingGoogle()
    //   .then(result=>{
        
    //     history.push(redirect_uri)
    // })

    // }
    return (
        <div className="">
           <h4 className="fw-bold text-center mt-5">Login With Email</h4>

           <div className="container mb-5 py-5 d-flex justify-content-center">
           
           <div className="">

           <p className="text-danger">{error}</p>
           <br /> 

         <form onSubmit={handleSubmit(onSubmit)}>
             <input className="py-2 px-4 w-100 text-bold rounded" placeholder="Email" type="text" {...register("email", { required: true })} />
             <br /><br />
             <input className="py-2 px-4 w-100 text-bold rounded" placeholder="Password" type="password" {...register("password", { required: true })} />
             <br /><br />
             <input className="btn btn-danger rounded" type="submit" />
         </form>      
         <br /><br /><br />                                                               

   <button onClick={singInUseingGoogle} className="bg-dark rounded p-1 px-3 me-4 btn"><i className="fab fa-google text-warning fs-3"></i></button>

<button onClick={singInUseingGithub} className="bg-dark rounded p-1 px-3 me-4 btn"><i className="fab fa-github-square text-warning fs-3"></i></button>

<button className="bg-dark rounded p-1 px-3 me-4 btn"><i className="fab fa-facebook text-warning fs-3"></i></button>



           </div>

<br /><br /><br />
        </div>

       </div>
    );
};

export default Login;