import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSidebar from '../components/RightSidebar/RightSidebar';
import LoginForm from "../components/Login/Login";

export default function Login() {
    return(
        <>
        <Header />
        <LeftSidebar />
        <LoginForm />
        <RightSidebar />
        <Footer />
        </>
    )
}