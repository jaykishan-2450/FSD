import { useState } from 'react'
import Movielist from './Movielist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{
        backgroundColor: "black",
        color: "White",
        textAlign: "center",
        fontSize: "30px" }}>
        Netflix Clone App
        </h1>
      <Movielist />
    </>
  )
}

export default App
