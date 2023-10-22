import React from 'react'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';

 const Footer = () => {

  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Subscribed Successfully");
    

};




  return (<div className=' mx-auto w-9/12 flex  flex-row     text-slate-100 items-start gap-40 min-h-[250px]'>
  <div className='max-w-[300px] mt-5'>
    <h2 className=' text-xl text-white py-2'>ECOMOZY</h2>
    <p className=' text-xs'>we're passionate about bringing you the best products and an exceptional shopping experience. We're more than just an online store; we're your go-to destination for quality, style, and innovation.</p>
   
    <form onSubmit={handleSubmit} className="relative bg-white w-[280px] mt-6 mb-4 rounded-md">
          <input
            placeholder="Your Email Address"
            className="pr-16 text-slate-900 w-[280px] rounded-md font-mullish border-gray-300 outline-slate-500 placeholder:text-sm py-2 px-4 border  transition-all duration-200"
          />
          <button onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
            className="h-[90%] pr-2 pl-2 bg-slate-200 absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 font-mullish text-sm font-bold text-slate-950 flex rounded-sm items-center hover:text-slate-500 transition-all duration-200"
          >
            Subscribe
          </button>
        </form>
  </div>
  <div className='min-w-[300px] mr-[18px]'> 
  <div>
                <p class="font-mullish uppercase text-xl ml-14 text-white mb-1 mt-7">
                  FIND US ONLINE
                </p>
                <ul class="flex space-x-4 items-center mt-4 ml-14">
                  <li class="cursor-pointer hover:scale-110 transition-[1s] hover:shadow-[0_20px_60px_white]">
                    <a href='https://www.facebook.com' target='_blank'>
                      <img
                        src="../images/facebook-icon.svg"
                        title='Facebook'
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li class="cursor-pointer hover:scale-110 transition-[1s] hover:shadow-[0_20px_60px_white]">
                    <a href='https://www.twitter.com' target='_blank'>
                      <img
                        src="../images/twitter-icon.svg"
                        title='Twitter'
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li class="cursor-pointer hover:scale-110 transition-[1s] hover:shadow-[0_20px_60px_white]">
                    <a href='https://www.instagram.com' target='_blank'>
                      <img
                        src="../images/instagram-icon.svg"
                        title='Instagram'
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    </a>
                  </li>
                  
                  <li class="cursor-pointer hover:scale-110 transition-[1s] hover:shadow-[0_20px_60px_white]">
                    <a href='https://www.linkedin.com' target='_blank'>
                      <img
                        src="../images/linkedin-icon.svg"
                        title='Linkedin'
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    </a>
                  </li>
                </ul>
        </div>
        <div className=''>
          <div>
            <p class="font-mullish uppercase ml-[75px] text-xl mt-9 text-gray2 mb-4">
              COMPANY
            </p>
            <ul class="space-y-2 text-sm flex flex-row gap-5  justify-between">
            <li className='mt-2 '>
                <a
                  href="/"
                  className="font-mullish mt-4 
                  font-medium  text-slate-200 hover:text-white hover:text-lg transition-all duration-200"
                  >Home</a>
              </li>
              <li>
              
                <NavLink to="/about" 
                  className="font-mullish mb-10
                  font-medium  text-slate-200 hover:text-white hover:text-lg transition-all duration-200"
                  ><button className=' ' onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                  About</button></NavLink>
              </li>
              <li>
                <NavLink to="/contactus"
                  className="font-mullish relative 
                  font-medium  text-slate-200 hover:text-white hover:text-lg transition-all duration-200">
                  <button className=' ' onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                  Contact Us</button></NavLink>
                  {/* <span
                    class="text-white  font-mullish bg-slate-500 rounded-md text-[10px] font-bold p-1"
                    >  We're hiring!</span> */}
                
              </li>
            </ul>
          </div>
     </div>
     </div>
    
     <div className='min-w-[300px]'>
     <p class="font-mullish uppercase text-xl  text-white mt-6">
                  REGD. ADDRESS
                </p>
                <p class="font-mullish text-xs mt-2 ">
                ECOMOZY Software Private Limited, <br />
                  <br />Hyderabad, 500042,
                  <br />Telanagana, India <br />Ph Number: 89899879769
                </p>
                <div class="font-mullish mt-3">
                  <p class="text-sm">© ECOMOZY 2022</p>
                  <p class="text-sm">All Rights Reserved</p>
                </div>
    </div>
                
  


<br/><br/>
  </div>
  
  )
}
export default Footer;