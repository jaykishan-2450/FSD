import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='count-app'>
        <h1>count:{count}</h1>
        <div className="count-body">
          <div className="count-btn">
            <button onClick={() => { setCount(count + 1); console.log(count) }}>Increment</button>
          </div>
          <div className="count-btn">
            <button onClick={() => { setCount(count - 1); }}>Decrement</button>
          </div>
          <div className="count-btn">
            <button onClick={() => { setCount(0); }}>Reset</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
