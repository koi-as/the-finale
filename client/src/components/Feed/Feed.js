import React from 'react';
import { Link } from 'react-router-dom';
import './feed.css'

const Feed = () => {
    return (
        <div className='container bg-slate-800 absolute ml-56 inset-y-20 w-2/4'>
            <div className='feed-cont inline-flex flex-col'>
                <input type="text" className="py-3 px-5 block w-72 border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Input text">
                </input>
            </div>
        </div>
    )
}

export default Feed;