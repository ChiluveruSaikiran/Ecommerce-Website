import React from 'react'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import {FcGoogle} from 'react-icons/fc'

//import frame from '../assets/frame.png'

export const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
  return (
    <div className='w-11/12 flex justify-center items-center max-w-[1160px]  py-2 mx-auto gap-x-12 min-h-[86vh]'>
      
      <div className='w-11/12 max-w-[500px]'>
      <h1 className='text-black font-semibold text-[2rem] leading-[2.375rem]'>{title}</h1>
      <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
        <span className=' text-slate-950 '>{desc1}</span>
        <br/>
        <span className=' text-slate-900 text-sm italic'>{desc2}</span>
      </p>
      {formType==='login'?

      (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)   :

      (<SignupForm setIsLoggedIn={setIsLoggedIn}/>)}

      <div className='flex flex-row w-full items-center my-4 gap-x-2 '>
        <div className='h-[1px] bg-white w-full'></div>
        <p className='text-richblack-100 font-medium leading-[1.375rem]'>OR</p>
        <div  className='h-[1px] bg-white w-full'></div>
      </div>
      <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-black 
      border border-slate-600 px-[12px] py-[8px] gap-x-2 mt-6 mb-6'><FcGoogle/> Sign in with Google</button>
      </div>

       {/* <div className='relative w-11/12 max-w-[450px]'>
         <img src={frame} alt='frame' width={558} height={504}/> 
        <img src={image} alt='pic' width={558} height={504} className='absolute -top-4 right-4'/>
      </div>  */}


    </div>
  )
}
