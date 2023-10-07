import React, { useEffect, useState } from 'react'

import { BsLightbulb, BsBasketFill,BsMoonStarsFill } from "react-icons/bs"
import { useCommerce } from '../context/CommerceProvider'
import {  Link } from "react-router-dom";

function Navbar() {
    const [color,setColor]=useState(false)
    const {click,setClick,inputs,setInputs,basket,setBasket}=useCommerce()
   
    useEffect(()=>{
        const body=document.getElementById('root')
        if(color){
            body.style.backgroundColor="black"
            body.style.color="gray"
        }else{
            body.style.backgroundColor="white"
            body.style.color="black"
        }
    },[color])

    return (
        <div className=' bg-light'>
            <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand font-weight-bold" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control mr-sm-2" type="search" value={inputs} placeholder="Search" aria-label="Search" onChange={(e)=>setInputs(e.target.value)}></input>
                        <div onClick={()=>setColor(!color)}>
                            {
                                color ? <BsMoonStarsFill className='mr-3' size={25} style={{cursor:"pointer"}}></BsMoonStarsFill> : <BsLightbulb className='mr-3' size={25} style={{cursor:"pointer"}}></BsLightbulb> 
                            }
                            
                        </div>
                        <div onClick={()=>setClick(click==="none"  ? "block" : "none")}>
                            <BsBasketFill style={{cursor:"pointer"}}  size={25}></BsBasketFill>
                            <span className='px-1 bg-danger text-white' style={{borderRadius:"50%"}}>{basket.length}</span>
                        </div>
                        
                    </form>
                </div>
            </nav>
            </div>
            

        </div>
    )
}

export default Navbar