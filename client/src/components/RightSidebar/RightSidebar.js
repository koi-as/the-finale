import React from "react";
import { NavLink } from "react-router-dom";
import './rightSidebar.css'

const RightSidebar = () => {
    return (
        <div className="container flex bg-slate-800 absolute inset-y-24 right-0 w-2/12 p-4 border-2 border-stone-200">
            <div className="r-sidebar ">
                <div className='search-container flex-row'>
                    <input className='input w-full border rounded-full p-2 ' placeholder="Search"></input>
                    <div className='flex justify-center'>
                    <NavLink to='/error'>
                        <button className="mt-4 mb-8 flex items-center justify-center px-4 py-2 my-2 text-l font-bold leading-6 text-stone-200 whitespace-no-wrap bg-transparent border-2 border-stone-200 rounded-full shadow-sm hover:bg-white hover:text-stone-950 hover:bg-transparent focus:outline-none">
                        Search</button>
                    </NavLink>
                    </div>
                </div>
                <div className="tags-containter inline-flex flex-col text-stone-200 text-lg">
                    <h2 className="text-2xl">Popular Tags:</h2>
                    <ul>
                        <li>#Nope</li>
                        <li>#NegativeEnergy</li>
                        <li>#YesTodaySatan</li>
                        <li>#IGiveUp</li>
                        <li>#NoSunshineAllowedHere</li>
                        <li>#DontYouHateItWhen</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar