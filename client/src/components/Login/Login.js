import React, { useState } from 'react';
import './login.css'


const LoginForm = () => {
  const [formState, setFormState] = useState('')
  const [userValue, setUserValue] = useState('');
  const [passValue, setPassValue] = useState('');

  let loginAttempt = 0;

  const handleChange = (e) => {
    const { username, value } = e.target

    setFormState({
      ...formState,
      [username]: value
    })
  }

  const noLogin = () => {
    setUserValue('');
    setPassValue('');
    loginAttempt++
    if (loginAttempt > 3) {
      window.close()
    };
  };

  return (
    <div className='container bg-slate-800 flex justify-center absolute ml-64 inset-y-20 border-2 w-8/12'>
      <div className='signup-cont flex inline-flex flex-col'>
        <div className="signip-title">
          <h1 className="signup-header title text-center mb-2">Login</h1>
        </div>
        <div className="signup-form-container">
          <form className="signup-form mb-2">
            <label>
              <h2 className='font-bold text-center'>Username</h2>
            </label>
            <input className='mb-2 p-3 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400' placeholder="Enter a username..." value={userValue} onChange={handleChange}></input>
            <h2 className='font-bold text-center'>Password</h2>
            <input className='mb-2 p-3 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400' placeholder="Enter a password..." value={passValue} onChange={handleChange}></input>
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={noLogin}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;