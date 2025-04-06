import React from 'react'

function Section() {
  return (
    <div className='flex justify-center items-center flex-col h-[60vh] bg-purpley gap-4'>
        <h1 className='text-center  lg:text-[80px] md:text-[50px] text-[35px]  font-archivo tracking-tight'>How can we help?</h1>
        <input type='text' className='px-4 py-2 h-[60px] lg:w-[50vw] min-w-[40vw] bg-white  text-[22px] capitalize
        border-2 border-black border-solid hover:border-blue-600 hover:border-solid hover:border-2 transition rounded-[10px]' placeholder='search'/>
    </div>
  )
}

export default Section