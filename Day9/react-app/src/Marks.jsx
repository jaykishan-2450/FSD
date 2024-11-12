import React from 'react'
import './Marks.css'

const Marks = ({m1,m2,m3}) => {
  return (
    <div>
        <div id="sem">
            <h1>Marksheet</h1>
            <h2>Sem1:{m1}</h2>
            <h2>Sem2:{m2}</h2>
            <h2>Sem3:{m3}</h2>

        </div>

      
    </div>
  )
}

export default Marks
