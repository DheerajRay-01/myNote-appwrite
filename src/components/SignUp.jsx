import React, { useRef, useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { signIn } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import authService from "../Appwrite/auth";
import toastr from "toastr";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit,watch } = useForm();
  const [Error , setError] = useState("")

  const submit = async (data) => {

    setError("")
    if (data) {
      try {
        const user = await authService.createAccount(data);
        if (user) {
          const userData =await authService.getCurrentUser();
          if (userData) {
            console.log("get current user ", userData);
            dispatch(signIn(userData));
            toastr.success(`${userData.name} Your account has been created successfully!`, "Sign-In Successful");  
            navigate("/");
          }
        }
      } catch (error) {
        console.log("error : signIn :", error);
        setError(error.message)
      }
    }
  };

  return (
    <div className="w-full h-full bg-slate-100 p-8 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-8">Sign Up</h2>
        <p>
          If you already have account , Go to{" "}
          <b>
            <Link to={"/login"}> Login</Link>{" "}
          </b>
        </p>
        <br />

        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Enter Name:
            </h3>
            <Input
              className={
                "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
              inputLabel={"Enter Your Name:"}
              place={"Enter your name...."}
              {...register("name", { required: true })}
            />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Enter Email:
            </h3>
            <Input
              className={
                "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
              inputLabel={"Enter Your Email:"}
              inputType={"email"}
              place={"Enter your Email...."}
              {...register("email", { required: true })}
            />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Enter Password:
            </h3>
            <Input
              className={
                "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
              inputLabel={"Enter Password:"}
              inputType={"password"}
              place={"Enter your Password"}
              {...register("password", { required: true })}
              
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
        {Error && <p className="text-red-500">{Error}</p>}
      </div>
    </div>
  );
}

export default SignUp;
