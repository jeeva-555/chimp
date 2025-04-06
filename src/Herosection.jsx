import React from 'react'
import chimpimage from "./mailchimpimage.jpg"

function Herosection() {
  return (
    <div className='flex lg:h-[95vh] w-full flex-col lg:flex-row items-center justify-center gap-15 bg-[#FFE038] p-10 '>
        <div className='flex flex-col gap-8 text-center lg:text-left capitalize'>
            <h1 className='lg:text-6xl   text-5xl font-noto '>marketing smarts for<br/> big ideas</h1>
            <p className='text-xl font-archivo'>mailchimps helps small buisness to do big <br /> things with right tools
                and guidance every <br /> step of the way </p>
            
            <button className='lg:w-35  w-25 bg-[#007C88] lg:py-5  py-3 text-white text-bold m-auto lg:m-0 outline-0 font-bold
            capitalize hover:text-[#007C88] hover:bg-white'>pick a plan</button>
        </div>
        <div className='max-w-[500px]'>
            <img src={chimpimage} />
        </div>
    </div>
  )
}

export default Herosection