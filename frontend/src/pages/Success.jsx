import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import "../pages/Success.css";

const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Countdown and redirect
  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className={`success ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          {/* Left Section - Icon & Image */}
          <div className="left-section">
            {/* Animated Success Icon */}
            <div className="success-icon bounce-in">
              <FaCheckCircle />
            </div>

            {/* Success Image */}
            <img src="/sandwich.png" alt="success" className="slide-up" />
          </div>

          {/* Right Section - Content */}
          <div className="right-section">
            {/* Success Title */}
            <h1 className="slide-up delay-1">
              Order <span className="highlight">Successfully</span> Placed! 🎉
            </h1>

            {/* Success Message */}
            <p className="success-message slide-up delay-2">
              Thank you for choosing Harry's! Your delicious meal is being prepared with care. We appreciate your order and can't wait to serve you!
            </p>

            {/* Progress Bar with Countdown */}
            <div className="progress-container slide-up delay-3">
              <div className="progress-text">
                🏠 Redirecting to Home in <strong>{countdown}</strong> seconds...
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{
                    animation: `shrink 5s linear forwards`
                  }}
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="button-group slide-up delay-4">
              <Link to="/" className="primary-btn">
                Back to Home <HiOutlineArrowNarrowRight />
              </Link>
            </div>
          </div>

          {/* Floating Confetti */}
          <div className="confetti">
            {[...Array(15)].map((_, index) => (
              <div 
                key={index} 
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  backgroundColor: index % 3 === 0 ? '#fdb500' : index % 3 === 1 ? '#fff' : '#e5a300'
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;