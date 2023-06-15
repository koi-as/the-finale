import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
    return (
        <div className='flex grid grid-cols-3 gap-4'>
            <div className="container bg-slate-800">
                <div className="nav">
                    <div className="nav-links inline-flex flex-col text-slate-400 text-center">
                        <Link className='border ring-stone-900 ring-2 hover:ring-4 rounded-full px-4 py-2 ml-7 m-2 mt-4'>Dashboard</Link>
                        <Link className='border ring-stone-900 ring-2 hover:ring-4 rounded-full px-4 py-2 ml-7 m-2 mt-4'>Profile</Link>
                        <Link className='border ring-stone-900 ring-2 hover:ring-4 rounded-full px-4 py-2 ml-7 m-2 mt-4'>Settings</Link>
                        <Link className='border ring-stone-900 ring-2 hover:ring-4 rounded-full px-4 py-2 ml-7 m-2 mt-4'>Login</Link>
                    </div>
                </div>
            </div>

            <div className='container bg-slate-800 '>
                <div className='feed-cont inline-flex flex-col'>
                    <input type="text" className="py-3 px-5 block w-72 border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Input text">
                    </input>
                </div>
            </div>

            <div className="container bg-slate-800 ">
                <div className="r-sidebar">
                    <div className='search-container flex-row'>
                        <input className='input w-36 border rounded-full p-2' placeholder="Search"></input>
                        <button className="searchBtn border rounded-full">Search</button>
                    </div>
                    <div className="tags-containter inline-flex flex-col">
                        <h2>Popular Tags</h2>
                        <ul>
                            <li>#Tag</li>
                            <li>#Tag</li>
                            <li>#Tag</li>
                            <li>#Tag</li>
                            <li>#Tag</li>
                            <li>#Tag</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body