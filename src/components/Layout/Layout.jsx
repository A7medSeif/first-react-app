import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Copy from "../Copyright/Copy";


export default function Layout(){

    return<>

    
    <Navbar/>
    <Outlet/>
    <Footer/>
    <Copy/>
    
    
    </>
}