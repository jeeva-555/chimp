import React from 'react'

function Footer() {
  return (
    <div className='flex gap-16 p-[50px] justify-center bg-black text-white min-h-[400px]'>
        <div className='flex flex-col  gap-16 lg:flex-row'>
            <div className='flex flex-col gap-4'>
                 <p className='text-2xl font-bold capitalize'>abstract</p>
                 <ul>
                    <li className='font-bold text-md capitalize my-1'>start trial</li>
                    <li className='font-bold text-md capitalize my-1'>pricing</li>
                    <li className='font-bold text-md capitalize my-1'>download</li>
                 </ul>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-bold capitalize'>resources</p>
                <ul>
                    <li className='font-bold text-md capitalize my-1'>blog</li>
                    <li className='font-bold text-md capitalize my-1'>help center</li>
                    <li className='font-bold text-md capitalize my-1'>release notes</li>
                    <li className='font-bold text-md capitalize my-1'>status</li>
                </ul>
            </div>
        </div>

        <div className='flex flex-col  gap-16 lg:flex-row'>
            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-bold capitalize'>contacts</p>
                <ul>
                    <li  className='font-bold text-md capitalize my-1'>twitter</li>
                    <li  className='font-bold text-md capitalize my-1'>linkedin</li>
                    <li  className='font-bold text-md capitalize my-1'>facebook</li>
                    <li  className='font-bold text-md capitalize my-1'>dribble</li>
                    <li  className='font-bold text-md capitalize my-1'>podcast</li>
                </ul>

            </div>

            <div className='flex flex-col gap-4'>
                <p className='text-2xl font-bold capitalize'>company</p>
                <ul>
                    <li  className='font-bold text-md capitalize my-1'>about us</li>
                    <li  className='font-bold text-md capitalize my-1'>carrers</li>
                    <li  className='font-bold text-md capitalize my-1'>goals</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer