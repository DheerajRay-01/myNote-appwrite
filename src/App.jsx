import { useEffect, useState } from 'react'
import './App.css'
import {Navbar , Footer} from './components/Allcomponents'
import { Outlet } from 'react-router-dom'
import authService from './Appwrite/auth'
import { useDispatch } from 'react-redux'
import { signIn ,logOut} from './store/authSlice'
import toastr from 'toastr'
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

  return loding ? null : (
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
