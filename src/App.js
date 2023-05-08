import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "../src/components/Home/Home.jsx"

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home/>} />
       </Routes>

    </>
  );
}

export default App;
