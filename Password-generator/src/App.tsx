import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='black flex justify-center align-middle text-4xl font-semibold'
    >Password Generator</h1>
    </>
  )
}

export default App
