import React from "react";
import flow from "../assets/flow.png";
import STSlope from "../assets/STSlope.png";
import ExerciseAngina from "../assets/ExerciseAngina.png";
import Age from "../assets/Age.png";
import Sex from "../assets/Sex.png";
import FastingBS from "../assets/FastingBS.png";
import Cholesterol from "../assets/Cholesterol.png";
import OldPeak from "../assets/OldPeak.png";
import ChestPainType from "../assets/ChestPainType.png";
import MaxHR from "../assets/MaxHR.png";
const Feature = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center h-fit w-fit ">
          <div className=" font-extrabold  p-1.5 rounded-lg flex flex-col justify-center items-center gap-5 ">
            <div className="text-[#397AFA] text-[32px]">
              Analysis Results Based on Dataset Available
            </div>
            <span className=" flex justify-center items-center w-[10rem] h-[5px] bg-[#397AFA]"></span>
          </div>

          <div></div>
        </div>
      </div>
      <div className="w-[70%] relative text-center mt-[2%] ml-[15%] text-[20px] text-[#73767C] ">
        Model's ROC-AUC is <span className="text-black font-bold">93.6 ± 2.0%</span>. The following are the results of
        analysis done on the available heart disease dataset. Each graph shows
        the result based on different attributes.
      </div>
      <div className="w-[70%] relative text-center mt-[2%] ml-[15%] text-[20px] text-[#73767C] ">
        Below is the Flow Of Project:
      </div>
      <div className="w-[50%] relative text-center mt-[2%] ml-[25%] text-[20px] text-[#73767C] h-fit ">
        <img src={flow} alt="dlow-chart" />
      </div>
      <div className="w-[70%] relative text-center mt-[5%] ml-[15%] text-[#397AFA] text-[32px] ">
        Attributes:
      </div>
      <div className=" relative text-center mt-[2%]   flex justify-evenly">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img className="w-full  " src={STSlope} alt="ST Slope" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">ST_Slope</div>
            <p className="text-gray-700 text-base">
              ST slope, also known as the ST segment slope, is a feature
              observed in an electrocardiogram (ECG) waveform. The ST segment is
              a part of the ECG that follows the QRS complex and precedes the T
              wave. It represents the period when the ventricles of the heart
              are repolarizing.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={ExerciseAngina}
            alt="Exercise Angina"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">ExerciseAngina</div>
            <p className="text-gray-700 text-base">
              Exercise angina, also known as exertional angina or angina
              pectoris, is a type of chest pain or discomfort that occurs during
              physical activity or exertion. It is a common symptom of coronary
              artery disease (CAD), which is the most common form of heart
              disease.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={FastingBS}
            alt="Fastiing BS"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Fasting BS</div>
            <p className="text-gray-700 text-base">
              "Fasting BS" typically refers to "Fasting Blood Sugar," which is a
              measurement of blood glucose levels after an extended period of
              fasting, usually overnight. Fasting blood sugar is commonly used
              to diagnose and monitor diabetes.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative text-center mt-[5%]   flex justify-evenly">
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[50%]">
          <img className="w-full" src={MaxHR} alt="Max Heart Rate" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">MaxHR</div>
            <p className="text-gray-700 text-base">
              Max Heart Rate (MHR) refers to the highest number of times your
              heart can beat per minute during intense physical activity. It is
              commonly used as a reference point to determine appropriate
              exercise intensity and to assess cardiovascular fitness.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={OldPeak} alt="Old Peak" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Old Peak</div>
            <p className="text-gray-700 text-base">
              Old Peak, also known as angina pectoris, is a term used to
              describe a specific type of chest pain that is typically
              associated with heart-related conditions. It is often
              characterized by a discomfort, pressure, or squeezing sensation in
              the chest
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={Cholesterol}
            alt="Cholesterol"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Cholesterol</div>
            <p className="text-gray-700 text-base">
              When we talk about cholesterol in relation to heart health, we
              usually refer to two types: low-density lipoprotein (LDL)
              cholesterol and high-density lipoprotein (HDL) cholesterol.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative text-center mt-[5%]   flex justify-evenly">
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[50%]">
          <img className="w-full" src={Age} alt="Age" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Age</div>
            <p className="text-gray-700 text-base">
              Age is a significant factor when it comes to heart health. As
              people grow older, the risk of developing various heart-related
              conditions increases. The aging process itself brings about
              changes in the cardiovascular system that can affect heart
              function and increase susceptibility to heart disease
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={Sex} alt="Sex" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sex</div>
            <p className="text-gray-700 text-base">
              Gender plays a significant role in the context of heart health.
              While both men and women can experience heart-related issues,
              there are some important differences between the sexes in terms of
              risk factors, symptoms, and outcomes.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={ChestPainType}
            alt="ChestPainType"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Chest Pain Type</div>
            <p className="text-gray-700 text-base">
              Chest pain related to the heart can be indicative of various
              underlying conditions. One of the most common causes is angina,
              which occurs when there is reduced blood flow to the heart muscle
              due to narrowed or blocked coronary arteries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
