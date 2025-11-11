import React from 'react'
import "../App.css"
import {Link} from "react-router-dom";

export default function LandingPage() {
  return (
    <div className='landingPageContainer'>
      <nav className=''>
        <div className='navHeader'>
          <h2>Video Call</h2>
        </div>
        <div className='navList'>
              <p>Join as Guest</p>
              <p>Register</p>
              <div role='button' style={{backgroundColor: "red"}}>
                <p>Login</p>
              </div>
        </div>
        </nav>

        <div className="landingMainContainer">
          
            <div>
              <h1> <span style={{color: "#ff9839ff"}}>Content</span> with your <p>Loved Ones</p></h1>
              <p>Cover a distance by Aditya Video Call</p>
              <div role='button'>
                <Link to="/auth">Get Started</Link>
              </div>
              
            </div>
            <div>
              <img src="/mobile.png" alt="" />
            </div>
          </div>
          
        </div>
      

  );
}