import React from "react";
import style from "./Footer.module.css"


export default function Footer(){



    return<>
    
    <div className={`${style.bgFooter} w-100 ${style.myPadding} `}>
        <div className="container">
            <div className="row">

                <div className="col-md-4">
                    <div className="text-white text-center " >
                        <h3 >LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="text-white text-center" >
                        <h3>AROUND THE WEB</h3>
                        <div className="icons">
                            <i className={`${style.icon} fa-brands fa-facebook mx-1`}></i>
                            <i className={`${style.icon} fa-brands fa-twitter mx-1`}></i>
                            <i className={`${style.icon} fa-brands fa-linkedin-in mx-1`}></i>
                            <i className={`${style.icon} fa-solid fa-globe mx-1`}></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="text-white text-center" >
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
}