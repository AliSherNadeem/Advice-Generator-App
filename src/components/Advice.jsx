import React from "react";
import mobileDivider from "../assets/pattern-divider-mobile.svg";
import desktopDivider from "../assets/pattern-divider-desktop.svg";
import buttonIcon from "../assets/icon-dice.svg";

const Advice = () => {

  
  return (
    <div className="bg-gray-800 w-full h-screen flex justify-center items-center font-signature">
      <div className="relative flex flex-col justify-center items-center gap-4 bg-gray-700 text-slate-300 p-6 sm:p-8 rounded-lg max-w-xs md:max-w-md lg:max-w-lg">
        <div className="text-emerald-300 mb-4">
          <p>
            ADVICE # <span id="advice-id">117</span>
          </p>
        </div>
        <div>
          <p className="text-xl text-center sm:text-base md:text-2xl mb-4">
            This is advice. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita quia dolorem neque!
          </p>
        </div>
        <div className="mb-6">
          <img
            src={mobileDivider}
            alt="pattern-divider-mobile"
            className="block md:hidden"
          />
          <img
            src={desktopDivider}
            alt="pattern-divider-desktop"
            className="hidden md:block"
          />
        </div>
        <div className="absolute bottom-0 flex justify-center w-full">
          <button className="bg-emerald-300 w-14 h-14 rounded-full flex justify-center items-center -mb-7 shadow-emerald-300 hover:shadow-2xl transition-shadow duration-200">
            <img src={buttonIcon} alt="icon-dice" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advice;
