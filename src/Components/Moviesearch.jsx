import React from 'react';
import { IoSearch } from "react-icons/io5";

function Moviesearch({ onSearch }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 p-2 w-full max-w-md mx-auto bg-white shadow-md my-4">
      <input
        type="text"
        placeholder="Search your movie..."
        className="w-full outline-none px-4 py-2 text-gray-700 placeholder-gray-500 rounded-lg border-2 border-transparent focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
        onChange={(e) => onSearch(e.target.value)}
      />
      <IoSearch className="text-gray-600 hover:text-blue-500 cursor-pointer text-lg transition-colors duration-200" />
    </div>
  );
}

export default Moviesearch;
