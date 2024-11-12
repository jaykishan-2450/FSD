import React from 'react'

import './App.css'


const App=({name,email,mobile})=> {
  
  

  return (
    <>
      <div id="disp">
        <h1>Student Details</h1>
        <h2>Name:{name}</h2>
        <h2>Email ID:{email}</h2>
        <h2>Mobile no:{mobile}</h2>
       
      </div>
      
    </>
  )
}

export default App
