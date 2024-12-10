import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div style={{ "margin": "30px" }}>
            {/* <h1>sghvdcewgh</h1> */}
            <nav>
                <ul style={{ "display": "flex",   "listStyle": "none" }}>
                    <li>
                        <Link style={{ "textDecoration": "none", "color": "brown", "border": "1px solid black", "padding": "5px", "borderRadius": "10%","margin-right":"10px" }} to="/login">Login</Link>
                    </li>
                    <li>
                        <Link style={{ "textDecoration": "none", "color": "brown", "border": "1px solid black", "padding": "5px", "borderRadius": "10%","margin-right":"10px" }} to="/register">Register</Link>
                    </li>
                    
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default MainLayout
