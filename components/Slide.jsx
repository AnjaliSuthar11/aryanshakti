"use client"
import React from "react";
import { useState, useEffect } from "react";
const Slide = () => {
  const slides = [
  {
    id: 1,
    image: "/Slider-01.jpg",
    title: "Effective Solution for Everyday Health",
  },
  {
    id: 2,
    image: "/Men-Power-Slider-02.jpg",
    title: "Quality Medicines You Can Trust",
  },
  {
    id: 3,
    image: "/service3.jpg",
    title: "Your Health, Our Priority",
  },
];

const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' sm:w-full md:w-[1024px] lg:w-[1300px] md:bg-amber-300 sm:bg-black lg:bg-amber-800 xl:bg-blue-500 xl:w-full  ' >
      {/* <img
        src={slides[current].image}
        alt="slider"
        className=""
      /> */}
      {/* <img src="/Men-Power-Slider-02.jpg"/> */}
      <img src="/banner/Natural-detox-juice-(500ml)-Banner-01.jpg"/>
    </div>
  );
};

export default Slide;