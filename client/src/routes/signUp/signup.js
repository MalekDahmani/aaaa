import React,{useState} from 'react'

import { useSignup } from '../../hooks/useSignup'
import './signup.css'

const Signup = () => {
  const [firstName,setfirstName]=useState('')
  const [lastName,setlastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [age,setAge]=useState('')
  const {signup,isPending,error}=useSignup()
  
  const handleSubmit=async(e)=>{
     e.preventDefault()
     await signup(firstName,lastName,email,password,age)
  }

  return (
    <div className='login-form'>
       <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
          <span>FirstName</span>
          <input 
          type="text"
          onChange={(e)=>setfirstName(e.target.value)}
          value={firstName}
          />
        </label>
        <label>
          <span>LastName</span>
          <input 
          type="text"
          onChange={(e)=>setlastName(e.target.value)}
          value={lastName}
          />
        </label>
        <label>
          <span>Email</span>
          <input 
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input 
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          />
        </label>
        <label>
          <span>Age</span>
          <input 
          type="text"
          onChange={(e)=>setAge(e.target.value)}
          value={age}
          />
        </label>
        {isPending && <button className='signup' >Loading..</button>}
        {!isPending && <button className='signup' >signup</button>}
        {error && <div className='error'>{error}</div>}
       </form>
    </div>
  )
}

export default Signup