import React, { useState } from 'react';
import "../css/Login.css";
import Logo from "../Images/Logo.png";
import SignUpScreen from './SignUpScreen';
function Login() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='login'>
            <div className='login_header'>
                <img src={Logo} className='login_logo' alt='Logo' />
                <button className='login_button'>
                    Sign In
                </button>
            </div>

            <div className='login_body'>
                {
                    signIn ? (<SignUpScreen />) : (

                        <>

                            <h1>Unlimited movies, TV shows and more</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <form className='login_form'>
                                <input type='text' placeholder='Email address' />
                                <button onClick={() => setSignIn(true)}>Get Started  > </button>
                            </form>

                        </>
                    )
                }
            </div>
            <div className='login_gradient'></div>


        </div >
    )
}

export default Login
