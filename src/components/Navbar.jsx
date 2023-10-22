import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
  const cart = useSelector((state) => state.cart);

  function clickHandler(){
    setIsLoggedIn(false) ;
    toast.success('Logged Out');
    
}

  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" alt="this is a logo" />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/mens">
            <p>Men</p>
          </NavLink>
          <NavLink to="/womens">
            <p>Women</p>
          </NavLink>
          <NavLink to="/jewellery">
            <p>Jewellery</p>
          </NavLink>
          <NavLink to="/electronics">
            <p>Electronics</p>
          </NavLink>
          

           



          <div className='flex gap-x-4 items-center'>
           
           {  !isLoggedIn &&
               <button className='bg-richblack-800 text-richblack-100 text-[17px] py-[8px] px-[12px] rounded-[8px]
            border border-richblack-700'>
               <NavLink to='/login'>Log In</NavLink>
               </button>
           }
          
           
           {  !isLoggedIn &&
               <button className='bg-richblack-800 text-richblack-100 py-[8px] text-[17px] px-[12px] rounded-[8px]
            border border-richblack-700 '>
               <NavLink to='/signup'>Sign up</NavLink>
               </button>
           }

           { isLoggedIn &&
               <button >
               <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
               </button>
           }
           
           
           { isLoggedIn &&
               <button onClick={clickHandler} className='ml-2 bg-richblack-800 text-[17px] text-richblack-100 py-[8px] px-[12px] rounded-[8px]
            border border-richblack-700'>
               <NavLink to='/login'>Log Out</NavLink>
               </button>
           }
          
           
          
           
       </div>





        </div>
      </nav>

      
    </div> 
  );
};

export default Navbar;
