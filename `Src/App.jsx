import { useState } from 'react'
import './App.css'
import Home from './screens/home';

// store widget in json and then render the card 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App

