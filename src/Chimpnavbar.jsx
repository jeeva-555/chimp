import React from 'react'
import logo from "./mailchimplogo.jpg"
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

function Chimpnavbar() {

    const[searchTgl,setSearchTgl] = useState(false);

    const disp = searchTgl?"block":"hidden";

    function searchBox(){
        setSearchTgl(prev => !prev);
    }

    const navcon = ["products","resources","inspiration","pricing"]
  return (
    <div className='container m-auto'>
        <nav className='flex justify-between p-5  bg-[#FFE038] bold mb-5  '>
            <div className='gap-7 items-center capitalize hidden lg:flex font-bold font-l'>
                {navcon.map((val,ind)=>{
                    return(
                        <a href="#" key={ind}>{val}</a>
                    )
                })}
            </div>

            <div>
                <img src={logo} className='z-50'/>
            </div>

            <div className='lg:flex gap-5 items-center hidden font-bold relative'>
                <IoSearch  size={30} onClick={searchBox} className='hover:text-red-500'/>
                <input type="text" placeholder='Search' className ={` bg-white py-2 px-4 rounded-full ${disp} `}/>
                <button className='px-6 cursor-pointer capitalize py-2 border-solid border-1 border-black-200 hover:bg-black hover:text-[#FFE038] '>log in</button>
                <button className='px-4 capitalize py-2 bg-[#007C88] text-white hover:opacity-75 cursor-pointer'>sign up free</button>
            </div>
            <GiHamburgerMenu size={20} className='lg:hidden block my-auto hover:text-[#FFE038] hover:bg-black p-2 w-9 h-9 rounded-full'/>
        </nav>

    </div>
  )
}

export default Chimpnavbar