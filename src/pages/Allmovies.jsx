import React, { useEffect, useState } from 'react';
import Moviesearch from '../Components/Moviesearch';
import Toggleswitch from '../Components/Toggleswitch';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../store/firebase';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

function MovieCard() {
  const [searchItem, setSearchItem] = useState('');
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  const Details = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const snapshot = await getDocs(collection(db, "movies"));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMovie(list);
    };
    fetchMovies();
  }, []);

  const filtermovie = movie.filter((m) =>
    m.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div >
      <Header/>
      <Moviesearch onSearch={setSearchItem} />
      <Toggleswitch  className="ml-5"/>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4 ml-5 mr-5">
        {filtermovie.map((m) => (
          <div
            key={m.id}
            className="relative group rounded-lg overflow-hidden bg-gray-900 shadow-md transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={m.poster}
              alt={m.title}
              className="w-full h-95 object-cover opacity-90 group-hover:opacity-100 transition duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
              <h3 className="text-lg font-semibold text-white">{m.title}</h3>
              <p className="text-sm text-gray-300">Year: {m.year}</p>
              <p className="text-sm text-gray-300">Genre: {m.genre}</p>
              <p className="text-sm text-gray-300 mb-2">Rating: {m.rating}</p>

              {/* View More Button */}
              <button
                onClick={() => Details(m.id)}
                className="mt-2 bg-red-600 hover:bg-red-500 text-white font-semibold py-1 px-3 rounded transition duration-200"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
