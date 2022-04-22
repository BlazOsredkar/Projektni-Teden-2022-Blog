import React, {SyntheticEvent, useState} from "react";
import Nav from "../components/Nav";
import axios from "axios";
import title from "../components/title";
import {useNavigate} from "react-router-dom";
import Footer from "../components/footer";

const CreatePost = ()=>{
    const navigation = useNavigate();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();
      let data = {
          content,
          title
      };
      const response = await axios.post("http://localhost:3000/post",data,{
          withCredentials:true
      });
      if (response.status==201){
          navigation({
              pathname: "/home",
              }
          )
      }
      console.log(response);
    };


    return(
        <>
            <Nav />

            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Create post</h1>
                    <input type={"text"} onChange={event => setTitle(event.target.value)}/>
                    <input type={"text"} onChange={event => setContent(event.target.value)}/>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Create</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>

            </main>

        </>
    )
};


export default CreatePost;