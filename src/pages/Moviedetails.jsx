import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../store/firebase';
import {addDoc,collection,deleteDoc,doc,getDoc,onSnapshot,query,setDoc,where} from 'firebase/firestore';
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Header from '../Components/Header';

function Moviedetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  // ===== Fetch Movie =====
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const docRef = doc(db, 'movies', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setMovie(docSnap.data());
      } catch (err) {
        console.error('Error fetching movie:', err);
      }
    };
    fetchMovie();
  }, [id]);

  // ===== Fetch Reviews =====
  useEffect(() => {
    const reviewsRef = collection(db, 'reviews');
    const qry = query(reviewsRef, where('movieID', '==', id));
    const unsub = onSnapshot(qry, (snapshot) => {
      const allReview = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReviews(allReview);
    });
    return () => unsub();
  }, [id]);

  // ===== Toggle Favorite =====
  const toggleFavorite = async () => {
    if (!movie) return;
    const favRef = doc(db, 'favorites', id);
    try {
      if (isFavorite) {
        await deleteDoc(favRef);
        setIsFavorite(false);
        alert(`${movie.title} removed from favorites`);
      } else {
        await setDoc(favRef, { ...movie, id });
        setIsFavorite(true);
        alert(`${movie.title} added to favorites`);
      }
    } catch (err) {
      console.error('Error updating favorites:', err);
      alert('Failed to update favorite');
    }
  };

  // ===== Delete Movie =====
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'movies', id));
      alert('Movie deleted successfully');
      navigate('/allmovies');
    } catch (err) {
      console.error('Error deleting movie:', err);
      alert('Failed to delete movie');
    }
  };

  // ===== Edit Movie =====
  const editMovie = () => navigate(`/edit/${id}`);

  // ===== Add Review =====
  const handleAddReview = async () => {
    if (!newReview.trim()) return alert('Please write a review');
    try {
      await addDoc(collection(db, 'reviews'), {
        movieID: id,
        text: newReview,
        createdAt: new Date(),
      });
      setNewReview('');
    } catch (err) {
      console.error('Error adding review:', err);
      alert('Failed to post review');
    }
  };

  if (!movie) return <p className="text-center mt-20 text-xl">Loading...</p>;

  return (
    <>
    <Header/>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      {/* Movie Info */}
      <div className="flex flex-col md:flex-row items-center gap-8 py-4">
<IoIosArrowRoundBack className=" flex mr-4 text-5xl transition-transform duration-300 hover:scale-110 hover:text-blue-600" />
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-48 h-72 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8"
        />
        <div className="md:flex-1">
          <h1 className="text-4xl font-bold text-gray-800">{movie.title}</h1>
          <p className="text-xl text-gray-500 mt-2">Release Date: {movie.year}</p>
          <p className="text-lg text-gray-700 mt-2">Actors: {movie.actors}</p>
          <p className="text-lg text-gray-700 mt-2">Director: {movie.directorname}</p>
          <div className="mt-4 flex items-center space-x-6">
            <span className="text-lg font-semibold text-gray-800">Genre: {movie.genre}</span>
            <span className="text-lg font-semibold text-gray-800">Age Restriction: {movie.agerestriction}</span>
            <span className="text-lg font-semibold text-gray-800">Rating: {movie.rating}⭐</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={editMovie}
          className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center gap-2"
        >
          <FaEdit /> Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-200 flex items-center gap-2"
        >
          <FaTrashAlt /> Delete
        </button>
        <button
          onClick={toggleFavorite}
          className={`px-6 py-2 ml-100 text-white rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition duration-200 ${
            isFavorite ? 'bg-yellow-500' : 'bg-gray-600'
          }`}
        >
          {isFavorite ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
          <span>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
        </button>
      </div>

      {/* Add Review */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Your Review</h2>
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review..."
            className="flex-1 h-10 rounded px-4 border"
          />
          <button
            onClick={handleAddReview}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Post
          </button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first!</p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <p>{rev.text}</p>
              {rev.createdAt?.toDate && (
                <p className="text-sm text-gray-400 mt-1">
                  {rev.createdAt.toDate().toLocaleString()}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
}

export default Moviedetails;
