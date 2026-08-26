import { useState } from 'react'
import './App.css'
import Header  from './components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h1 className='bg-green-300 p-4'>react router</h1>
    </>
  )
}

export default App
