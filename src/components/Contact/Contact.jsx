import React from "react";
import style from "./Contact.module.css"

export default function Contact(){







    return<>
    
    <div className={`${style.contact}`}>
        <div>
            <h2 className={`fs-1 fw-bolder mb-3 ${style.myColor} text-center`}>CONTACT SECTION</h2>
        </div>

        <div className="d-flex justify-content-center align-items-center my-3" >
            <div className={`${style.starLine}`}></div>
            <i className={`fa-solid fa-star mx-3  ${style.myColor}`}></i>
            <div className={`${style.starLine}`}></div>
        </div>

        <form  className="w-50 mx-auto mt-5 py-3 ">
            <label htmlFor="" className="d-none">User Name :</label>
            <input type="text" placeholder="userName" className="form-control border-0 border-bottom py-3 my-3" />

            <label htmlFor="" className="d-none">User Name :</label>
            <input type="text" placeholder="userAge" className="form-control border-0 border-bottom py-3 my-3" />


            <label htmlFor="" className="d-none">User Name :</label>
            <input type="text" placeholder="userEmail" className="form-control border-0 border-bottom py-3 my-3" />

            <label htmlFor="" className="d-none">User Name :</label>
            <input type="text" placeholder="userPassword" className="form-control border-0 border-bottom py-3 my-3" />


            <button className={`btn my-4 ${style.myBtn} `} >Send Message</button>
        </form>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    </>
}