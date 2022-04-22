import React, {useEffect, useState} from "react";
import "./nav2.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import logout from "./ikonice/logout.svg";
import {Button, IconButton} from "@mui/material";




const Nav2 = () => {


    const navigation = useNavigate();
    const Odjava = async ()=>{
        const res = await axios.post("http://localhost:3000/auth/logout", {},{withCredentials:true});
        if(res.status == 201){
            navigation({pathname:"/login"})
        }

    };

    const [user,setUser]=useState<any>(null);

    const getUser = async () => {
        const res = await axios.get("http://localhost:3000/user/me",{withCredentials:true});
        if(res.status==200){
            setUser(res.data);
        }
        console.log(res)
    }

    useEffect(() => {
        getUser();
    }, []);
  return(
      <>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center fixed-top">
              {user && <a className="navbar-brand abs " title={"Odjava"} onClick={Odjava}>{user.first_name} {user.last_name}</a>}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="collapsingNavbar">
                  <ul className="navbar-nav">
                      <li className="nav-item active">
                          <a><Link to={"/home"} className="nav-link">Home</Link></a>
                      </li>
                      <li className="nav-item">
                          <a><Link to={"/create-post"} className="nav-link">Ustvari blog objavo</Link></a>

                      </li>
                      {/*
                        <li className="nav-item">
                          <a className="nav-link" href="#myAlert" data-toggle="collapse">Link</a>
                        </li>
                        */}

                  </ul>
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <a className="nav-link"  onClick={Odjava}></a>
                      </li>
                  </ul>
              </div>
          </nav>
      </>
  )

}

export default Nav2;