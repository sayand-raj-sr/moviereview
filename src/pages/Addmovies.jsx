import React, { useState } from 'react';
import { db } from '../store/firebase';
import { addDoc, collection } from 'firebase/firestore';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
function Addmovies() {
 const navigate=useNavigate()
  const [userinput, setUserInput] = useState({
    moviedetails: {
      title: "",
      genre: "",
      year: "",
      rating: "",
      review: "",
      poster: "",
      directorname: "",
      actors: "",
      agerestriction: ""
    }
  })
  console.log(userinput);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "movies"), userinput.moviedetails)
      alert("Movie added successfully")
      console.log('movie added with id:', docRef.id);
      navigate('/allmovies')

    }
    catch (error) {
      console.error("erroro adding movie", error);
      alert("error adding movie.please try again later")

    }
  } 

  
  return (
    <>
      <Header/>
      <section className="flex justify-center items-center py-12 bg-gray-100 bg-[url(https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg)] bg-cover">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add a New Movie</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="movie-title" className="block text-gray-700">Movie Title</label>
              <input type="text" id="movie-title" name="movie-title" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-green-500"placeholder="Enter movie title" required
                onChange={e => setUserInput({ ...userinput, moviedetails: { ...userinput.moviedetails, title: e.target.value } })}/>
            </div>

            <div className="form-group">
              <label htmlFor="movie-genre" className="block text-gray-700">Movie Genre</label>
              <input type="text" id="movie-genre" name="movie-genre" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none text-black  focus:ring-2 focus:ring-green-500" placeholder="Enter movie genre" required
                onChange={e => setUserInput({ ...userinput, moviedetails: { ...userinput.moviedetails, genre: e.target.value } })} />
            </div>

            <div className="form-group">
              <label htmlFor="movie-release-year" className="block text-gray-700">Release Year</label>
              <input type="number" id="movie-release-year" name="movie-release-year" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter release year" required
                onChange={e => setUserInput({ ...userinput, moviedetails: { ...userinput.moviedetails, year: e.target.value } })} />
            </div>

            <div className="form-group">
              <label htmlFor="movie-rating" className="block text-gray-700">Agerestriction</label>
              <input type="text" id="movie-agerestriction" name="movie-agerestriction"
                className="w-full text-black  px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"placeholder="Enter agerestriction"required
                onChange={e => setUserInput({ ...userinput, moviedetails: { ...userinput.moviedetails, agerestriction: e.target.value } })}/>
            </div>
            <div className="form-group">
              <label htmlFor="movie-rating" className="block text-gray-700">Director</label>
              <input type="text" id="movie-director" name="movie-director" className="w-full px-4 py-2 mt-2 border text-black  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"placeholder="Enter director name"required
                onChange={e => setUserInput({ ...userinput, moviedetails: { ...userinput.moviedetails, directorname: e.target.value } })}/>
            </div>
            <div className="form-group">
              <label htmlFor="movie-rating" className="block text-gray-700">Actors</label>
              <input type="text" id="movie-actors" name="movie-actors" className="w-full px-4 py-2 mt-2 border border-gray-300 text-black  rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Enter actors name"required
                onChange={e => setUserInput({ ...userinput, moviedetails: { ...userinput.moviedetails, actors: e.target.value } })}/>
            </div>
            <div className="form-group">
              <label htmlFor="movie-rating" className="block text-gray-700">Rating (1-10)</label>
              <input type="number" id="movie-rating" name="movie-rating" min="1" max="10" className="w-full px-4 py-2 mt-2 text-black  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"placeholder="Enter rating" required
                onChange={e => setUserInput({ ...userinput, moviedetails: { ...userinput.moviedetails, rating: e.target.value } })} />
            </div>

            <div className="form-group">
              <label htmlFor="movie-review" className="block text-gray-700">review</label>
              <textarea id="movie-review"name="movie-review"rows="5"className="w-full px-4 py-2 mt-2 border text-black  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"placeholder="Write a short description of the movie"  required
                onChange={e => setUserInput({ ...userinput, moviedetails: { ...userinput.moviedetails, review: e.target.value } })}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="movie-poster" className="block text-gray-700">Movie Poster URL</label>
              <input type="text" id="movie-poster"name="movie-poster" className="w-full px-4 py-2 mt-2 border text-black  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"placeholder="Enter poster image URL"required
                onChange={e => setUserInput({ ...userinput, moviedetails: { ...userinput.moviedetails, poster: e.target.value } })} />
            </div>

            <div className="flex space-x-4">
              <button  type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              Add Movie
              </button>
              <button  type="reset" className="w-full py-2 px-4 bg-gray-300 text-black rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
               <Link to={'/allmovies'}>Back</Link> 
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Addmovies;
