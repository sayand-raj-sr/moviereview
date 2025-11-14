import React from 'react';
import { Link } from 'react-router-dom';
import Homeheader from '../Components/Homeheader';

function Home() {
  return (
        
    <div className="bg-black text-white">
      <Homeheader/>
     <div className="relative w-full h-150 bg-cover bg-center bg-[url(https://wallpapercave.com/wp/wp9152334.jpg)]"
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/95"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center text-white px-4">
    {/* Title */}
    <h1 className="text-5xl md:text-7xl font-bold text-red-500 mb-3 tracking-wide drop-shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-all duration-300 hover:text-red-600 hover:drop-shadow-[0_0_25px_rgba(255,0,0,0.6)]">
      The Batman
    </h1>

    {/* Tagline */}
    <p className="text-lg md:text-2xl mt-4 text-gray-300 italic tracking-wide">
      “I am vengeance.”
    </p>

    {/* Details */}
    <p className="text-base md:text-lg mt-4 text-gray-400 max-w-xl">
      Gotham’s dark protector faces the Riddler — a sadistic killer exposing the city’s corruption, 
      forcing Bruce Wayne to question everything about his past and what it means to be justice.
    </p>

    {/* Info + Buttons */}
    <div className="mt-8 flex flex-col md:flex-row gap-5 justify-center items-center">
      <p className="text-sm md:text-base text-gray-400">
        <span className="font-semibold text-white">2022</span> | Action, Crime, Mystery | ⭐ 4.6/5
      </p>

      <Link to="/register">
        <button className="px-8 py-3 mt-3 md:mt-0 bg-gradient-to-r from-red-700 to-red-800 rounded-lg text-white font-semibold tracking-wide shadow-lg hover:shadow-red-600/50 hover:scale-105 transition-all duration-300">
          Register Now
        </button>
      </Link>
    </div>
  </div>
</div>

      {/* Recommendations Section */}
       <div className="text-center mb-10">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
    🎬 Trending Movies
  </h2>
  <p className="text-gray-600 text-base md:text-lg">
    The hottest films everyone’s talking about right now!
  </p>
</div>
      <section className="py-16 px-4 flex gap-4 ms-6 ">
       <div>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA0LjRLKyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00457717-ezxnxekgkn-portrait.jpg" height={"220px"} width={"220px"} alt="" />
       </div>
       <div>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA0Ni41SysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00457060-vxvzcucbsh-portrait.jpg" height={"220px"} width={"220px"} alt="" />
       </div>
       <div>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA0NDArIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00467419-zgpzkjwsnd-portrait.jpg" height={"220px"} width={"220px"} alt="" />
       </div>
       <div>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA4LjdLKyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00443704-njctmveaay-portrait.jpg" height={"220px"} width={"220px"} alt="" />
       </div>
       <div>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzIuMUsrIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432079-wpxpamtvdw-portrait.jpg" height={"220px"} width={"220px"} alt="" />
       </div>
       <div>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICA4MTArIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00468534-kqecurmwhm-portrait.jpg" height={"220px"} width={"220px"} alt="" />
       </div>
      </section>

     
      {/* 💎 Subscription Plans */}
      <section className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Subscription Plans
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Basic */}
          <div className="bg-[#1c1c1c] rounded-2xl p-8 w-72 text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Basic</h3>
            <p className="text-3xl mb-6 font-bold">$9.99</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Access to 100+ movies</li>
              <li>HD streaming</li>
              <li>1 Device</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Choose Plan
            </button>
          </div>

          {/* Premium */}
          <div className="bg-[#1c1c1c] rounded-2xl p-8 w-72 text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Premium</h3>
            <p className="text-3xl mb-6 font-bold">$19.99</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Access to 500+ movies</li>
              <li>4K streaming</li>
              <li>3 Devices</li>
            </ul>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Choose Plan
            </button>
          </div>

          {/* Elite */}
          <div className="bg-[#1c1c1c] rounded-2xl p-8 w-72 text-center hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-pink-400 mb-4">Elite</h3>
            <p className="text-3xl mb-6 font-bold">$29.99</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Unlimited movies</li>
              <li>4K HDR streaming</li>
              <li>Unlimited Devices</li>
            </ul>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Choose Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
