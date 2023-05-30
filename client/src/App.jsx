import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo1 } from "./assets";
import {  Predict, HomePage,Feature,Contact } from "./pages";
import ButtonGroup from '@mui/material/ButtonGroup'
const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b bordeer-b-[#e6ebf4] bg-sky-100 shadow-2xl">
        <Link to="/" className="flex jutsify-center items-center gap-4 px-2  ">
          <img src={logo1} alt="logo" className="h-[48px]" />
          <span className="font-inter font-bold text-3xl text-[#4361ee]">
            Heart Disease Prediction
          </span>
        </Link>
        <ButtonGroup color="primary" variant="text" aria-label="text button group">
          <Link
            to="/"
            className="font-inter font-medium  text-[#397AFA] px-4 py-2 rounded-md hover:bg-[rgb(158,210,255)] font-semibold"
          >
            Home
          </Link>
          <Link
            to="/predict"
            className="font-inter font-medium  text-[#397AFA] px-4 py-2 rounded-md hover:bg-[rgb(158,210,255)] font-semibold"
          >
            Predict
          </Link>
          <Link
            to="/features"
            className="font-inter font-medium  text-[#397AFA] px-4 py-2 rounded-md hover:bg-[rgb(158,210,255)] font-semibold"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="font-inter font-medium  text-[#397AFA] px-4 py-2 rounded-md hover:bg-[rgb(158,210,255)] font-semibold"
          >
            Contact Us
          </Link>
          
        </ButtonGroup>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-sky-50 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
