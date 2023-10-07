import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { useCommerce } from '../context/CommerceProvider'
function Detail() {
  const { id } = useParams()
  const { basket,setBasket } = useCommerce()
  const [info, setInfo] = useState(null)


  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.data)
      .then(data => {
        setInfo(data)
        console.log(data);
      })
  }, [id])

  const basketModal=(e)=>{
    setBasket([...basket,{image:e.image,title:e.title,id:e.id,price:e.price,count:1}])
    
    basket.map((item)=>{
      if(item.id==e.id){
        setBasket([...basket])
        item.count++
      }
    })
  }

  return (
    <div className='container'>
      <div className="row">
        {
          info && (
            <div className="col-sm-12 mt-5 info">
              <div className="row">
                <div className="col-sm-6 text-center">
                  <img src={info.image} style={{ width: "80%" }}></img>
                </div>
                <div className="col-sm-6 mt-5 text-center">
                  <div className='font-weight-bold ' style={{fontSize:"3rem"}}>{info.category}</div>
                  <div className='' style={{fontSize:"1.1rem"}}>{(info.description).substring(0, 100)}</div>
                  <div className='mt-4 ' style={{fontSize:"2rem"}}>{info.title}</div>
                  <div className='' style={{fontSize:"3rem"}}>{info.price}$</div>
                  <button onClick={()=>basketModal(info)} style={{ backgroundColor: "#6610f2" }} className='btn-lg btn-block  text-white mt-3'>Sepete Ekle</button>
                </div>
              </div>

            </div>
          )
        }


      </div>

    </div>
  )
}

export default Detail