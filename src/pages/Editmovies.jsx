import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { db } from '../store/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Homeheader from '../Components/Homeheader';

function Editmovies() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    year: '',
    rating: '',
    review: '',
    poster: '',
    actors: '',
    directorname: '',
    agerestriction: '',
  });

  // ===== Fetch movie data =====
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const docRef = doc(db, 'movies', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setMovie(docSnap.data());
        else {
          alert('Movie not found');
          navigate('/allmovies');
        }
      } catch (err) {
        console.error('Error fetching movie:', err);
      }
    };
    fetchMovie();
  }, [id, navigate]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'movies', id);
      await updateDoc(docRef, movie);
      alert('Movie updated successfully!');
      navigate('/allmovies');
    } catch (err) {
      console.error('Error updating movie:', err);
      alert('Failed to update movie');
    }
  };

  return (
    <>
    <Homeheader/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url(https://wallpaperaccess.com/full/3658607.jpg)] bg-cover">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Edit Movie Details</h1>
        <form className="space-y-4" onSubmit={submitForm}>
          {/* Title */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={movie.title}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Genre */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">Genre</label>
            <input
              type="text"
              name="genre"
              value={movie.genre}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Year */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">Year</label>
            <input
              type="number"
              name="year"
              value={movie.year}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Rating */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">Rating (1-10)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="10"
              value={movie.rating}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Review */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">Review</label>
            <textarea
              name="review"
              value={movie.review}
              onChange={handleChange}
              rows="4"
              className="w-full border px-4 text-black py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Actors */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">Actors</label>
            <input
              type="text"
              name="actors"
              value={movie.actors}
              onChange={handleChange}
              className="w-full border px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Director */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">Director</label>
            <input type="text" name="directorname"value={movie.directorname} onChange={handleChange}className="w-full border px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          {/* Age Restriction */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">Age Restriction</label>
            <input type="text"name="agerestriction" value={movie.agerestriction}onChange={handleChange}className="w-full text-black border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          {/* Poster */}
          <div className="form-group">
            <label className="block text-gray-700 mb-1">Poster URL</label>
            <input type="text" name="poster" value={movie.poster}onChange={handleChange}className="w-full text-black border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
             <Link to={'/allmovies'}>Save Changes</Link> 
            </button>
            <button type="reset" className="w-full py-2 px-4 bg-gray-300 text-black rounded-md hover:bg-green-500"onClick={() => setMovie(movie)} >
              <Link to={'/allmovies'}>Back</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Editmovies;
