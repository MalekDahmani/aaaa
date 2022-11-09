import { useState } from "react";
import {useAuthContext} from '../hooks/useAuthContext'
 
export const useSignup=()=>{
    const {dispatch}=useAuthContext()
    const [isPending,setIsPending]=useState(false)
    const [error,setError]=useState(null)

    const signup=async(firstName,lastName,email,password,age)=>{
       setIsPending(true)
       setError(null)
       
       const response=await fetch("/api/user/signup",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({firstName,lastName,email,password,age})
       })
       const json=await response.json()

       if(!response.ok){
         setIsPending(false)
         setError(json.error)  
       }
       if(response.ok){
        setError(null)
        // save user to Local Storage
        localStorage.setItem('user',JSON.stringify(json))

        dispatch({
            type:"LOGIN",
            payload:json
        })
        setIsPending(false)
       }
    }

    return {isPending,error,signup}
}