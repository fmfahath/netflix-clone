import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Player from './pages/player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged in");
        navigate('/')
      }
      else {
        console.log("logged Out");
        navigate('/login')
      }
    })
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App