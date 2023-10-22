import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = ({setIsLoggedIn}) => {

    const[showPw,setShowPw]=useState(false);
    const[formData,setFD]=useState({
        email:'',password:''
    })
    const navigate =useNavigate();

   function changeHandler(e){
    setFD(prev=>{
        return{
            ...prev,
            [e.target.name]:e.target.value
        }
    })
   }

    function submitHandler(e){
        e.preventDefault();
        navigate('/');
        toast.success('Logged in');
        setIsLoggedIn(true);
        console.log(formData);

    }

  return (
    <div>
       <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 '>
       <label className='w-full'>
            <p className='text-[1rem] text-black mb-1 leading-[1.375rem] '> Email Address
             <sup className=' text-red-700 text-[15px]'>*</sup></p>
            <input required
                type='text'
                placeholder='Enter Email Address'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                className=' bg-slate-100 border border-slate-600 rounded-[0.5rem] text-black w-full p-[12px] '
            />
        </label>
        <label className='w-full relative'>
            <p className='text-[1rem] text-richblack-5 mb-1 leading-[1.375rem] '>Password
             <sup className=' text-red-700 text-[15px]'>*</sup></p>
            <input required
                type= {showPw?('text'):('password')}
                placeholder='Enter Password'
                name='password'
                onChange={changeHandler}
                value={formData.password}
                className=' bg-slate-100 border border-slate-600 rounded-[0.5rem] text-black w-full p-[12px] '
            />
            <span onClick={()=> setShowPw(prev=>!prev)} 
            className='absolute right-3 top-[38px]'>{
            showPw?<AiOutlineEyeInvisible fontSize={24} fill='black'/>:<AiOutlineEye fontSize={24} fill='black'/>
            }
            </span>
        </label>
            <Link to='#'><p className='text-xs mt-[-12px] text-slate-500 max-w-max ml-auto'> Forgot Password</p></Link>
            <button className=' bg-yellow-300 rounded-[8px] mt-4 font-medium text-richblack-900 px-[12px] py-[8px]'>

                Login In
            </button>
        
       </form>
    </div>
  )
}
