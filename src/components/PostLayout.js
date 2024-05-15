import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
    return (
        <>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default PageLayout;