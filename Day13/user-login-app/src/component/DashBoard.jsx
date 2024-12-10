import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const DashBoard = ({ regDash }) => {
  return (
    <div>
      {JSON.stringify(regDash)}
      <div className="container">
        <div className="jumbotron">
          <h1>User DashBoard</h1>
          <h2>Logout</h2>
          <p>Welcome {regDash.name}</p>
        </div>
        <p>You Login Email : {regDash.email}</p>
        <p>Click the button to Fetch Weather</p>
      </div>
    </div>
  );
};

export default DashBoard;