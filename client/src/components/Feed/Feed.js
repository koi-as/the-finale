import React from 'react';
import { Link } from 'react-router-dom';
import './feed.css'

const Feed = () => {
    return (
        <div className='container bg-slate-800 flex justify-center absolute ml-64 inset-y-20 border-2 w-8/12'>
            <div className='feed-cont flex inline-flex flex-col'>
                <input type="text" className="py-3 px-5 m-3 block w-40 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Name Thyself">
                </input>
                <input type="text" className="py-3 px-5 block w-96 h-24 border-gray-200 rounded-3xl text-xl focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Spread the Bitterness">
                </input>
                <button className="flex items-center justify-center px-4 py-2 m-3 text-3xl font-bold leading-6 text-stone-200 whitespace-no-wrap bg-transparent border-2 border-stone-200 rounded-full shadow-sm hover:bg-white hover:text-stone-950 hover:bg-transparent focus:outline-none">
                +</button>
            </div>
        </div>
    )
}

export default Feed;
