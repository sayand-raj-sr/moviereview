import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // user icon

function Homeheader() {
  

  return (
    <div>
      <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-lg relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Movie<span className="text-red-500">Hub</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
       

          {/* User Icon */}
          <li className="relative">
            <button
              className="text-3xl hover:text-red-500 transition"
            >
              <FaUserCircle />
            </button>

    
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" >
          ☰
        </button>

        
      </nav>
    </div>
  );
}

export default Homeheader;
