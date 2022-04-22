import React, {SyntheticEvent, useEffect, useState} from "react";
import Nav from "../components/Nav";
import axios from "axios";
import title from "../components/title";
import {useNavigate, useParams} from "react-router-dom";

const UpdatePost = ()=>{
    const navigation = useNavigate();
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    let{id}=useParams()

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();
      let data = {
          content,
          title
      };
      const response = await axios.put("http://localhost:3000/post/"+id,data,{
          withCredentials:true
      });
      if (response.status==200){
          navigation({
              pathname: "/home",
              }
          )
      }
      console.log(response);
    };

    const getPost = async () => {
      const response = await axios.get("http://localhost:3000/post/"+id, {withCredentials:true})
        if(response.status==200){
            setContent(response.data.content);
            setTitle(response.data.title);
        }else{
            navigation({
                pathname: "/home",
            })
        }
    };

    useEffect(()=>{
        getPost()
    }, [])


    return(
        <>
            <Nav />

            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Create post</h1>
                    <input type={"text"} onChange={event => setTitle(event.target.value)} value={title}/>
                    <input type={"text"} onChange={event => setContent(event.target.value)} value={content}/>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Edit</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </>
    )
};


export default UpdatePost;