import React from "react";
import Nav from "../components/Nav";
import Title from "../components/title";
import Card from "../components/card";
import Footer from "../components/footer";
import Cards from "../components/Cards";

const Home = () => {
  return(
      <>
          <Nav/>
          <main>
              <Title/>
              <div className={"album py-5 bg-light"} >
                  <div className={"container"} >
                      <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"}>
                          <Cards />
                      </div>
                  </div>
              </div>
          </main>
          <Footer/>
      </>
  )
}

export default Home;