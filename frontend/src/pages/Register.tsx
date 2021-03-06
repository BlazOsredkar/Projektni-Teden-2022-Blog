import React, {SyntheticEvent, useState} from "react";
import Nav from "../components/Nav";
import axios from "axios";
import "./register.css"
import Footer from "../components/footer";
import {useNavigate} from "react-router-dom";
import Nav2 from "../components/nav2";
import ("../components/nav2");



const Register = () => {
    const navigation = useNavigate();
    const[first_name,setFirstName] = useState("");
    const[last_name,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[password_confirm,setPasswordConfirm] = useState("");

    const submit = async(e:SyntheticEvent) => {
      e.preventDefault();

      const data = {
          first_name,
          last_name,
          email,
          password,
          password_confirm
      }

      console.log(data);

      const response = await axios.post("http://localhost:3000/auth/register", data);
      console.log(response);

      if(response.status == 201){
          navigation({
              pathname: "/login"
          });
      }

    }


    return(
        <>


            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal center">Registracija</h1>

                    <label>Ime</label>
                    <div className="form-floating">
                        <input type="text" className="form-control"
                               placeholder="Name"
                        onChange={event => setFirstName(event.target.value)}/>

                    </div>

                    <label>Priimek</label>
                    <div className="form-floating">
                        <input type="text" className="form-control"
                               placeholder="Last name"
                               onChange={event => setLastName(event.target.value)}
                        />

                    </div>

                    <label>E-pošta</label>
                    <div className="form-floating">
                        <input type="email" className="form-control"
                               placeholder="name@example.com"
                               onChange={event => setEmail(event.target.value)}
                        />

                    </div>

                    <label>Geslo</label>
                    <div className="form-floating">
                        <input type="password" className="form-control"
                               placeholder="Password"
                               onChange={event => setPassword(event.target.value)}
                        />
                    </div>

                    <label>Potrdi geslo</label>
                    <div className="form-floating">
                        <input type="password" className="form-control"
                               placeholder="Confirm Password"
                               onChange={event => setPasswordConfirm(event.target.value)}

                        />
                    </div>



                    <button className="w-100 btn btn-lg btn-primary" type="submit">Registracija</button>
                    <p className="mt-5 mb-3 text-muted center">&copy; 2017–2022</p>
                </form>
            </main>



        </>
    )
}

export default Register;