import React from "react";
import './rightSidebar.css'

const RightSidebar = () => {
    return (
        <div className="container bg-slate-800 absolute inset-y-20 right-0 w-44 p-4">
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
    )
}

export default RightSidebar