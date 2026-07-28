import { useState } from 'react'
import './App.css'
import BgChanger from './Components/BgChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BgChanger />
    </>
  )
}

export default App
