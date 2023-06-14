import React from "react";
import './rightSidebar.css'

const RightSidebar = () => {
    return (
        <div className="container mx-auto self-auto bg-slate-800">
            <div className="r-sidebar">
                <div className='search-container flex-row'>
                    <input className='input' placeholder="Search"></input>
                    <button className="searchBtn">Search</button>
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