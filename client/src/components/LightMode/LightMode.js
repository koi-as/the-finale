import React from "react";
import { NavLink } from "react-router-dom";
import dark from '../Assets/dark.png';
import light from '../Assets/light.png';

const LightMode = () => {

    return (
        <div className='bg-black h-screen flex justify-center'>
            <h4 className='text-stone-200 align-center'>There is only darkness here. The light cannot pierce through the bitterness.</h4>
            <div className='flex inline m-2 mt-4' >
                <NavLink to='/lightmode' className='flex inline'>
                    <button className='flex inline border-2 border-stone-200 rounded-l-full w-12 h-12 p-2 hover:bg-stone-200'>
                        <img src={light} />
                    </button>
                    </NavLink>
                    <NavLink to='/'>
                        <button className='flex inline border-2 border-stone-200 rounded-r-full w-12 h-12 p-2 bg-stone-200'>
                            <img src={dark} />
                        </button>
                    </NavLink>
            </div>
        </div>
        
    )
}

export default LightMode