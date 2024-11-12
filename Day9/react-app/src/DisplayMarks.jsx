import React from 'react'
import Marks from './Marks'

const DisplayMarks = () => {
    const students=[
        {m1:27,m2:39,m3:69},
        {m1:27,m2:59,m3:69},
        {m1:47,m2:39,m3:69},
        {m1:27,m2:39,m3:69},
        {m1:27,m2:39,m3:69},
        {m1:29,m2:39,m3:69},
    
    
    ]
  return (
    <div>
        {
            students.map((student,index)=>(
                <Marks key={index}  m1={student.m1} m2={student.m2} m3={student.m3}/>
            ))
        }
      
    </div>
  )
}

export default DisplayMarks
