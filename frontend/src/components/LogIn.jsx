import "../App.css";
import { HashLink as NavLink } from "react-router-hash-link";

function LogIn() {
  return (
    <div className="right">
      <div className="login-wrapper">
        <h1>Hi, Apsiders</h1>
        <input
          type="text"
          className="w-full h-10 p-2 bg-white border-2 border-blue-500 justify-evenly"
          placeholder="Your Email"
        />
        <input
          type="password"
          className="w-full h-10 p-2 bg-white border-2 border-blue-500 justify-evenly"
          placeholder="Your Password"
        />
        <button className="w-full h-10 p-2 bg-blue-500 border-2 border-blue-500 text-white justify-evenly">
          <NavLink to="/Page1">Log In</NavLink>
        </button>
        <p>
          You dont have an account ? Register by clicking here{" "}
          <NavLink to="/SignUp">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
