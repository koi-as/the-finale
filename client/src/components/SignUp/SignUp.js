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
        <div className='container bg-slate-800 flex justify-center absolute ml-64 inset-y-20 border-2 w-8/12'>
            <div className='signup-cont flex inline-flex flex-col'>
                <div className="signip-title">
                    <h1 className="signup-header title text-center mb-2">Sign Up</h1>
                </div>
                <div className="signup-form-container">
                    <form className="signup-form mb-2" onSubmit={handleFormSubmit}>
                        <label>
                            <h2 className='font-bold text-center'>Username</h2>
                        </label>
                        <input className='mb-2 p-3 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400'
                            name='username' type='text' value={username} onChange={handleNewUsername}
                            placeholder="Enter a username"></input>
                        <label>
                            <h2 className='font-bold text-center'>Email</h2>
                        </label>
                        <input className='mb-2 p-3 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400'
                            name='email' type='text' value={email} onChange={handleNewEmail}
                            placeholder="Enter a valid email"></input>
                        <label>
                            <h2 className='font-bold text-center'>Password</h2>
                        </label>
                        <input className='mb-2 p-3 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400'
                            name='password' type='password' value={password} onChange={handleNewPassword}
                            placeholder="Enter a known password"></input>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
