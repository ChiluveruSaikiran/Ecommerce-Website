import { Template } from "../components/Template";
//import signupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn }) {
  return (
    <div className="mt-6">
    <Template
      title={`Create Your Ecomzy Account.`}
      desc1="Great Deal, Unbeatable Value"
      desc2="Buy And Sell Platform For All "
      //image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  );
}

export default Signup;
