import React, {  useState } from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { signIn } from '../store/authSlice'
import toastr from 'toastr'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [Error , setError] = useState("")
  const { register, handleSubmit ,formState: { isSubmitting }} = useForm()


  const submit = async (data) => {
    setError("")
    console.log(data);
    if (data) {
      try {
        const user = await authService.login(data)
          if (user) {
            const userData =await authService.getCurrentUser();
              if (userData) {
                console.log("logged in user ", userData);
                dispatch(signIn(userData));
                navigate("/");
                toastr.success(`Welcome back! ${userData.name}` , "Login Successful");
          }
        }
      } catch (error) {
        console.log("error : login :", error.message);
        const errorMsg = error.response?.data?.message || "An unexpected error occurred";
        setError(error.message)
      }
    }


  }


  return (
    <div className='w-full h-full bg-slate-100 p-8 flex justify-center items-center'>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-8">LogIn</h2>
        <p>Don't have an account ? Go to <b className='text-blue-600'><Link to={"/signin"}> SignIn</Link> </b></p><br />

        <form onSubmit={handleSubmit(submit)} >
         
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Enter Email:</h3>
            <Input
              className={"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}
              inputLabel={"Enter Your Email:"}
              inputType={"email"}
              place={"Enter your Email...."}
              {...register("email")}
            />  
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Enter Password:</h3>
            <Input
              className={"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}
              inputLabel={"Enter Password:"}
              inputType={"password"}
              place={"Enter your Password"}
              {...register("password")}
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type='submit'
              disabled={isSubmitting}
              className={`w-full p-3 ${isSubmitting ? "bg-blue-300 hover:bg-blue-300 cursor-not-allowed" : "bg-blue-600"} text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        {Error && <p className="text-red-500">{Error}</p>}
      </div>
    </div>
  )
}

export default Login
