import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {  useNavigate } from 'react-router-dom';

export const SignupForm = ({setIsLoggedIn}) => {
    const[showPw,setShowPw]=useState(false);
    const[showConPw,setShowConPw]=useState(false);
    const[formData,setFD]=useState({
        firstname:'',lastname:"",email:'',createPassword:'',confirmPassword:''
    })

    const navigate =useNavigate();
    
    const[accountType,setAT]=useState('student');
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
        if(formData.createPassword!==formData.confirmPassword){
            toast.error('Password Doesnt Match')
        }
        else{
            navigate('/');
            toast.success('Account Created');
            setIsLoggedIn(true);
        }

    }

  return (
    <div>
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 '> 
    <div className='flex bg-slate-950 text-white p-1 gap-x-1 my-4 rounded-full max-w-max'>
        <button onClick={()=>setAT('student')} 
        className={`${accountType === 'student' ? 'bg-slate-700 text-white' :
        'bg-transparent text-slate-100 '
        } py-2 px-5 rounded-full transition-all duration-200`}
        >Buyer</button>

        <button onClick={()=>setAT('instructor')}
         className={`${accountType === 'instructor' ? 'bg-slate-700 text-white' :
        ' text-slate-100  bg-transparent'
        } py-2 px-5 rounded-full transition-all duration-200`}>
        Seller</button>
    </div>
         <div className='w-full flex justify-between gap-x-6'>
         <label className='w-full'>
            <p className='text-[1rem] text-black mb-1 leading-[1.375rem] '>First Name 
            <sup className='text-red-600 text-[16px]'>*</sup></p>
            <input required
                type='text'
                placeholder='Enter First Name'
                name='firstname'
                value={formData.firstname}
                onChange={changeHandler}
                className='bg-slate-100 border border-slate-600 rounded-[0.5rem] text-black w-full p-[12px] '
            />
        </label>
        <label className='w-full'>
            <p className='text-[1rem] text-black mb-1 leading-[1.375rem] '>Last Name
             <sup className='text-red-600 text-[16px]'>*</sup></p>
            <input required
                type='text'
                placeholder='Enter Last Name'
                name='lastname'
                value={formData.lastname}
                onChange={changeHandler}
                className='bg-slate-100 border border-slate-600  rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            />
        </label>
         </div>

         <label className='w-full'>
            <p className='text-[1rem] text-black mb-1 leading-[1.375rem] '>Email Address
             <sup className='text-red-600 text-[16px]'>*</sup></p>
            <input required
                type='text'
                placeholder='Enter Email Address'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                className='bg-slate-100 border border-slate-600 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            />
        </label>
       <div className='w-full flex justify-between gap-x-6 rea'>
       <label className='w-full relative'>
            <p className='text-[1rem] text-black mb-1 leading-[1.375rem] '>Create Password
             <sup className='text-red-600 text-[16px]'>*</sup></p>
            <input required
                type= {showPw?('text'):('password')}
                placeholder='Create Password'
                name='createPassword'
                onChange={changeHandler}
                value={formData.createPassword}
                className='bg-slate-100 border border-slate-600  rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            />
            <span onClick={()=> setShowPw(prev=>!prev)} className='absolute right-3 top-[38px]'>{
            showPw?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:<AiOutlineEye fontSize={24} fill='#AFB2BF'/>
            }
            </span>
        </label>
        <label className='w-full relative'>
            <p className='text-[1rem] text-black mb-1 leading-[1.375rem] '> Confirm Password 
            <sup className='text-red-600 text-[16px]'>*</sup></p>
            <input required
                type= {showConPw?('text'):('password')}
                placeholder='Confirm Password'
                name='confirmPassword'
                onChange={changeHandler}
                value={formData.confirmPassword}
                className='bg-slate-100 border border-slate-600  rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            />
            <span onClick={()=> setShowConPw(prev=>!prev)} className='absolute right-3 top-[38px]'>{
            showConPw?<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>:<AiOutlineEye fontSize={24} fill='#AFB2BF'/>
            }
            </span>
        </label>
       </div>

        <button className='bg-yellow-300 rounded-[8px] mt-4 font-medium text-richblack-900 px-[12px] py-[8px]' >

               Create Account
        </button>
    </form>
    </div>
  )

}
