import React from 'react';
import './Footer.css'
export default function Footer(){
    return (
        <div className='footer-container'>
            <div className='Footer'>
                <div className='footer-heading f1'>
                    <h2>About Us</h2>
                    <a href="#">Example</a>
                    <a href="#">Demo</a>
                    <a href="#">Clients</a>
                    <a href="#">Investors</a>
                    <a href="#">Projects</a>
                </div>
                <div className='footer-heading f2'>
                    <h2>Contact Us</h2>
                    <a href="#">Jobs</a>
                    <a href="#">Example</a>
                    <a href="#">Contact</a>
                </div>
                <div className='footer-heading f3'>
                    <h2>Social Media</h2>
                    <a href="#"> <i class="fab fa-facebook-f"></i> Facebook</a>
                    <a href="#"> <i class="fab fa-youtube"></i> YouTube</a>
                    <a href="#"> <i class="fab fa-twitter-square"></i> Twitter</a>
                </div>
                <div className='footer-email'>
                    <h2>Join newsletter</h2>
                    <input 
                    type="email"
                    placeholder="Enter your email address"
                    id="footer-email" />
                    <input type="submit" value="Sign up"
                    id="footer-email-btn"/>




                   
                </div>
        

            </div>
        </div>
    )
}