import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../store/firebase';
import Header from '../Components/Header';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';


function Favmovies() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const fetchfav = async () => {
      try {
        const favcollection = collection(db, "favorites");
        const favsnap = await getDocs(favcollection);
        const favlist = favsnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFavorite(favlist);
      } catch (err) {
        console.error("Error fetching favorites", err);
      }
    };
    fetchfav();
  }, []);

  const handleRemove = async (id) => {
    try {
      await deleteDoc(doc(db, "favorites", id));
      setFavorite(prev => prev.filter(movie => movie.id !== id));
      alert("Movie removed from favorites");
    } catch (err) {
      console.error("Failed to remove favorite", err);
    }
  };

  return (
    <>
     <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
    <div className="bg-gray-900 text-white min-h-screen px-4 py-12">
     
      <h1 className="text-4xl font-extrabold  mb-8 mt-10 flex ml-10">
      <Link to="/allmovies"><IoIosArrowRoundBack className="mr-4 text-5xl transition-transform duration-300 hover:scale-110 hover:text-blue-600" />
      </Link> My Favorite Movies Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 ml-3 mt-3">
        {favorite.map(movie => (
          <div
            key={movie.id}
            className="bg-gray-800 w-72 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                className="w-72 h-72 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
                src={movie.poster || "https://via.placeholder.com/300x400"}
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>

            <div className="p-6">
              <h2 className="text-3xl font-semibold text-indigo-400">Title: {movie.title}</h2>
              <p className="text-indigo-300 text-sm mt-2">Genre: {movie.genre}</p>
              <p className="text-indigo-200 text-xs mt-1">Year: {movie.year}</p>
              <p className="text-indigo-100 text-sm mt-4">Review: {movie.review}</p>

              <div className="mt-4">
                <button
                  onClick={() => handleRemove(movie.id)}
                  className="px-6 py-2 rounded-full bg-red-600 text-white text-sm hover:bg-red-700 transition-colors w-full"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Favmovies;
