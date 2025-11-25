import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="content-wrapper">
            <div className="top">
              <span className="label">ABOUT US</span>
              <h1 className="heading">The Only Thing We're Serious About Is Food.</h1>
              <p className="tagline">Crafting memorable dining experiences since day one</p>
            </div>
            
            <p className="mid">
              Welcome to HARRY's Restaurant where great food meets warm hospitality! We pride ourselves on serving fresh,
              high-quality dishes crafted with love and locally sourced ingredients. Our cozy ambiance and attentive service
              make us the perfect spot for family gatherings, casual outings, or special occasions.
            </p>
            
            <div className="features">
              <div className="feature-item">
                <div className="icon">🍽️</div>
                <h3>Fresh Ingredients</h3>
                <p>Locally sourced, farm-to-table quality</p>
              </div>
              <div className="feature-item">
                <div className="icon">👨‍🍳</div>
                <h3>Expert Chefs</h3>
                <p>Passionate culinary artisans</p>
              </div>
              <div className="feature-item">
                <div className="icon">❤️</div>
                <h3>Made with Love</h3>
                <p>Every dish tells a story</p>
              </div>
            </div>
            
            <Link to={"/"} className="explore-btn">
              Explore Menu
              <span>
                <HiOutlineArrowNarrowRight/>
              </span>
            </Link>
          </div>
        </div>
        
        <div className="banner">
          <div className="journey-timeline">
            <div className="timeline-header">
              <h2>Our Journey</h2>
              <p>From humble beginnings to culinary excellence</p>
            </div>
            
            <div className="timeline-content">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="year">2009</div>
                  <h3>The Beginning</h3>
                  <p>Started with a small kitchen and big dreams</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="year">2014</div>
                  <h3>First Award</h3>
                  <p>Recognized as Best New Restaurant</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="year">2018</div>
                  <h3>Expansion</h3>
                  <p>Opened our second location</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card active">
                  <div className="year">2024</div>
                  <h3>Today</h3>
                  <p>Serving 500+ happy customers daily</p>
                </div>
              </div>
            </div>
            
            <div className="values-grid">
              <div className="value-box">
                <span className="value-icon">🏆</span>
                <span className="value-text">Excellence</span>
              </div>
              <div className="value-box">
                <span className="value-icon">🤝</span>
                <span className="value-text">Trust</span>
              </div>
              <div className="value-box">
                <span className="value-icon">💡</span>
                <span className="value-text">Innovation</span>
              </div>
              <div className="value-box">
                <span className="value-icon">🌱</span>
                <span className="value-text">Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;