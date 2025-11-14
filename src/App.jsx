import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Addmovies from './pages/Addmovies'
import Editmovies from './pages/Editmovies'
import Moviedetails from './pages/Moviedetails'
import Allmovies from './pages/Allmovies'
import Favmovies from './pages/Favmovies'
import Pnf from './pages/Pnf'
import Preloader from './Components/Preloader'
import { useEffect, useState } from 'react'


function App() {
  
   const[loading,setLoading]=useState(true)

   useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
   },[])
  return (
    <>
      <Routes>
        <Route path='/' element={loading?<Preloader/>:<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/add' element={<Addmovies/>}/>
        <Route path='/edit/:id' element={<Editmovies/>}/>
        <Route path='/details/:id' element={<Moviedetails/>}/>
        <Route path='/allmovies' element={<Allmovies/>}/>
        <Route path='/fav' element={<Favmovies/>}/>
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
