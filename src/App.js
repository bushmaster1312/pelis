import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import React, { useState, useEffect } from 'react'
import UserContext from "./context/UserContext";
import Info from "./pages/Info";
import AppContext from "./store/appContext";

function App() {


  return (
    <AppContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Info/>}/> 
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;
