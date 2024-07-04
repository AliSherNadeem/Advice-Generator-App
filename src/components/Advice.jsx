import React from "react";
import mobileDivider from "../assets/pattern-divider-mobile.svg";
import desktopDivider from "../assets/pattern-divider-desktop.svg";
import buttonIcon from "../assets/icon-dice.svg";

const Advice = () => {
  return (
    <div className="bg-gray-800 w-full h-screen flex justify-center items-center font-signature">
      <div className="flex flex-col justify-center items-center bg-gray-700 text-slate-300 p-6 sm:p-8 rounded-lg max-w-xs md:max-w-md lg:max-w-lg ">
        <div className="text-emerald-300 mb-4 ">
          <p>Advice # 117</p>
        </div>
        <div>
          <p className="text-xl text-center sm:text-base md:text-2xl">
            This is advice. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. expedita quia dolorem neque!
          </p>
        </div>
        <div className="pt-4">
          <img src={mobileDivider} alt="pattern-divider-mobile" />
          <img
            src={desktopDivider}
            className="hidden"
            alt="pattern-divider-desktop"
          />
        </div>

        <div className="pt-4">
          <button>
            <img src={buttonIcon} alt="icon-dice" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advice;
