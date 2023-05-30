import React from "react";
import prediction from "../assets/prediction.jpg";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex justify-evenly p-10 gap-10   ">
        <div className="w-[40%]  ml-0 flex flex-col  ">
          <div className="font-extrabold text-[#5e72eb] text-[32px] animate-typing whitespace-wrap  mt-[10%] h-fit w-fit">
            Predict your chance of having a heart disease because prevention is
            better than cure!
          </div>
          <ButtonGroup variant="text" aria-label="text button group" className="flex gap-5">
            <Link to='/predict' className="font-inter font-medium  text-#1e1e1e px-4 py-2 rounded-md bg-[#C7D3FD] mt-5 hover:bg-[rgb(158,210,255)]">Let's Check</Link>
            <Link to='/features' className="font-inter font-medium  text-#1e1e1e px-4 py-2 rounded-md bg-[#C7D3FD] mt-5 hover:bg-[rgb(158,210,255)]">See Analysis</Link>
          </ButtonGroup>
        </div>
        <div className="w-[50%] h-[50%] object-contain transform transition duration-500 hover:scale-110">
          <img className="rounded-lg" src={prediction} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
