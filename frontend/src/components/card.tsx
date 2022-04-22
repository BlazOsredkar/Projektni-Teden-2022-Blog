import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Card = ({content,title, id, owner, loadPosts}:{content:string,title:string,id:number,owner:boolean,loadPosts:any}) => {

    const deletepost = async () => {
      const res = await axios.delete(`http://localhost:3000/post/${id}`,{withCredentials:true});
      console.log(res);

      if(res.status==200){
          //window.location.reload();
          await loadPosts()
      }
    }
  return(
                  <div className="col">
                      <div className="card shadow-sm">
                          <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                               xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                               preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                              <rect width="100%" height="100%" fill="#55595c"/>
                              <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                          </svg>

                          <div className="card-body">
                              <b className="card-text">{title}</b>
                              <p className="card-text">{content}</p>
                              <div className="d-flex justify-content-between align-items-center">
                                  <div className="btn-group">
                                      {owner && <button type="button" className="btn btn-sm btn-outline-secondary" onClick={deletepost}>Delete</button>}
                                      {
                                          owner && (<Link to={"/update-post/"+id} className="btn btn-sm btn-outline-secondary">Edit</Link>)
                                      }

                                  </div>
                                  <small className="text-muted">9 mins</small>
                              </div>
                          </div>
                      </div>
                  </div>

  )
}
export default Card;