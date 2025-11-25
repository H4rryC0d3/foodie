import React from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="content-wrapper">
            <div className="badge">
              <span>🔥 Fresh & Delicious</span>
            </div>
            
            <h1 className="title">
              Discover The Best <span className="highlight">Food</span> Experience
            </h1>
            
            <p className="description">
              Indulge in culinary excellence where every dish tells a story. From farm-fresh 
              ingredients to world-class flavors, we bring you an unforgettable dining experience.
            </p>
            
            <div className="buttons-group">
              <Link to="menu" smooth={true} duration={500} offset={-80}>
                <button className="primary-btn">Explore Menu</button>
              </Link>
              <Link to="reservation" smooth={true} duration={500} offset={-80}>
                <button className="secondary-btn">Book A Table</button>
              </Link>
            </div>
            
            <div className="stats">
              <div className="stat-item">
                <span className="number">500+</span>
                <span className="label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="number">50+</span>
                <span className="label">Delicious Dishes</span>
              </div>
              <div className="stat-item">
                <span className="number">15+</span>
                <span className="label">Expert Chefs</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="banner">
          <div className="image-wrapper">
            <div className="image-grid">
              <div className="main-image">
                <img src="./hero1.jpg" alt="Delicious Food" />
                <div className="image-badge">
                  <span>⭐ Most Popular</span>
                </div>
              </div>
              <div className="side-image">
                <img src="./hero2.jpg" alt="Special Dishes" />
              </div>
            </div>
            <div className="floating-card">
              <img className="logo" src="logo.svg" alt="logo" />
              <p>Harry's Restaurant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;