
import { UseEffect } from './UseEffect'
import { UseRef } from './UseRef'
import { UseState } from './UseState'

export default function App() {


  return (
    <div>
      <h1>useState</h1>
      <UseState />
      <hr></hr>

      <h1>useEffect</h1>
      <UseEffect />
      <hr></hr>

      <h1>useRef</h1>
      <UseRef />
      <hr></hr>

    </div>
  )
}

