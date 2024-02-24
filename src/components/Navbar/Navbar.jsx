import React from "react";
import style from  "./Navbar.module.css"
import { Link } from "react-router-dom";

export default function Navbar(){



    return<>
    <nav className={`navbar navbar-expand-lg navbar-dark z-3 ${style.navBg} position-fixed w-100 top-0 py-4`}>
  <div className="container">
    <Link className="navbar-brand fs-2 fw-bolder" to="startframework" >START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        
        <li className="nav-item me-3">
          <Link className="nav-link text-white fw-bold" to="about">ABOUT</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link text-white fw-bold" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link text-white fw-bold" to="contact">CONTACT</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    
    
    
    </>
} 