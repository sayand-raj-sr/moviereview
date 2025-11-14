import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
     <div className="min-h-screen bg-gray-800 flex justify-center items-center text-white">
      <div className="text-center p-8 bg-gray-900 rounded-lg shadow-xl w-full max-w-md">
        <div className="mb-6">
          <img 
            src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-404-robot-mechanical-vector-png-image_4627839.jpg"  
            alt="404 - Movie Reel"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
          <p className="text-lg mb-4">Looks like the page you're looking for doesn't exist in our movie universe.</p>
          <p className="text-sm mb-8 text-gray-400">Maybe it's a lost scene or a deleted script?</p>
          <button 
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <Link to={"/"} >
            Go Back Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pnf
