import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Demo from './Demo'
import Random from './Random'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello world</h1>
      <Demo/>
      <Random></Random>
      <Random></Random>
      <Random></Random>
  
    </div>

    
  )
}

export default App
