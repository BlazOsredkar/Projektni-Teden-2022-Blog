import React, {SyntheticEvent, useState} from "react";
import Nav from "../components/Nav";
import axios from "axios";
import title from "../components/title";
import {useNavigate} from "react-router-dom";
import Footer from "../components/footer";
import Nav2 from "../components/nav2";

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
            <Nav2 />

            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Create post</h1>

                    <label>Naslov (max 50 znakov)</label>
                    <div className={"form-floating"}>
                        <input type={"text"} onChange={event => setTitle(event.target.value)} placeholder={"Naslov"} maxLength={50} value={title}/>
                    </div>
                    <label>Objava</label>
                    <div className={"form-floating"}>
                        <textarea  onChange={event => setContent(event.target.value)} value={content}/></div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Ustvari objavo</button>
                    
                </form>

            </main>

        </>
    )
};


export default CreatePost;