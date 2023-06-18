import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Profile from "../components/Profile/Profile";

export default function ProfileLayout() {
    return(
        <>
        <Header />
        <LeftSidebar />
        <Profile />
        <RightSidebar />
        <Footer />
        </>
    )
}