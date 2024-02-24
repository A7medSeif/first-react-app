import React from "react";
import style from "./Start.module.css"

export default function Start(){







    return<>
    
    <div className={`${style.bgStart} w-100 text-center  py-4 `  }>


        <div>
        <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className=" d-block mx-auto" height={270} alt="" />
        </div>


        <div>
            <h1 className="text-white mt-5 fs-1 fw-bolder">START FRAMEWORK</h1>
        </div>

        <div className="d-flex justify-content-center align-items-center my-3" >
            <div className={`${style.starLine}`}></div>
            <i className="fa-solid fa-star text-white mx-3"></i>
            <div className={`${style.starLine}`}></div>
        </div>


        <div className="text-white mb-4">
        Graphic Artist - Web Designer - Illustrator
        </div>
    </div>
    
    </>
}