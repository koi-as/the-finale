import React from "react";
import './profile.css'

export default function Profile() {
    return (
        <div className='container bg-slate-800 flex justify-center absolute ml-64 inset-y-24 border-2 w-8/12'>
            <div className='feed-cont flex inline-flex flex-col'>
                <div className="profile-title">
                    <h1 className="profile-header text-center text-slate-200">Profile</h1>
                </div>
                <div className="about-containter text-center">
                    <h2 className="title mb-2 text-slate-300">About Me</h2>
                    <textarea className="about rounded-xl p-2" placeholder="About Me"></textarea>
                </div>
                <div className="gender-container text-center">
                    <h2 className="title mb-0 text-slate-300">Gender</h2>
                    <div className='text-slate-300'>
                        <input type="radio" id="male" value="male" name="gender"/>
                        <label className="font-semibold py-2 px-4 cursor-pointer rounded-l" for="male">Male</label>
                        <input type="radio" id="female" value="female" name="gender" />
                        <label className="font-semibold py-2 px-4 cursor-pointer" for="female">Female</label>
                        <input type="radio" id="non-binary" value="non-binary" name="gender" />
                        <label className="font-semibold py-2 px-4 cursor-pointer rounded-r" for="non-binary">Non-Binary</label>
                        <input type="radio" id="" value="" name="gender" />
                        <label className="font-semibold py-2 px-4 cursor-pointer rounded-r" for="non-binary">Why do you need to know?</label>
                    </div>
                </div>
            </div>
        </div>
    )
}