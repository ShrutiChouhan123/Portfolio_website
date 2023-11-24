import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

function NavigationPage() {
    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container-fluid d-flex justify-content-between align-items-center" >
                    {/* <h1 class="logo me-auto me-lg-0"><a href="index.html">shruti</a></h1> */}
                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><Link to="/" style={{color:"white"}} >Home</Link></li>
                            <li><Link to="/about" >About</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>

                    
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    {/* <div class="header-social-links">
                        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                   </div> */}

            </div>
        </header >


    </>
  )
}

export default NavigationPage