import React from "react";
import { Link } from "react-router-dom";
import './leftSidebar.css'

const LeftSidebar = () => {
    return (
        <div className="container mx-auto self-auto bg-slate-800">
            <div className="nav">
                <div className="nav-links inline-flex flex-col ">
                    <Link>Dashboard</Link>
                    <Link>Profile</Link>
                    <Link>Settings</Link>
                    <Link>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar