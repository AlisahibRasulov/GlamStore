// import React from 'react'

import { PiArrowRightBold, PiBagBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat min-h-[100vh] w-full">
      <div className="relative max-w-[777px] top-44 xs:top-60">
        <h2 className="h1 capitalize max-w-[611]">
          Elevate your wardriobe with trendy fashion from 
          <span className="bg-secondary text-white rounded-full px-2">GlamStore</span>
        </h2>
        <div className="flex gap-x-10 max-md:flex-col-reverse mt-28">
          <Link to={""} className="bg-tertiary p-2 text-white pl-5 rounded-full flexCenter gap-x-2 inline-flex w-full max-w-60">
          Latest Products
          <PiBagBold className="bg-white text-tertiary rounded-full text-4xl p-2.5"/>
          <PiArrowRightBold className="bg-white text-tertiary rounded-full text-4xl p-2.5"/>
          </Link>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta, 
            quibusdam, explicabo veniam possimus magni error sequi modi 
            ipsam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
