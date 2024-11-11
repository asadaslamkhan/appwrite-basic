import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  

  return (
    <>
     <h1>A Blog Authentication App With Appwrite</h1>
    </>
  )
}

export default App
