import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Harry's Restaurant</h3>
            <p>Serving authentic Indian vegetarian cuisine with love, tradition, and excellence since 2010.</p>
            <p>We are committed to providing an exceptional dining experience with every visit.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p>123 Food Street, Hyderabad</p>
            <p> +91 98765 43210</p>
            <p> reservations@harrysrestaurant.com</p>
          </div>
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <p><strong>Monday - Friday</strong><br/>11:00 AM - 11:00 PM</p>
            <p><strong>Saturday - Sunday</strong><br/>10:00 AM - 12:00 AM</p>
            <p><strong>Kitchen Closes:</strong> 30 minutes before closing</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">HARRY'S</div>
          <div className="right">
            <p>Tower Chowk, Ujjain</p>
            <p>Open: 09:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Harsh Padiyar</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By @harshpadiyar.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Harry's Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;