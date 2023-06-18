import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import RightSidebar from '../components/RightSidebar/RightSidebar';
import Settings from "../components/Settings/Settings";

export default function SettingsLayout() {
    return(
        <>
        <Header />
        <LeftSidebar />
        <Settings />
        <RightSidebar />
        <Footer />
        </>
    )
}