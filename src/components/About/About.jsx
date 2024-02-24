import React from "react";
import style from "./About.module.css"

export default function About(){



    return<>
    <div className={`${style.bgAbout} `}>

        <h2 className="fw-bolder fs-1 text-white text-center">ABOUT COMPONENT</h2>


        <div className="d-flex justify-content-center align-items-center my-3" >
            <div className={`${style.starLine}`}></div>
            <i className="fa-solid fa-star text-white mx-3"></i>
            <div className={`${style.starLine}`}></div>
        </div>


        <div className="container">
            <div className="row text-white">

                <div className="col-md-6 px-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>

                <div className="col-md-6 px-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    </>
}