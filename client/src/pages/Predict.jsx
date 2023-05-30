import React, { useState } from "react";
import { FormField, DropdownInput } from "../components";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Predict = () => {
 
  const [form, setForm] = useState({
    Age: "",
    Sex: "",
    ChestPainType: "",
    Cholesterol: "",
    FastingBS: "",
    MaxHR: "",
    ExerciseAngina: "",
    OldPeak: "",
    ST_Slope: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [finalans, setFinalans] = useState(0);

  const generateImage = async () => {
    console.log(form);
    let formData = new FormData();
    for (const key in form) {
      formData.append(`${key}`, form[key]);
    }
    try {
      setGeneratingImg(true);
      const response = await fetch("http://127.0.0.1:5000/", {
        method: "POST",

        body: formData,
      });
      const data = await response.json();
      setFinalans(data);
      console.log(data);
    } catch (err) {
      alert("Please Enter All Values");
    } finally {
      setGeneratingImg(false);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form)
  };

 
  return (
    <section className="max-w-9xl mx-auto ">
      <div>
        <h1 className=" font-extrabold text-[#222328] text-[32px]">Predict</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500p x]">
          Making it easier for anyone to predict the chance of getting heart
          disease. Shows analysis done on large data sets.
        </p>
      </div>
      <form className="mt-5 max-w-3xl">
        <div className="flex gap-20">
          <div className="flex flex-col gap-5">
            <FormField
              labelName="Age"
              type="number"
              name="Age"
              placeholder="18"
              value={form.name}
              handleChange={handleChange}
            />
            <DropdownInput
              form={form}
              setForm={setForm}
              labelName={"Sex"}
              options={["Male", "Female"]}
              name="Sex"
              handleChange={handleChange}
            />
            <DropdownInput
              form={form}
              setForm={setForm}
              labelName={"ChestPainType"}
              options={["ASY", "NAP", "ATA", "TA"]}
              name="ChestPainType"
              handleChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-5">
            <FormField
              labelName="Cholesterol"
              type="number"
              name="Cholesterol"
              placeholder="160"
              value={form.name}
              handleChange={handleChange}
            />
            <DropdownInput
              form={form}
              setForm={setForm}
              labelName={"FastingBS"}
              options={["0", "1"]}
              name={"FastingBS"}
              handleChange={handleChange}
            />
            <FormField
              labelName="Max Heart Rate"
              type="number"
              name="MaxHR"
              placeholder="75"
              value={form.name}
              handleChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-5">
            <DropdownInput
              form={form}
              setForm={setForm}
              labelName={"Excercise Angina"}
              options={["Yes", "No"]}
              name="ExerciseAngina"
              handleChange={handleChange}
            />
            <FormField
              labelName="Old Peak"
              type="number"
              name="OldPeak"
              placeholder="10"
              value={form.name}
              handleChange={handleChange}
            />
            <DropdownInput
              form={form}
              setForm={setForm}
              labelName={"ST Slope"}
              options={["Flat", "Up", "Down"]}
              name="ST_Slope"
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            className="text-white bg-green-500 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            type="button"
            onClick={generateImage}
          >
            {generatingImg ? "Predicting..." : "Predict"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have got your results,you can check out blogs to get more
            details.
          </p>

          <button
            type="submit"
            className="mt-3 text-white bg-[#F15A59] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            
          >  <a
              href="https://www.health.harvard.edu/topics/heart-health"
              target="_blank"
              rel="noreferrer"
            >
              Check out Blogs
            </a>
            
          </button>
        </div>
      </form>
      <div className="w-fit h-fit absolute right-[10%] top-[30%] shadow-inner p-10 rounded-lg">
        <CircularProgressbar
          styles={buildStyles({
            textColor: finalans<50 ? finalans===0 ? "#6f2dbd" : "gold"  : "#ff1654",
            pathColor: "red",
            trailColor: "gold",
          })}
          value={finalans}
          text={`${finalans}%`}
        />
        
      </div>
    </section>
  );
};

export default Predict;
