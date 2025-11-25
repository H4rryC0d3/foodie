import React, { useState } from "react";
import { HiOutlineArrowNarrowRight, HiCheckCircle, HiClock, HiUsers, HiStar } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");
    const [guests, setGuests] = useState("2");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                 "https://foodie-g5yq.onrender.com/api/v1/reservation/send",
                { firstName, lastName, email, phone, date, time, guests },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );

            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setTime("");
            setDate("");
            setGuests("2");
            navigate("/success");
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <ReservationSection>
            <div className="container" id="reservation">
                {/* Left Side - Features & Info */}
                <div className="banner">
                    <div className="info-section">
                        <div className="badge">
                            <HiStar />
                            <span>Book Your Table</span>
                        </div>
                        
                        <h2 className="section-title">Reserve Your <span className="highlight">Perfect Dining</span> Experience</h2>
                        
                        <p className="section-description">
                            Experience exceptional dining with our seamless reservation system. 
                            Choose your preferred time, and we'll ensure everything is ready for your arrival.
                        </p>

                        {/* Features Grid */}
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <HiCheckCircle />
                                </div>
                                <div className="feature-content">
                                    <h4>Instant Confirmation</h4>
                                    <p>Get immediate booking confirmation via email and SMS</p>
                                </div>
                            </div>

                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <HiClock />
                                </div>
                                <div className="feature-content">
                                    <h4>Flexible Timing</h4>
                                    <p>Choose from available slots throughout the day</p>
                                </div>
                            </div>

                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <HiUsers />
                                </div>
                                <div className="feature-content">
                                    <h4>Group Bookings</h4>
                                    <p>Perfect for families, friends, or business meetings</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="stats-section">
                            <div className="stat-item">
                                <span className="stat-number">5000+</span>
                                <span className="stat-label">Happy Customers</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">4.9</span>
                                <span className="stat-label">Average Rating</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Online Booking</span>
                            </div>
                        </div>

                        {/* Popular Times */}
                        <div className="popular-times">
                            <h4>🔥 Popular Time Slots</h4>
                            <div className="time-chips">
                                <span className="time-chip">12:00 PM - Lunch Rush</span>
                                <span className="time-chip">7:00 PM - Dinner Peak</span>
                                <span className="time-chip">9:00 PM - Late Evening</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Reservation Form */}
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call: <strong>+1 (555) 123-4567</strong></p>
                        
                        <form onSubmit={handleReservation}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    placeholder="Date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                />
                                <input
                                    type="time"
                                    placeholder="Time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <select
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    required
                                >
                                    <option value="">Number of Guests</option>
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4 Guests</option>
                                    <option value="5">5 Guests</option>
                                    <option value="6">6 Guests</option>
                                    <option value="7+">7+ Guests</option>
                                </select>
                            </div>
                            
                            <div className="form-note">
                                <small>💡 Tip: Book at least 2 hours in advance for better availability</small>
                            </div>

                            <button type="submit">
                                RESERVE NOW <span><HiOutlineArrowNarrowRight /></span>
                            </button>
                        </form>

                        <div className="form-footer">
                            <p>✓ Free cancellation up to 2 hours before</p>
                            <p>✓ No booking fees or hidden charges</p>
                        </div>
                    </div>
                </div>
            </div>
        </ReservationSection>
    );
};

export default Reservation;

const ReservationSection = styled.section`
    display: flex;
    min-height: 100vh;
    padding: 60px 20px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f5f1e8 0%, #ede8dd 50%, #e8e0d0 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(/reserve.svg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0.05;
        z-index: 0;
    }

    .container {
        max-width: 1400px;
        display: flex;
        gap: 60px;
        position: relative;
        z-index: 1;
        align-items: center;
    }

    .banner {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    /* Left Section - Info */
    .info-section {
        max-width: 550px;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(253, 181, 0, 0.1);
        border: 1px solid rgba(253, 181, 0, 0.3);
        padding: 8px 20px;
        border-radius: 50px;
        backdrop-filter: blur(10px);
        margin-bottom: 25px;
    }

    .badge svg {
        color: #fdb500;
        font-size: 18px;
    }

    .badge span {
        color: #c79100;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    .section-title {
        font-size: 3.5rem;
        font-weight: 700;
        color: #1a1a1a;
        line-height: 1.2;
        letter-spacing: -1.5px;
        margin-bottom: 20px;
    }

    .section-title .highlight {
        color: #fdb500;
        position: relative;
        display: inline-block;
    }

    .section-description {
        color: #666;
        font-size: 18px;
        line-height: 1.8;
        margin-bottom: 40px;
    }

    .features-grid {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;
    }

    .feature-card {
        display: flex;
        gap: 15px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 16px;
        border: 1px solid rgba(253, 181, 0, 0.2);
        transition: all 0.3s ease;
    }

    .feature-card:hover {
        background: rgba(255, 255, 255, 0.9);
        border-color: #fdb500;
        transform: translateX(5px);
    }

    .icon-wrapper {
        width: 45px;
        height: 45px;
        background: #fdb500;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .icon-wrapper svg {
        color: white;
        font-size: 24px;
    }

    .feature-content h4 {
        color: #1a1a1a;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .feature-content p {
        color: #666;
        font-size: 14px;
        line-height: 1.5;
        margin: 0;
    }

    .stats-section {
        display: flex;
        align-items: center;
        gap: 30px;
        padding: 25px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 16px;
        border: 1px solid rgba(253, 181, 0, 0.2);
        margin-bottom: 30px;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .stat-number {
        font-size: 2rem;
        font-weight: 700;
        color: #fdb500;
        line-height: 1;
    }

    .stat-label {
        font-size: 13px;
        color: #666;
    }

    .stat-divider {
        width: 1px;
        height: 40px;
        background: rgba(253, 181, 0, 0.3);
    }

    .popular-times {
        padding: 20px;
        background: rgba(253, 181, 0, 0.1);
        border-radius: 16px;
        border: 1px solid rgba(253, 181, 0, 0.3);
    }

    .popular-times h4 {
        color: #1a1a1a;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .time-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .time-chip {
        display: inline-block;
        padding: 8px 16px;
        background: white;
        border: 1px solid rgba(253, 181, 0, 0.3);
        border-radius: 50px;
        font-size: 13px;
        color: #666;
        font-weight: 500;
    }

    /* Right Section - Form */
    .reservation_form_box {
        width: 100%;
        max-width: 500px;
        background: rgba(255, 255, 255, 0.95);
        padding: 40px 35px;
        border-radius: 24px;
        border: 2px solid rgba(253, 181, 0, 0.3);
        box-shadow: 0 25px 50px rgba(253, 181, 0, 0.2);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }

    .reservation_form_box:hover {
        transform: translateY(-5px);
        box-shadow: 0 35px 70px rgba(253, 181, 0, 0.3);
        border-color: #fdb500;
    }

    .reservation_form_box h1 {
        font-weight: 700;
        font-size: 2.5rem;
        text-align: center;
        color: #1a1a1a;
        letter-spacing: -1px;
        margin-bottom: 10px;
    }

    .reservation_form_box p {
        color: #666;
        font-size: 15px;
        text-align: center;
        margin-bottom: 35px;
        font-weight: 300;
    }

    .reservation_form_box p strong {
        color: #fdb500;
        font-weight: 600;
    }

    form div {
        display: flex;
        gap: 15px;
        margin-bottom: 20px;
    }

    form input,
    form select {
        flex: 1;
        padding: 14px 16px;
        font-size: 15px;
        border: 2px solid rgba(253, 181, 0, 0.2);
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.8);
        color: #1a1a1a;
        transition: all 0.3s ease;
        font-family: inherit;
    }

    form select {
        width: 100%;
        cursor: pointer;
    }

    form input::placeholder {
        color: #999;
    }

    form input:focus,
    form select:focus {
        outline: none;
        border-color: #fdb500;
        background: #fff;
        box-shadow: 0 0 0 4px rgba(253, 181, 0, 0.1);
    }

    .form-note {
        background: rgba(253, 181, 0, 0.1);
        border: 1px solid rgba(253, 181, 0, 0.3);
        border-radius: 10px;
        padding: 12px 16px;
        margin-bottom: 25px;
    }

    .form-note small {
        color: #c79100;
        font-size: 13px;
        font-weight: 500;
    }

    button {
        background: #fdb500;
        color: #fff;
        border: none;
        padding: 16px 36px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin: 0 auto;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(253, 181, 0, 0.3);
        width: 100%;
    }

    button:hover {
        background: #e5a300;
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(253, 181, 0, 0.5);
    }

    button span {
        margin-left: 1rem;
        padding: 6px;
        background: #fff;
        border-radius: 100%;
        color: #fdb500;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    button:hover span {
        transform: translateX(3px);
    }

    .form-footer {
        margin-top: 25px;
        padding-top: 20px;
        border-top: 1px solid rgba(253, 181, 0, 0.2);
    }

    .form-footer p {
        text-align: left;
        font-size: 13px;
        color: #666;
        margin-bottom: 8px;
    }

    @media (max-width: 1024px) {
        .container {
            flex-direction: column;
            gap: 50px;
        }

        .section-title {
            font-size: 3rem;
        }
    }

    @media (max-width: 768px) {
        padding: 40px 15px;

        .section-title {
            font-size: 2.5rem;
            text-align: center;
        }

        .section-description {
            text-align: center;
        }

        .badge {
            margin: 0 auto 25px;
        }

        .stats-section {
            flex-wrap: wrap;
            gap: 20px;
        }

        .stat-divider {
            display: none;
        }

        form div {
            flex-direction: column;
        }

        .reservation_form_box {
            padding: 30px 25px;
        }

        .reservation_form_box h1 {
            font-size: 2rem;
        }
    }

    @media (max-width: 520px) {
        .section-title {
            font-size: 2rem;
        }

        .time-chips {
            flex-direction: column;
        }

        .time-chip {
            text-align: center;
        }
    }
`;