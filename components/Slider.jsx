import React from 'react'

const Slider = () => {
  return (
   <div className="relative flex h-[650px] items-end bg-[url('/service3.jpg')] text-white  bg-cover bg-center  ">

<div className="absolute inset-0 bg-black/40"></div>

      <div className="flex gap-5 flex-col z-0 px-20 py-20">

        <h2 className='flex text-6xl  w-[800px]'>Effective Solution for Everyday Health</h2>

        <div className='flex gap-5'>
          <button className='bg-[#088498] px-6 p-2 rounded-2xl font-bold'>Shop Now</button>
          <button className='px-10 rounded-2xl font-bold border-1 border-white p-2'>Explore our Collection</button>
        </div>

      </div>
    </div>
  )
}

export default Slider




