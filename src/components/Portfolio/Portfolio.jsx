import React, { useState } from "react";
import style from "./Portfolio.module.css"

export default function Portfolio(){




    const [images , setImages] = useState([
        {img:'imgs/poert1.png' , id:'img1'},
        {img:'imgs/port2.png' , id:'img2'},
        {img:'imgs/port3.png' , id:'img3'},
        {img:'imgs/poert1.png' , id:'img4'},
        {img:'imgs/port2.png' , id:'img5'},
        {img:'imgs/port3.png' , id:'img6'}
    ])





    return<>
    
    <div className={`${style.portfolioMargin}`}>

        <div>
            <h2 className={`fs-1 fw-bold ${style.captionColor}`}>PORTFOLIO COMPONENT</h2>

            
            <div className="d-flex justify-content-center align-items-center my-3" >
                <div className={`${style.starLine}`}></div>
                <i className="fa-solid fa-star  mx-3"></i>
                <div className={`${style.starLine}`}></div>
            </div>

        </div>



        <div className="container">
            <div className="row g-5">

                {images.map((item)=>
                    <>
                    <div className='col-md-4'>
                    <div className={`position-relative  ${style.parent}`}>
                        <img  src={item.img} className={`w-100  ${style.roundImg}` }  alt="" />
                        <div data-bs-toggle="modal" data-bs-target={'#' + item.id}  className={`${style.cover}`}>
                        <i className={`fa-solid fa-plus ${style.plusIcon}`}   />
                        </div>
                    </div>


                </div></>
                )}
                {images.map((item)=>{
                    return<>
<div className="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-body p-0">
        <img src={item.img} className="w-100" alt="" />
      </div>

    </div>
  </div>
</div>
                    </>
                })}

            </div>
        </div>

    </div>
    
    
    </>
}

