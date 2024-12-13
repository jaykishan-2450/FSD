import React from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"

const Dashboard = ({regDash}) => {
  return (
    <div>
      <div>
      <div className="container">
        <div className="jumbotron"
        style={{color:"white", backgroundColor:"darkkhaki" }}>
          <div className='row'>
            <div className='col-sm-12'>
              <h1>User Dashboard</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-8'>
              <h2>Welcome {regDash.name}</h2>
            </div>
          </div>
          <div className='col-sm-4'>
            <h1>
              <Link to="/logout">Logout</Link>
            </h1>
          </div>
        </div>
        <p>You Login Email : {regDash.email}</p>
        <p>Click the button to Fetch Weather</p>
      </div>
    </div>

    </div>
  )
}

export default Dashboard