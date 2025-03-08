import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laptops from './Laptops'
import Mobiles from './Mobiles'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Laptops/>
    
  )
}

export default App
