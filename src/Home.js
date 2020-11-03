import React from 'react'
import Banner from './images/banner.png'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'> 
            <img  className="home__image" src={Banner}/>
            {/* product id,title,price,rating,image */}
            {/* Product */}
            
            <div className="home__row">
            <Product
            id="1"
            title="Something I Never Told You"
            price={11.96}
            rating={5}
            image="https://rukminim1.flixcart.com/image/612/612/jvmpci80/book/9/0/6/something-i-never-told-you-original-imafd8htuwrnzf9k.jpeg?q=70"
            />

            <Product
            id="2"
            title="HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1024AX"

            price={59999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71FeUtw+TPL._AC_AA180_.jpg"
            />

</div>
<div className="home__row">
            <Product
            id="3"
            title="Envias Leatherette Side Sling Bags For Women's Ladies (Blue_EVS-111)"
            price={241.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71uMUyTBggL._AC_UL480_FMwebp_QL65_.jpg"
            />

            <Product
            id="4"
            title="LG 28 L Convection Microwave Oven (MC2846BG, Black,With Starter Kit)
            "
            price={11196}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/31knzlCPFdL._AC_US240_FMwebp_QL65_.jpg"
            />

<Product
            id="5"
            title="LG 7.0 Kg 5 Star Smart Inverter Fully-Automatic Top Loading Washing Machine (T70SKSF1Z, Middle Free Silver)"
            price={5596}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/31PYanbjxTL._AC_US240_FMwebp_QL65_.jpg"
            />

</div>


<div className="home__row">
            <Product
            id="6"
            title="LG LED 43 INCHES 4K Ultra HD 43UN7190PTA"
            price={19996}
            rating={5}
            image="https://m.media-amazon.com/images/I/81E4V3ITFgL._AC_UY327_FMwebp_QL65_.jpg"
            />


</div>

        </div>
    )
}

export default Home
