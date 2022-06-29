import "../App.css";
import { HashLink as NavLink } from "react-router-hash-link";

function LogIn() {
  return (
    <div className="right">
      <div className="login-wrapper rounded-lg shadow-2xl">
        <h1 className="hi pt-5 pb-5 ps-5 pe-5 ms-5 me-5">Hi, Apsiders</h1>
        <input
          type="text"
          className="w-50 h-10 p-2 m-3 bg-white border-2 justify-evenly"
          placeholder="Your Email"
        />
        <input
          type="password"
          className="w-50 h-10 p-2 m-3 bg-white border-2  justify-evenly"
          placeholder="Your Password"
        />
        <button className="loginbtn rounded-full mb-5 mt-3">
          <NavLink to="/Page1">Log In</NavLink>
        </button>
        <p className="mb-5 mt-3 ps-3 pe-3">
          You dont have an account ? Register by clicking here{" "}
          <NavLink className="signup" to="/SignUp">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
