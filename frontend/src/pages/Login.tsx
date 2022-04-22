import React, {SyntheticEvent, useState} from "react";
import Nav from "../components/Nav";
import {Link, Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import "./login.css"
import background from "./pictures/retrosupply-jLwVAUtLOAQ-unsplash.jpg";


const Login = () => {
    const navigation = useNavigate();
    const[first_name,setFirstName] = useState("");
    const[last_name,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[password_confirm,setPasswordConfirm] = useState("");

    const[redirect,SetRedirect] = useState(false);

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            email,
            password,
        }

        console.log(data);

        const response = await axios.post("http://localhost:3000/auth/login", data, {withCredentials: true});
        console.log(response);


        SetRedirect(true);

    }
    if(redirect){
        return <Navigate to="/home" />;
    }


    return(
        <>
            <main className="form-signin" >
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal center">Prijava</h1>

                    <label>Email</label>
                    <div className="form-floating">
                        <input type="email" className="form-control"
                               placeholder="name@example.com"
                               onChange={event => setEmail(event.target.value)}
                        />

                    </div>

                    <label>Password</label>
                    <div className="form-floating">
                        <input type="password" className="form-control"
                               placeholder="Password"
                               onChange={event => setPassword(event.target.value)}
                        />
                    </div>



                    <button className="w-100 btn btn-lg btn-primary " type="submit">Prijava</button>
                    
                    <a href="register" className="w-100 btn btn-lg btn-primary btnreg">Registracija</a>

                    <p className="mt-5 mb-3 text-muted center">&copy; 2017–2022</p>
                </form>


            </main>





        </>
    )
}

export default Login;