import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Title from './components/title';
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Nav/>
      <main>
          <Title/>
          <Card/>

      </main>
      <Footer/>
    </>
  );
}

export default App;
