import { createContext,useContext, useEffect, useState } from "react";
import axios from "axios";


const eCommerce=createContext();


export const CommerceProvider=({children})=>{

    const [click,setClick]=useState("none")
    const [products,setProducts]=useState([])
    const [basket,setBasket]=useState([]);
    const [inputs,setInputs]=useState('')

    useEffect(()=>{
        axios("https://fakestoreapi.com/products")
        .then(res=>res.data)
        .then(data=>setProducts(data))
    },[])

    const values={
        click,setClick,products,setProducts,inputs,setInputs,basket,setBasket
    }

    return <eCommerce.Provider value={values}>{children}</eCommerce.Provider>
}

export const useCommerce=()=>useContext(eCommerce);