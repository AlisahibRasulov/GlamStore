// import React from 'react'
import { useContext, useEffect, useState } from "react";
const Offer = () => {
  const calculateTimeLeft = ()=>{
    const difference = +new Date("2024-08-28T12:15:00") - +new Date();
    let timeLeft = {};

    if(difference > 0){
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).
        padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).
        padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 24)).
        padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).
        padStart(2, "0")
      }
    } else{
      timeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(()=>{
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  })
  return (
    <div>Offer</div>
  )
}

export default Offer