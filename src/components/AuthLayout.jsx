import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({children , authentication = true}) {
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.status)
    const [loader, setloader] = useState(true)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            
            navigate("/login")
        }
        else if(authentication && authStatus !== authentication){
            navigate("/")
        }
        setloader(false)

    },[authStatus , authentication , navigate])
    return loader ? <h1>Loading....</h1> : <>{children}</>
}

