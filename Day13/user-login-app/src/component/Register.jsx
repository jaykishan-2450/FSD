import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"


const Register = ({regData}) => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const data={name,email,password};
const handleRegister=(e)=>{
    e.preventDefault();
    regData(data);
    
}

    return (
        <div>
            <form >
            <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox"/> Remember me</label>
                </div>
                <button  className="btn btn-default" onClick={handleRegister}>Submit</button>
            </form>

        </div>
    )
}

export default Register
