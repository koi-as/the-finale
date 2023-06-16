import React from "react";
import './signup.css'

export default function SignUp() {
    return (
        <div className='container bg-slate-800 flex justify-center absolute ml-64 inset-y-20 border-2 w-8/12'>
            <div className='signup-cont flex inline-flex flex-col'>
                <div className="signip-title">
                    <h1 className="signup-header title text-center mb-2">Sign Up</h1>
                </div>
                <div className="signup-form-container">
                    <form className="signup-form mb-2">
                        <label>
                            <h2 className='font-bold text-center'>Username</h2>
                        </label>
                        <input className='mb-2 p-3 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400' placeholder="Enter a username"></input>
                        <label>
                            <h2 className='font-bold text-center'>Email</h2>
                        </label>
                        <input className='mb-2 p-3 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400' placeholder="Enter a valid email"></input>
                        <label>
                            <h2 className='font-bold text-center'>Password</h2>
                        </label>
                        <input className='mb-2 p-3 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400' placeholder="Enter a known password"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}