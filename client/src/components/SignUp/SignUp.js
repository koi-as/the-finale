import React, { useEffect, useState } from "react";
import './signup.css'
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

export default function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [addUser, { error, data }] = useMutation(ADD_USER)

    const handleNewUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleNewPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleNewEmail = (e) => {
        setEmail(e.target.value)
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        // console.log(username, password, email)

        try {
            const { data } = await addUser({
                variables: { username, email, password }
            })
            console.log("User successfully added.");

            setUsername('');
            setEmail('');
            setPassword('');

        } catch (err) {
            console.log('Error creating user:', err);
        }
    };


    return (
        <div className='container bg-slate-800 flex justify-center absolute ml-64 inset-y-24 border-2 w-8/12'>
            <div className='signup-cont flex inline-flex flex-col'>
                <div className="signip-title">
                    <h1 className="signup-header title text-center mb-2 text-slate-200">Sign Up</h1>
                </div>
                <div className="signup-form-container">
                    <form className="signup-form mb-2" onSubmit={handleFormSubmit}>
                        <label>
                            <h2 className='font-bold text-center text-slate-200'>Username</h2>
                        </label>
                        <input className='mb-2 p-3 w-96 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400'
                            name='username' type='text' value={username} onChange={handleNewUsername}
                            placeholder="Enter a username that you won't hate."></input>
                        <label>
                            <h2 className='font-bold text-center text-slate-200'>Email</h2>
                        </label>
                        <input className='mb-2 p-3 w-96 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400'
                            name='email' type='text' value={email} onChange={handleNewEmail}
                            placeholder="Enter a valid email so we can spam you."></input>
                        <label>
                            <h2 className='font-bold text-center text-slate-200'>Password</h2>
                        </label>
                        <input className='mb-2 p-3 w-96 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400'
                            name='password' type='password' value={password} onChange={handleNewPassword}
                            placeholder="Enter a password. Don't forget it."></input>
                        <div className="flex items-center justify-center">
                            <button className="flex px-4 py-2 my-2 text-l font-bold leading-6 text-stone-200 whitespace-no-wrap bg-transparent border-2 border-stone-200 rounded-full shadow-sm hover:bg-white hover:text-stone-950 hover:bg-transparent focus:outline-none" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
