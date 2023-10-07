import React, { useEffect } from 'react'
import { useCommerce } from '../context/CommerceProvider'
import { Link, useParams } from "react-router-dom";


function Home() {
  const { products,inputs,basket,setBasket } = useCommerce()

  const filterText=products.filter(x=>Object.values(x).toString().toLowerCase().includes(inputs.toLowerCase()))

  const basketModal=(e)=>{
    
    setBasket([...basket,{image:e.image,title:e.title,id:e.id,price:e.price,count:1}])
    console.log(basket);

    basket.map((item)=>{
      if(item.id==e.id){
        setBasket([...basket])
        item.count++
      }
    })
  }

  return (
    <div className='row mt-3'>
      {
        filterText.map((item, key) => (
          <div key={key} className="col-sm-4 mt-3">
            <div className="card">
              <div className="card-body">
                <Link to={`/detail/${item.id}`}>
                  <img style={{ marginLeft: "30%" }} width="50%" height="100px" src={item.image}></img>
                </Link>
                <div className='font-weight-bold text-center mt-2'>{(item.title).substring(0, 30)}...</div>
                <div className='text-center mt-2'>{(item.description).substring(0, 45)}....</div>
                <div className='text-center font-weight-bold mt-2'>{item.price} TL</div>

              </div>
              <div className="card-footer" style={{ border: "none", backgroundColor: "white" }}>
                <button onClick={()=>basketModal(item)} style={{ backgroundColor: "#6610f2" }} className='btn-lg btn-block text-center text-white'>Sepete Ekle</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home