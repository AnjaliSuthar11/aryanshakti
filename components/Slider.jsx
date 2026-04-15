// import React from 'react'

// const Slider = () => {
//   return (
//    <div className="relative flex h-[650px] items-end bg-[url('/service3.jpg')] text-white  bg-cover bg-center  ">

// <div className="absolute inset-0 bg-black/40"></div>

//       <div className="flex gap-5 flex-col z-0 px-20 py-20">

//         <h2 className='flex text-6xl  w-[800px]'>Effective Solution for Everyday Health</h2>

//         <div className='flex gap-5'>
//           <button className='bg-[#088498] px-6 p-2 rounded-2xl font-bold'>Shop Now</button>
//           <button className='px-10 rounded-2xl font-bold border-1 border-white p-2'>Explore our Collection</button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Slider




"use client";

import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/service3.jpg",
    title: "Effective Solution for Everyday Health",
  },
  {
    id: 2,
    image: "/slider1.png",
    title: "Quality Medicines You Can Trust",
  },
  {
    id: 3,
    image: "/service3.jpg",
    title: "Your Health, Our Priority",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[650px] w-full overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 "></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-5 px-20 py-20 h-full justify-end text-white">
            <h2 className="text-5xl md:text-6xl max-w-[800px] font-semibold">
              {slide.title}
            </h2>

            <div className="flex gap-5">
              <button className="bg-[#088498] px-6 py-2 rounded-2xl font-bold">
                Shop Now
              </button>
              <button className="px-10 py-2 rounded-2xl font-bold border border-white">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots indicator (optional but nice ✨) */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Slider;