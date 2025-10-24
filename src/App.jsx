import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import { Button } from './components/ui/button';
import Hero from './components/custom/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
     
    </>
  )
}

export default App
