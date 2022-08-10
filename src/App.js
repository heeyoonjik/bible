import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./com/Home";
import Introduction from "./com/Introduction";
import Identity from "./com/Identity";
import Connected from "./com/Connected";
import NavBar from "./com/NavBar";
import Guest from "./com/Guest";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/I:dentity" element={<Identity />} />
          <Route path="/Connected" element={<Connected />} />
          <Route path="/Guest" element={<Guest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
