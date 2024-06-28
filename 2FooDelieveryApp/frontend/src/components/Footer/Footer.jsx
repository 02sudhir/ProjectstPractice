import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={assets.logo2} alt="logo"/> */}
            <p>At Tomato , we are committed to delivering your favorite meals quickly and fresh. Our mission is to make your dining experience convenient and enjoyable.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="fotter-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="footer-content-right"> 
        <h2>Get in touch</h2>
        <ul>
            <li>+1-654-1321</li>
            <li>contact@sudhir.dev</li>
        </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyrite">Copyright 2024 @ sudhir.dev -All Rights Reserved</p>
    
    </div>
  );
};

export default Footer;
