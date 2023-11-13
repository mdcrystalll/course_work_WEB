import React from "react";
import  {Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"; 
import { Header } from "./components/header/Header";
import {nav} from "./assets/data/data"
import Details from "./pages/details/Details";
import Login from "./pages/login/Login";
import Create from "./components/create/Create";
import About from "./pages/about/About";
import Account from "./pages/account/Account"
import Register from "./pages/login/Register";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={nav[0].url} element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/create' element={<Create/>} />
        <Route path={nav[1].url} element={<About/>} />
        <Route path={nav[2].url} element={<Contact/>} />
        

        
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
