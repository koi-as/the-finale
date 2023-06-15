import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    // If we use login/logout logic:

    // const logout = (event) => {
    //     event.preventDefault();
    //     Auth.logout();
    //   };
    return (
        <header className='absolute inset-x-0 top-0 bg-slate-950'>
            <div className="flex justify-center items-center h-screen">
                <img src="/images/bitterLogo1.JPG" className="nav-logo-link inline pl-10" alt="Bitter Logo"/>
            </div>
            <div className='flex inline'>
                <p className='absolute left-5 top-5 text-xl text-slate-200'>
                    Bitter
                </p>
                <div className='flex absolute top-5 right-10 inline'>
                    <Link className='border-2 rounded-l-3xl px-5 py-2 border-neutral-950 bg-sky-300' to=''>
                        <h3 className=''>Login</h3>
                    </Link>
                    <Link className='border-2 rounded-r-3xl border-neutral-950 px-4 py-2 bg-neutral-100' to=''>
                        <h3 className=''>Signup</h3>
                    </Link>
                </div>
            </div>


        </header>
    )
}

export default Header;