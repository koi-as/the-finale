import React from "react";
import './rightSidebar.css'

const RightSidebar = () => {
    return (
        <div className="container flex bg-slate-800 absolute inset-y-20 right-0 w-2/12 p-4">
            <div className="r-sidebar">
                <div className='search-container flex-row'>
                    <input className='input w-52 border rounded-full p-2' placeholder="Search"></input>
                    <button className="flex items-center justify-center px-4 py-2 ml-16 my-2 text-l font-bold leading-6 text-stone-200 whitespace-no-wrap bg-transparent border-2 border-stone-200 rounded-full shadow-sm hover:bg-white hover:text-stone-950 hover:bg-transparent focus:outline-none">
                    Search</button>
                </div>
                <div className="tags-containter inline-flex flex-col text-stone-200 text-lg">
                    <h2 className="text-2xl">Popular Tags:</h2>
                    <ul>
                        <li>#Bitter</li>
                        <li>#NegativeEnergy</li>
                        <li>#YesTodaySatan</li>
                        <li>#HateYourself</li>
                        <li>#NoSunshineAllowedHere</li>
                        <li>#DontYouHateItWhen</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar