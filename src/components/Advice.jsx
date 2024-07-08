import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import mobileDivider from "../assets/pattern-divider-mobile.svg";
import desktopDivider from "../assets/pattern-divider-desktop.svg";
import buttonIcon from "../assets/icon-dice.svg";

const Advice = () => {
  // const [adviceId, setAdviceId] = useState(null);
  // const [advice, setAdvice] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log("Base URl", BASE_URL);
  const fetchAdvice = async () => {
    const response = await axios.get(BASE_URL);
    return response.data.slip;
  };
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["advice"],
    queryFn: fetchAdvice,
  });

  const changeAdvice = () => {
    refetch();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // simple fetch method

  // useEffect(() => {
  //   fetch("https://api.adviceslip.com/advice")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAdviceId(data.slip.id);
  //       setAdvice(data.slip.advice);
  //     })
  //     .catch((error) => console.error("Error in fetching advice : ", error));
  // }, []);

  // //  simple fetch method

  // const changeAdvice = () => {
  //   fetch("https://api.adviceslip.com/advice")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAdviceId(data.slip.id);
  //       setAdvice(data.slip.advice);
  //     })
  //     .catch((error) => console.error("Error fetching advice:", error)); // Handle any errors
  // };

  // //   fetch method with async and await

  //  useEffect(() => {
  //   const fetchAdvice = async () => {
  //     try {
  //       const response = await fetch("https://api.adviceslip.com/advice");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setAdviceId(data.slip.id);
  //       setAdvice(data.slip.advice);
  //     } catch (error) {
  //       console.error("Error in fetching advice:", error);
  //     }
  //   };

  //   fetchAdvice();
  // }, []);

  // const changeAdvice = async () => {
  //   try {
  //     const response = await fetch("https://api.adviceslip.com/advice");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setAdviceId(data.slip.id);
  //     setAdvice(data.slip.advice);
  //   } catch (error) {
  //     console.error("Error fetching advice:", error);
  //   }
  // };

  // //axios method with async and await

  // useEffect(() => {
  //   const fetchAdvice = async () => {
  //     try {
  //       const response = await axios.get("https://api.adviceslip.com/advice");
  //       if (!response.data) {
  //         throw new Error("No data received");
  //       }
  //       setAdviceId(response.data.slip.id);
  //       setAdvice(response.data.slip.advice);
  //     } catch (error) {
  //       console.error("Error in fetching advice:", error);
  //     }
  //   };

  //   fetchAdvice();
  // }, []);

  // const changeAdvice = async () => {
  //   try {
  //     const response = await axios.get("https://api.adviceslip.com/advice");
  //     if (!response.data) {
  //       throw new Error("No data received");
  //     }
  //     setAdviceId(response.data.slip.id);
  //     setAdvice(response.data.slip.advice);
  //   } catch (error) {
  //     console.error("Error fetching advice:", error);
  //   }
  // };

  return (
    <div className="bg-dark-blue w-full h-screen flex justify-center items-center font-signature">
      <div className="relative flex flex-col justify-center items-center gap-4 bg-dark-grayish-blue text-light-cyan p-6 sm:p-8 rounded-lg max-w-xs md:max-w-lg lg:max-w-xl">
        <div>
          <p className="text-neon-green mb-2 text-xs font-semibold tracking-[0.2rem]">
            ADVICE # <span id="advice-id">{data.id}</span>
          </p>
        </div>
        <div>
          <p className="text-xl text-center sm:text-base md:text-3xl mb-4">
            {data.advice}
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
          <button
            onClick={changeAdvice}
            className="bg-neon-green w-14 h-14 rounded-full flex justify-center items-center -mb-7 shadow-lg hover:shadow-2xl transition-shadow duration-200"
          >
            <img src={buttonIcon} alt="icon-dice" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advice;
