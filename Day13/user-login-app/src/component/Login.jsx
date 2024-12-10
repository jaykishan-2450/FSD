import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ regLogin }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate=useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (regLogin.email === email && regLogin.password === password) {
            alert("login successful");
            navigate("/dashboard")
        } else {
            alert("login failed!check credentials")
        }

    }
    return (
        <div style={{ "width": "40vw" }}>
            <form >
                <div className="form-group">
                    <label for="email">Email address:</label>
                    <input type="email"
                        onChange={(e) => setEmail(e.target.value)}

                        className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="pwd" />
                </div>

                <button style={{ "border": "1px solid black", "margin-top": "10px" }} onClick={handleLogin} className="btn btn-default">Login</button>
            </form>

        </div>
    )
}

export default Login
