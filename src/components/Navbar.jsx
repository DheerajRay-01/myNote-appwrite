import React from "react";
import { useNavigate,  NavLink } from "react-router-dom";
import {logOut} from '../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import authService from "../Appwrite/auth";
import { MdOutlineLogout } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.auth.status)

  const logoutHandler = async ()=>{
       authService.logout().then(()=>{
         dispatch(logOut())
         toastr.error("Invalid credentials. Please check your email and password.", "Login Failed");
         navigate("/login")
         console.log("delete account done..");
       })
    
  }

  return (
    <div className="">
      <div className="head flex justify-center relative">
        <h1 className="text-3xl font-extrabold py-3 text-gray-800 flex gap-3 items-center"><GiNotebook/> MyNotes</h1>
       { isLogin &&
        <button onClick={logoutHandler} className="absolute right-0 top-3 px-2 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
         <MdOutlineLogout className="text-xl font-bold"/>
        </button>
        }
      </div>

      <nav className="bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="flex space-x-6 justify-center bg-gray-800 font-bold text-xl">
          <NavLink
            to="/"
            className={({ isActive }) => `
                text-white py-2 px-4 rounded-md transition duration-200
                ${
                  isActive
                    ? "bg-red-400 text-white"
                    : "hover:bg-gray-800 bg-gray-600"
                }
              `}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-notes"
            className={({ isActive }) => `
                text-white py-2 px-4 rounded-md transition duration-200
                ${
                  isActive
                    ? "bg-red-400 text-white"
                    : "bg-gray-800 hover:bg-gray-600"
                }
              `}
          >
            Notes
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
