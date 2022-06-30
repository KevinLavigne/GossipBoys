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
      <div className="login-wrapper rounded-lg shadow-2xl">
        <h1 className="hi pt-10 pb-10 pl-10 pr-10 ml-5 mr-5">Hi, Bitchers</h1>
        <form className="login-wrapper " onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            type="text"
            className="w-50 h-10 p-2 m-3 bg-white border-2 justify-evenly"
            placeholder="Your Email"
          />
          <p className="text-red-700 font-bold">{errors.email?.message}</p>
          <input
            {...register("password")}
            type="password"
            className="w-50 h-10 p-2 m-3 bg-white border-2  justify-evenly"
            placeholder="Your Password"
          />
          <p className="text-red-700 font-bold">{errors.password?.message}</p>
          <button
            type="submit"
            formMethod="PUT"
            className="loginbtn rounded-full mb-10 mt-10"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
