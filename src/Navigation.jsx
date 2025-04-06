import React from 'react'

function Navigation() {
  return (
    <nav className='flex justify-around items-center h-24 bg-black text-white font-archivo tracking-tight'>
        <div className='flex gap-2 items-center'>
            <p className='capitalize text-[24px] border-r-2 border-white px-2'>abstract</p>
            <a href='#' className='capitalize text-[24px] underline p-1 outline-0'>help centre</a>
        </div>

        <div className='flex gap-4 items-center justify-center'>
            <input type='text' placeholder='search' className='bg-white hidden lg:block text-[22px] capitalize px-5 py-2 w-[250px] text-slate-600 rounded-[10px]'/>
            <button className=' hidden lg:block text-[24px] border-solid border-2 border-white rounded-[10px] px-6 py-2 bg-gray-900'>submit a request</button>
            <button className='text-[24px] hidden lg:block bg-blue-600 px-10 py-2 rounded-[10px] capitalize hover:bg-white hover:text-black'>sign in</button>
        </div>

        <div className='block lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-400  lg:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

        </div>
    </nav>
  )
}

export default Navigation