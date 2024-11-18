import React from "react";
import { Link } from "react-router-dom";
import authService from "../Appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../store/authSlice";

function Footer() {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const logoutHandler = async ()=>{
    authService.logout().then(()=>{
      dispatch(logOut())
      toastr.info("You have been logged out. See you soon!", "Logout Successful");
      navigate("/login")
      console.log("delete account done..");
    })
 
}

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center md:text-left">
          
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">MyNotes</h2>
            <p className="text-gray-400 mt-2">Simplify your thoughts, one note at a time..</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/all-notes" className="hover:text-white">All Notes</Link></li>
              <li><Link onClick={logoutHandler} className="hover:text-white">logout</Link></li>
              <li><Link to="/policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-6 border-t border-gray-600 pt-4 text-center text-gray-400">
          &copy; 2024 MyNotes. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
