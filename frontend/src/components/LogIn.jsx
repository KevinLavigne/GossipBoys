/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */

import "../App.css";
// import { HashLink as NavLink } from "react-router-hash-link";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .email()
    .required(" you wont be able to gossip without providing your email"),
  password: yup
    .string()
    .min(8)
    .required("We need your password to start gossiping !"),
});

function LogIn() {
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(data);
  };
  return (
    <div className="right">
      <div className="login-wrapper rounded-lg shadow-2xl w-1/3">
        <form className="login-wrapper" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="hi pt-5 pb-5 ps-5 pe-5 ms-5 me-5">Hi, Bitchers</h1>
          <input
            {...register("email", { required: true })}
            type="text"
            className="w-50 h-10 p-2 m-3 bg-white border-2
          justify-evenly"
            placeholder="Your Email"
          />
          <p>{errors.email?.message}</p>
          <input
            {...register("password", { required: true })}
            type="password"
            className="w-50 h-10 p-2 m-3 bg-white border-2  justify-evenly"
            placeholder="Your Password"
          />
          <p>{errors.password?.message}</p>
          <button type="submit" className="loginbtn rounded-full mb-5 mt-10">
            <p className="text-login-btn">Bitch In</p>
          </button>
          <p className="mb-10 mt-10 pl-3 pr-3 text-white">
            You dont have an account ? <br /> Get close from your company{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
