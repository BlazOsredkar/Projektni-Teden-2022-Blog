import React from "react";
import Nav from "../components/Nav";
import Title from "../components/title";
import Card from "../components/card";
import Footer from "../components/footer";

const Home = () => {
  return(
      <>
          <Nav/>
          <main>
              <Title/>
              <Card/>

          </main>
          <Footer/>
      </>
  )
}

export default Home;