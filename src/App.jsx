import React from 'react'
import './App.css'
import FeedbackForm from './Components/FeedbackForm'
import ComLocalStorage from './ComLocalStorage'
import ComSessionStorage from './ComSessionStorage'

function App() {
  return (
   <>
      <FeedbackForm/>
      <ComLocalStorage />
      <ComSessionStorage />
   </>
  )
}

export default App