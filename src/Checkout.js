import React from 'react'
import {useStateValue} from './StateProvider'
import Image from './images/banner4.mp4'
import './Checkout.css'
import CheckoutProduct from './CheckProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{basket}]  = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <video  autoPlay loop muted  className="checkout__ad">
               <source src={Image} type="video/mp4"/>   
                   </video>
                {basket?.length==0  ?(
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket.To buy one 
                            or add click "Add to basket" next to the item.
                        </p>
                    </div>
                    

                ):(
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List out all of the checkout product */}
                        {basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            
                            
                            />
                         ) )}
                        
                    </div>

                )

                }

            </div>   
            {basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal/>
                       
                    
                    
                    
                    
                 </div>
            )}
        </div>
    )
}

export default Checkout
