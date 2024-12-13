import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import "./MainLayout.css";


const Register = ({ regData }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate=useNavigate();
    const data = { name, email, password };
    const handleRegister = (e) => {
        e.preventDefault();
        alert("success");
        regData(data);
        navigate("/login");

    }

    return (
        <div className="main">
        <div style={{ "width": "40vw" }}>
            <h2 style={{"margin-bottom":"15px","color":"brown"}}>Register:</h2>
            
            <form >
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button style={{ "border": "1px", "margin-top": "10px","backgroundColor":"blue","color":"white" }} className="btn btn-default" onClick={handleRegister}>Submit</button>
            </form>

        </div>
        </div>
    )
}

export default Register
