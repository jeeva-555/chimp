import React from 'react'
import icon1 from "./icon-1.png"
import icon2 from "./icon-02.png"
import icon3 from "./icon-03.png"
import icon4 from "./icon-04.png"
import icon5 from "./icon-05.png"
import icon6 from "./icon-06.png"

function Cards() {


    const contents = [
        {heading:"Using Abstract",
        description:"Abstract lets you manage, version, and document your designs in one place.",
        img:icon1,
        link:"learn more"
    },
    {heading:"Manage your account",
        description:"Configure your account settings, such as your email, profile details, and password.",
        img:icon2,
        link:"learn more"
    },
    {heading:"Manage organizations, teams, and projects",
        description:"Use Abstract organizations, teams, and projects to organize your people and your work.",
        img:icon3,
        link:"learn more"
    },
    {heading:"Manage billing",
        description:"Change subscriptions and payment details.",
        img:icon4,
        link:"learn more"
    },
    {heading:"Authenticate to Abstract",
        description:"Set up and configure SSO, SCIM, and Just-in-Time provisioning",
        img:icon5,
        link:"learn more"
    },
    {heading:"Abstract support",
        description:"Get in touch with a human.",
        img:icon6,
        link:"learn more"
    },
  
  
]


  return (


    <div className='flex justify-center gap-10 lg:gap-20 flex-wrap pt-20  bg-white  '>
        {contents.map((val,ind)=>{
        return (
            <div className='flex font-archivo tracking-light' key={ind}>
                <div className='min-w-[100px] h-[300px]'>
                    <img src={val.img} className='w-[80px]'/>
                </div>
        
                <div className='flex flex-col gap-4 w-[350px]'>
                    <p className='capitalize text-3xl font-bold'>{val.heading}</p>
                    <p className='capitalize text-xl '>{val.description}</p>
                    <a href='#' className='capitalize text-xl text-blue-400 underline'>learn more</a>
                </div>
        </div>
        )
    })}

    </div>
        
    

   
  )
}

export default Cards