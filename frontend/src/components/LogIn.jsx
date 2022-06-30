import "../App.css";
import { HashLink as NavLink } from "react-router-hash-link";

function LogIn() {
  return (
    <div className="right">
      <div className="login-wrapper rounded-lg shadow-2xl">
        <h1 className="hi pt-5 pb-5 ps-5 pe-5 ms-5 me-5">Hi, Bitchers</h1>
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
        <button className="loginbtn rounded-full mb-5 mt-10">
          <NavLink to="/Page1">Bitch In</NavLink>
        </button>
        <p className="mb-10 mt-10 pl-3 pr-3 text-white">
          You dont have an account ? Get close from your company{" "}
          <NavLink className="signup" to="/SignUp">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
