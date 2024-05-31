import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css'
const Home = () => {
    const navigate = useNavigate();





    return (
        <div>
            <nav style={{ backgroundColor: "#a78181", height: "60px", fontSize: "24px", color: "white", paddingLeft: "20px", paddingTop: "10px" }}>WeCare</nav>

            <h1>We are at the heart of appropriate Care</h1>

            <div className="body-form">

                <div className="booking-card">

                    <div className="booking-form">
                        <img src="" alt="" />
                        <button onClick={() => navigate('/coachlogin')}>Login as Coach</button>
                        <button onClick={() => navigate('/coachsignup')}>Join as a Coach</button>


                    </div>


                </div>
                <div className="booking-card">

                    <div className="booking-form">
                        <img src="" alt="" />
                        <button onClick={() => navigate('/userlogin')}>Login as User</button>
                        <button onClick={() => navigate('/usersignup')}>Join as a User</button>


                    </div>


                </div>



            </div>
        </div>
    );
};
export default Home;
