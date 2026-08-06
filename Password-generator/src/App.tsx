import { useState , useCallback} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState (false)
  const [charAllow, setCharAllow] = useState (false)

  const [password, setPassword] = useState ("")

  const passwordGenerator =  useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    
  }, [length, numberAllow, charAllow, setPassword])

  return (
    <>
    <h1 className='black flex justify-center align-middle text-4xl font-semibold'
    >Password Generator</h1>
    </>
  )
}

export default App
