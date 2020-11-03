import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import Logo from './images/logo2.png'
import {auth} from './firebase'
function Login() {

    const[email,setEmail] =useState("")
    const[password,setPassword] =useState("")
    let history = useHistory()

    const login =event=>{
        event.preventDefault();


        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{

            history.push("/")
        })
        .catch((e)=>alert(e.message))
    }


    const register =event=>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/")

        })

        .catch((e)=>alert(e.message))
    }




    return (
        <div className="login">
            <Link to ="/">
                <img 
                className="login__logo"

                src={Logo}
                
                
                
                />
            
            </Link> 
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)}  type="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password"></input>
                    <button onClick={login} type="submit" className=" login__sign">Sign In</button>
                </form>
                <p>
                By continuing, you agree to JantaBazar's Conditions of Use and Privacy Notice.

                </p>
                <button onClick={register} className="login__create">
                    Create Your Janta Bazar Account
                </button>

            </div>
          
        </div>
    )
}

export default Login
