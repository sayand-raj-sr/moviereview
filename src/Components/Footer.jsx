import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-black text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            Movie<span className="text-red-500">Hub</span>
          </h1>
          <p className="mt-3 text-gray-400">
            Your daily dose of movies, shows & entertainment.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-2xl">
            <i className="fab fa-facebook hover:text-red-500 cursor-pointer"></i>
            <i className="fab fa-instagram hover:text-red-500 cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-red-500 cursor-pointer"></i>
            <i className="fab fa-youtube hover:text-red-500 cursor-pointer"></i>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Menu</h2>
          <ul className="space-y-2">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Movies</li>
            <li className="hover:text-red-500 cursor-pointer">Trending</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Categories</h2>
          <ul className="space-y-2">
            <li className="hover:text-red-500 cursor-pointer">Action</li>
            <li className="hover:text-red-500 cursor-pointer">Comedy</li>
            <li className="hover:text-red-500 cursor-pointer">Horror</li>
            <li className="hover:text-red-500 cursor-pointer">Romance</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Newsletter</h2>
          <p className="text-gray-400 mb-3">
            Subscribe to get latest movie updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full rounded-l bg-gray-800 text-white focus:outline-none"
            />
            <button className="px-4 bg-red-600 hover:bg-red-700 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
        © {new Date().getFullYear()} MovieHub — All Rights Reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
