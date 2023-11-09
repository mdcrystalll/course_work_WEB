import React from "react";
import  {Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"; 
import { Header } from "./components/header/Header";
import {nav} from "./assets/data/data"
import Details from "./pages/details/Details";
import Login from "./pages/login/Login";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={nav[0].url} element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path={nav[6].url} element={<Login/>} />
      </Routes>
    </>
  );
};

export default App;
