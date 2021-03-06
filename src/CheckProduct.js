import React from 'react'
import './CheckProduct.css'
import {useStateValue} from './StateProvider'

function CheckProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] =useStateValue()    
    const RemoveFromBasket =()=>{
        //remove item from basket

        dispatch({
            type:'REMOVE_FROM_BASKET'
            ,id:id,
        })


    }
    
    
    return (
        <div className="checkProduct">
            <img className="checkoutProduct__image" src={image}/>
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title"> {title}</p>
            <p className="checkoutProduct__price">
                
                <small>₹    </small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating).fill().map((_)=>(
                  <p>
                      ⭐
                  </p>
              ))}
              </div>
              <button onClick={RemoveFromBasket} >Remove from Basket</button>
            
             </div>
             
        </div>
    )
}

export default CheckProduct


// 