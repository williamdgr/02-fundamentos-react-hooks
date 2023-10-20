
import { useState } from 'react'

export function UseState() {

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light');

  //Para incrementar devemos pegar o prevState e aumentar 1 a partir dele.
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