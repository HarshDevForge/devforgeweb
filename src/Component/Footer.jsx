import React from 'react';
import '../Style/Footer.css'; 
import Logo from '../assets/Logo.png';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h2>Contact Us</h2>
          <p>Address <br/>
             907,Capital Icon, Sargasan, Gandhinagar, Gujarat 382421
          </p>
          <p>Email Address <br/>
             connect@trydevforge.com
          </p>
          <p>Phone<br/>
             +91 9327780842
          </p>
        </div>
        <div className='footer-section'>
          <h2>Technology</h2>
          <p>React Js</p>
        </div>
        <div className='footer-section'>
          <h2>Navigations</h2>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Career</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Technology</a></li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <img src={Logo} alt='logo' className='logo'/>
        <p> Copyright &copy; 2024. All Rights Reserved by DevForge Technology Pvt. Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
