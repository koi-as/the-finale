import React from "react";
import { Link } from "react-router-dom";
import './leftSidebar.css'

const LeftSidebar = () => {
    return (
        <div className="container bg-slate-800 absolute inset-y-20 left-0 w-44">
            <div className="nav">
                <div className="nav-links inline-flex flex-col text-slate-400">
                    <Link className='border ring-stone-900 ring-2 hover:ring-4 rounded-full px-4 py-2 ml-7 m-2 mt-4'>Dashboard</Link>
                    <Link className='border ring-stone-900 ring-2 hover:ring-4 rounded-full px-4 py-2 ml-7 m-2 mt-4'>Profile</Link>
                    <Link className='border ring-stone-900 ring-2 hover:ring-4 rounded-full px-4 py-2 ml-7 m-2 mt-4'>Settings</Link>
                    <Link className='border ring-stone-900 ring-2 hover:ring-4 rounded-full px-4 py-2 ml-7 m-2 mt-4'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar