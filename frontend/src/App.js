import React from "react";
import  {Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"; // Import Home with the correct path
import { Header } from "./components/header/Header";
import {nav} from "./assets/data/data"
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={nav[0].url} element={<Home/>} />
      </Routes>
    </>
  );
};

export default App;
