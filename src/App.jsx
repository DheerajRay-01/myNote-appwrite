import { useEffect, useState } from 'react'
import './App.css'
import {Navbar , Footer} from './components/Allcomponents'
import { Outlet } from 'react-router-dom'
import authService from './Appwrite/auth'
import { useDispatch } from 'react-redux'
import { signIn ,logOut} from './store/authSlice'
import toastr from 'toastr'
import { Bars} from 'react-loader-spinner'
import { GiNotebook } from "react-icons/gi";

function App() {
const dispatch = useDispatch()
const [loding , setLoding] = useState(true)

useEffect(()=>{
    authService.getCurrentUser().then((data)=>{
      if(data){
        dispatch(signIn(data))
      }
      else{
        dispatch(logOut())
      }
    }).finally(()=>setLoding(false))

},[])


toastr.options = {
  positionClass: 'toast-bottom-left', // Other options: toast-top-center, toast-bottom-left, etc.
  extendedTimeOut: 2000,               // Additional time on hover
  closeButton: true,
  progressBar: true,
};

  return loding ?(
 <div className="load w-full h-[100vh] flex items-center justify-center flex-col gap-5">
  <h1 className="md:text-5xl text-3xl font-extrabold py-3 text-gray-800 flex gap-3 items-center"><GiNotebook/> MyNotes</h1><h1></h1>
     <Bars
  height="100"
  width="100"
  color="#1f2937"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
 </div>
  ) : (
    <div className='bg-[#CBDCEB] min-h-[100vh]'>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  ) 
}

export default App
