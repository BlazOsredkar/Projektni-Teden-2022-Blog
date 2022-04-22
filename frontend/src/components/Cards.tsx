import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "./card";

const Cards = () => {
    const [user,setUser]=useState<any>(null);
    const [posts, setPosts] = useState([]);

    const loadPosts = async ()=>{
        const res = await axios.get("http://localhost:3000/post",{withCredentials:true});
        if(res.status==200){
            setPosts(res.data);
        }
    };

    useEffect(() => {
        loadPosts();
        getUser();
    }, []);

    if(posts.length>0){
        return(
            <>
                {posts.map((post:any, i) => {
                    let owner = false
                    if(user && post.user.id==user.id){
                        owner = true;
                    }
                    return <Card key={i} content={post.content} title={post.title} id={post.id} owner={owner}/>;
                })

                }
                </>
        );

    }
    const getUser = async () => {
        const res = await axios.get("http://localhost:3000/user/me",{withCredentials:true});
        if(res.status==200){
            setUser(res.data);
        }
        console.log(res)
    }



    return  <></>
}

export default Cards;