import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import logo from './images/logo2.png'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'
import {user} from './reducer'
 function Header() {
     const [{basket,user}] = useStateValue();
    const login =() =>{
        if(user){
            auth.signOut()
        }
    }
     return (
         <nav className='header'>
            <div className="logo_container">
             <Link to ="/">
             <img className='header__logo'
             src={logo}
             alt=''
             />
               </Link>
             </div> 

           
           {/*Search Box*/}
             <div className="header__search">
             <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon "/>

             </div>

         {/*3 links */} 

        <div  className='header__nav'>
            {/*link1*/}
            <Link to = {!user &&'/login'} className="header__link" >
                <div onClick={login} className="header__option">
     <span  className="header__optionLineOne">Hello {!user?"Guest":user.email}</span>
                    <span   className="header__optionLineTwo" >{user?'Sign Out' : 'Signin'}</span>
                    
                </div>
            
            </Link>
             {/*link2*/}

            <Link to ='/' className="header__link" >
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span  className="header__optionLineTwo"> & Orders</span>

                </div>
            
            
            
            </Link>


             {/*link3*/}
            <Link to ='/' className="header__link" >
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo" >Prime</span>

                </div>
            
            
            
            </Link>

        <Link to ='/checkout' className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
     <span className="header__optionLineTwo header__basketCount"> {basket?.length}</span>
            </div>

        </Link>    

             
             
             
             
             
        </div>   
            


             
             
         </nav>
     )
 }
 
 export default Header
 