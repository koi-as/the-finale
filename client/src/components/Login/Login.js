import React, { useState } from 'react';
import './login.css'

const LoginForm = () => {
  const [userValue, setUserValue] = useState();
  const [passValue, setPassValue] = useState();

  const noLogin = () => {
    console.log('You cant log in');
    setUserValue('');
    setPassValue('');
  };

  return (
    <div className='login-form container flex justify-center absolute inset-x-16 inset-y-24 w-8/12'>
      <div className="w-full max-w-lg">
        <form className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={userValue} id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" value={passValue} id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onCLick={noLogin}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;