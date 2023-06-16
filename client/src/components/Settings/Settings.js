import React from "react";
import './settings.css'

export default function Settings() {
    return (
        <div className='container bg-slate-800 flex justify-center absolute ml-64 inset-y-20 border-2 w-8/12'>
            <div className='feed-cont flex inline-flex flex-col'>
                <div className="settings-title">
                    <h1 className="settings-header">Settings</h1>
                </div>
                <div className="settings-options">
                    <div>Setting 1</div>
                        <input type="checkbox"></input>
                    <div>Setting 2</div>
                        <input type="checkbox"></input>
                    <div>Setting 3</div>
                        <input type="checkbox"></input>
                    <div>Setting 4</div>
                        <input type="checkbox"></input>
                    <div>Setting 5</div>
                        <input type="checkbox"></input>
                    <div>Setting 6</div>
                        <input type="checkbox"></input>
                </div>
            </div>
        </div>
    )
}