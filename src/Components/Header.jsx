import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // user icon

function Header() {
  const [open, setOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
   const navigate=useNavigate()
  // toggle mobile menu
  const toggleMenu = () => {
    setOpen(!open);
  };

  // toggle user dropdown
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  // handle logout
  const handleLogout = () => {
    alert("Logged out successfully!");
    // add your logout logic here, e.g.:
    // signOut(auth)
    navigate("/login")
  };

  return (
    <div>
      <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-lg relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Movie<span className="text-red-500">Hub</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          

          {/* Add Movie Button */}
          <li>
            <Link
              to="/add"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              + Add Movie
            </Link>
          </li>

          {/* Favorites Button */}
          <li>
            <Link
              to="/fav"
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              ❤️ Favorites
            </Link>
          </li>

          {/* User Icon */}
          <li className="relative">
            <button
              onClick={toggleUserMenu}
              className="text-3xl hover:text-red-500 transition"
            >
              <FaUserCircle />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setShowUserMenu(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => { handleLogout(); setShowUserMenu(false);}}className="w-full text-left px-4 py-2 hover:bg-gray-100" >
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={toggleMenu}>
          ☰
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden z-10">
            <input
              type="text"
              placeholder="Search movies..."
              className="px-4 py-2 rounded-lg text-black w-60 focus:outline-none"
            />
            <Link to="/" className="hover:text-red-500">
              Home
            </Link>
            <Link to="/movies" className="hover:text-red-500">
              Movies
            </Link>
            <Link to="/trending" className="hover:text-red-500">
              Trending
            </Link>
            <Link to="/about" className="hover:text-red-500">
              About
            </Link>
            <Link
              to="/add"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              + Add Movie
            </Link>
            <Link
              to="/fav"
              className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              ❤️ Favorites
            </Link>

            {/* User Menu (Mobile) */}
            <div className="flex flex-col items-center gap-2 mt-2">
              <FaUserCircle className="text-4xl" />
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="text-red-500 hover:text-white hover:bg-red-600 px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
