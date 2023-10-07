import React from 'react'
import { useCommerce } from '../context/CommerceProvider'
import { AiOutlineClose } from "react-icons/ai"

function Card() {
  const { click, setClick, basket, setBasket } = useCommerce()

  const Increment=(e)=>{
    e.count++
    console.log(e);
  }
  
  const Decrement=(e)=>{
    
    basket.map((item)=>{
      if(item.id==e.id){
        item.count--

        if(e.count==0){
          let baskets=basket.filter(x=>x.id!=e.id)
          setBasket([...baskets])
          console.log(basket);
        }
      }

      
    })
    
    console.log(e);
  }

  return (
    <div className=' sticky-top border p-3' id='basket' style={{ float: "right", height: "100%", width: "20%", top: "0", right: "20%", display: `${click}`, borderRadius: "1rem" }}>
      <div className='d-flex justify-content-between' style={{ height: "20%" }}>
        <h5>Sepetim</h5>
        <AiOutlineClose size={25} style={{ cursor: "pointer" }} onClick={() => setClick(click ? "none" : "")}></AiOutlineClose>

      </div>

      <div>
        {
          basket.map((item, key) => (
            <div key={key} className="card mt-2 basketCard">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-4">
                        <img height="90px" width="70px" src={item.image}></img>
                      </div>
                      <div className="col-sm-8">
                        <div className='font-weight-bold' style={{fontSize:"15px"}}>{(item.title).substring(0,20)}</div>
                        <div>{item.price}$</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className='buttons text-center'>
                      <button onClick={()=>Increment(item)}>+</button>
                      <div>{item.count}</div>
                      <button onClick={()=>Decrement(item)}>-</button>
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>
          ))
        }


      </div>
    </div>
  )
}

export default Card