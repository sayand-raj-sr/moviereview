import React, {  useState } from 'react'
import { auth } from '../store/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Homeheader from '../Components/Homeheader'
import { useNavigate } from 'react-router-dom'

function Register() {

   const[username,setUsename]=useState(" ")
   const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")
  const navigate=useNavigate()
   
  

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
       createUserWithEmailAndPassword(auth,email,password)
        alert("account creatted successfully")
        setEmail("")
        setPassword("")
        setPassword("")
        navigate('/login')
    }
    catch(err){
       console.log(err);
       
    }
  };

  return (
    <div>
      <Homeheader/>
       <div className="min-h-screen flex items-center justify-center bg-black bg-[url(https://wallpapercave.com/wp/wp1945939.jpg)] bg-cover">
      <div className="bg-gray-900 p-8 rounded-xl w-96 shadow-xl border border-gray-700">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create Account
        </h2>

        
        <div className="mb-4">
          <label className="text-gray-300 block mb-1">Full Name</label>
          <input type="text" placeholder="Enter your name" className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none"
           value={username||""} onChange={(e)=>setUsename(e.target.value)}/>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-gray-300 block mb-1">Email</label>
          <input type="email" placeholder="Enter your email" className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none"
          value={email||""} onChange={(e)=>setEmail(e.target.value)} />
        </div>


        {/*  Password */}
        <div className="mb-6">
          <label className="text-gray-300 block mb-1"> Password</label>
          <input type="password" placeholder="enter password" className="w-full p-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none"
           value={password||""} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        {/* Register Button */}
        <button className="w-full py-3 bg-red-600 rounded-lg text-white font-semibold hover:bg-red-700 transition" onClick={handleSubmit}>
          Register
        </button>

        {/* Link to Login */}
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Register
