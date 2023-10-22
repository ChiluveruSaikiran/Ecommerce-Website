
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

 const ContactUs = () => {

    const [formdata,setFD]=useState({ firstname:'',lastname:'',email:'',text:'',num:''});

   function changeHandler(e){
    const{name,value,checked,type}=e.target;
    setFD(prev =>{
        return{
            ...prev,
            [name]:type==='checkbox'? checked:value
        }
    })
   }

   const navigate = useNavigate();

   function submitHandler(e){
    e.preventDefault();
    console.log(formdata);
    toast.success("Message Sent Successfully")
    navigate("/");
    

   }

  return (
    <div className='max-w-[600px] flex flex-col justify-center items-center mx-auto min-h-[86vh]'>
    <h1 className='text-[2rem] text-slate-950 mb-7 mr-4'>Contact Us</h1>
    <form  onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 '>
    
    <div className='w-full flex justify-between gap-x-6'>
         <label className='w-full'>
            <p className='text-[1rem] text-black mb-1 leading-[1.375rem] '>First Name 
            <sup className='text-red-600 text-[16px]'>*</sup></p>
            <input required
                type='text'
                placeholder='Enter First Name'
                name='firstname'
                value={formdata.firstname}
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
                value={formdata.lastname}
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
                value={formdata.email}
                onChange={changeHandler}
                className='bg-slate-100 border border-slate-600 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            />
        </label>

        <label className='w-full'>
            <p className='text-[1rem] text-black mb-1 leading-[1.375rem] '>Phone Number
             <sup className='text-red-600 text-[16px]'>*</sup></p>
            <input required
                type='tel'
                placeholder='Enter Your Phone Number'
                name='num'
                value={formdata.num}
                onChange={changeHandler}
                className='bg-slate-100 border border-slate-600 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            />
        </label>

        


        <label className='w-full'>
            <p className='text-[1rem] text-black mb-1 leading-[1.375rem] '>Message
             <sup className='text-red-600 text-[16px]'>*</sup></p>
            <textarea required
                type='text'
                placeholder='Enter Your Concern'
                name='text'
                value={formdata.text}
                onChange={changeHandler}
                className=' bg-slate-100 border h-36 border-slate-600 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
            />
        </label>

        <button className='bg-yellow-300 rounded-[8px] mt-4 font-medium text-richblack-900 px-[12px] py-[8px]' >

               Send Message
        </button>
        
    </form>
    </div>
  )
}
    
export default ContactUs;