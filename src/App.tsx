
import { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light');

  function incrementCount() {
    setCount((prevState) => prevState + 1)
   };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

