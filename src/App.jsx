import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
import { useState,useEffect } from "react";
import Jewellery  from "./pages/Jewellery";
import Electronics  from "./pages/Electronics";
import Footer from "./components/Footer";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PrivateRoute from "./components/PrivateRoute"
import About  from "./pages/About";
import ContactUs from "./pages/ContactUs";


const App = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div>
      <div className="bg-slate-900">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>
      <Routes>
        <Route path="/" element={<Home posts={posts}  loading={loading}/>} /> 
        <Route path="/mens" element={<Mens posts={posts}  loading={loading}/>} />
        <Route path="/womens" element={<Womens posts={posts}  loading={loading}/>} />
        <Route path="/jewellery" element={<Jewellery posts={posts}  loading={loading}/>} />
        <Route path="/electronics" element={<Electronics posts={posts}  loading={loading}/>} />
        <Route path="/cart" element={
          <PrivateRoute  isLoggedIn={isLoggedIn}>
            <Cart/>
          </PrivateRoute>
        }/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
      <div className="bg-slate-900">
        <Footer/>
      </div>
    </div>
  );
};

export default App;
