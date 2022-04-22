import React, {useEffect, useState} from "react";
import axios from "axios";

const Title = () => {
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
      <section className="py-5 text-center container">
          <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                  {user && <h1 className="fw-light">Pozdravljen, {user.first_name} {user.last_name}</h1>}
                  {
                      user && (<p>
                          <a href="create-post" className="btn btn-primary my-2">Ustvari blog objavo</a>
                      </p>)
                  }

              </div>
          </div>
      </section>
  )
}

export default Title;