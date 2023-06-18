import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Assets/bitterLogo1.JPG';
import './error.css';

const Error = () => {
    return (
        <div className="error">
            <div className="sky">
                <h2><span>4</span><span>0</span><span>4</span></h2>
                <div className="grass"></div>
                <img src={logo} className="bird" />
            </div>
            <div className="field">
                <h2>Opps... Looks like you aren't bitter enough...</h2>
                <NavLink to='/' className='backBtn'>Go Back To Bitter </NavLink>
            </div>
        </div>
    )
}

export default Error