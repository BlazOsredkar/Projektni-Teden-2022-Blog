import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Title from './components/title';
import Card from "./components/card";
import Footer from "./components/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
            </Routes>
        </BrowserRouter>
    </>

  );
}

export default App;
