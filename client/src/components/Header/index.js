import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../Assets/bitterLogo1.JPG';

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 bg-slate-700">
      <div className="flex h-screen">
        <NavLink className="nav-logo-link inline absolute left-5 top-2" to="/" style={{ width: '80px', height: '80px' }}>
          <img
            src={logo}
            className="logo-style border-2 rounded-full"
            alt="Bitter Logo"
            style={{ width: '80px', height: '80px' }}
            
          />
        </NavLink>
      </div>
      <div className="flex inline">
        <p className="absolute left-32 top-6 text-4xl text-slate-200 font-mono">
          Bitter
        </p>
        <div className="flex absolute top-6 right-10 inline">
          <NavLink
            className="border-2 rounded-l-full px-5 py-2 border-neutral-950 bg-sky-300 text-l font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out border-2 border-gray-600 border-solid cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            to="/login"
          >
            <h3 className="">Login</h3>
          </NavLink>
          <NavLink
            className="border-2 rounded-r-full border-neutral-950 px-4 py-2 bg-neutral-100 text-l font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out border-2 border-gray-600 border-solid cursor-pointer select-none hover:text-sky-300 hover:border-sky-300 focus:shadow-xs focus:no-underline"
            to="/signup"
          >
            <h3 className="">Signup</h3>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
