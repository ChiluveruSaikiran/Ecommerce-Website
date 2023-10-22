import { Template } from "../components/Template";
//import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
  
    <Template
      title="Welcome Back"
      desc1="Great Deal, Unbeatable Value"
      desc2="Buy And Sell Platform For All "
      //image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
