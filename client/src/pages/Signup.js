import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import SignUp from "../components/SignUp/SignUp";

export default function LoginLayout() {
    return(
        <>
        <Header />
        <LeftSidebar />
        <SignUp />
        <Footer />
        </>
    )
}