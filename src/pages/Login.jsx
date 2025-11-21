import React, { useState } from 'react';
import { auth } from '../store/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Homeheader from '../Components/Homeheader';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      setEmail("")
      setPassword("")
      navigate('/allmovies');
    } catch (err) {
      if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        alert('Invalid email or password. Please try again.');
        setEmail('');
        setPassword('');
      } else {
        alert('An error occurred. Please try again later.');
      }
      console.log(err);
    }
  };

  return (
    <>
      <Homeheader/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 bg-[url(https://wallpapercave.com/wp/wp1945939.jpg)] bg-cover">
    
      <div className="bg-gray-900 backdrop-blur-md p-10 rounded-2xl w-96 shadow-2xl border border-gray-700">
        
        
        <h2 className="text-4xl font-bold text-center text-white mb-6 tracking-wide">Welcome Back</h2>
        <p className="text-center text-gray-400 mb-8 text-sm"> Login to continue your movie journey </p>

       
        <div className="mb-5">
          <label className="text-gray-300 block mb-2 text-sm font-medium">Email</label>
          <input type="email" placeholder="Enter your email"className="w-full p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 outline-none transition"
            value={email||""} onChange={(e) => setEmail(e.target.value)}/>
        </div>

       
        <div className="mb-6">
          <label className="text-gray-300 block mb-2 text-sm font-medium">Password</label>
          <input type="password" placeholder="Enter your password" className="w-full p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 outline-none transition"
            value={password||""} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        
        <button onClick={handleSubmit} className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold tracking-wide transition duration-300 shadow-md hover:shadow-red-700/40" >Login
        </button>

        
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?
          <a href="/register"  className="text-red-500 font-medium hover:underline hover:text-red-400 transition">
            Register
          </a>
        </p>
      
      </div>
    </div>
    </>
  );
}

export default Login;
