import React from "react";
import { NavLink } from "react-router-dom";
import dark from '../Assets/dark.png';
import light from '../Assets/light.png';
import logo from '../Assets/bitterLogo1.JPG';

const LightMode = () => {

    return (
        <div className='bg-black h-screen flex justify-center'>
            <div className='flex justify-center items-center'>
                <h4 className='text-stone-200 align-center text-5xl'><span className='flex justify-center'>There is only darkness here.</span> <br></br> The light cannot pierce through the bitterness.</h4>
                
                <div className='flex m-2 mt-4 absolute inset-x-50 bottom-36' >
                    <NavLink to='/lightmode' className='flex inline'>
                        <button className='flex inline border-2 bg-slate-600 border-stone-200 rounded-l-full w-20 h-20 p-2 hover:bg-stone-200'>
                            <img src={light} />
                        </button>
                        </NavLink>
                        <NavLink to='/'>
                            <button className='flex inline border-2 border-stone-200 rounded-r-full w-20 h-20 p-2 bg-stone-200 hover:bg-slate-600'>
                                <img src={dark} />
                            </button>
                        </NavLink>
                </div>
            </div>
            <div className='absolute left-20 top-20'>
                <img src={logo} className='border-2 rounded-full' style={{ width: '250px', height: '250px' }} />
            </div>
        </div>
        
    )
}

export default LightMode