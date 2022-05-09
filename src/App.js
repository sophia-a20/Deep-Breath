import React from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Card from './components/Card'
import {Routes, Route, Link} from 'react-router-dom'

import Home from './Pages/Home' ; 
import About from './Pages/About' ; 
import Profile from './Pages/Profile' ; 

import Footer from './components/Footer'

function App() {
  return (
    <div>App
       <nav>
        <Link to='/'>Home</Link>
        <Link to='/'>Explore</Link>
        <Link to='/'>About</Link>

      </nav>
    </div>
     
  )
}

export default App


