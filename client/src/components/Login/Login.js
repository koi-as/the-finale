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
    <div className='container bg-slate-800 flex justify-center absolute ml-64 inset-y-24 border-2 w-8/12'>
      <div className='signup-cont flex inline-flex flex-col'>
        <div className="signip-title">
          <h1 className="signup-header title text-center mb-2 text-slate-200">Login</h1>
        </div>
        <div className="signup-form-container">
          <form className="signup-form mb-2">
            <label>
              <h2 className='font-bold text-center text-slate-200'>Username</h2>
            </label>
            <input className='mb-2 p-3 w-96 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400' placeholder="Your Username So People Can Stalk You" value={userValue} onChange={handleChange}></input>
            <h2 className='font-bold text-center text-slate-200'>Password</h2>
            <input className='mb-2 p-3 w-96 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700 dark:text-gray-400' placeholder="Your Super Secret Secure Password" value={passValue} onChange={handleChange}></input>
            <div className="flex items-center justify-center">
              <button className="flex px-4 py-2 my-2 text-l font-bold leading-6 text-stone-200 whitespace-no-wrap bg-transparent border-2 border-stone-200 rounded-full shadow-sm hover:bg-white hover:text-stone-950 hover:bg-transparent focus:outline-none" type="button" onClick={noLogin}>
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