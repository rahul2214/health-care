import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavBar from "../../UserNavBar";
import { useNavigate } from "react-router-dom";
const UserHome = () => {
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate();

    //Getting all the data from the json file when the component gets mounted.
    useEffect(() => {
        axios.get("http://localhost:4500/coaches").then((res) => {
            setHotels(res.data);
        });
    }, []);
    console.log(hotels);


    return (
        <div >
            <UserNavBar />
            {hotels.length > 0 ? (
                hotels.map((hotel) => {
                    return (
                        <div key={hotel.id} className="card">


                            <img src={hotel.imageUrl} alt="images" className="card-img" />

                            <div className="card-body">
                                <h2>{hotel.name}</h2>
                                <h4>Coach Id:{hotel.id}</h4>
                                <p>Mobile No:{hotel.mobileNumber}</p>
                                <p>speciality:{hotel.speciality}</p>
                                <button className="btn" onClick={() => navigate('/bookappointment/' + hotel.id)}>Book An Appointment</button>

                            </div>


                        </div>
                    );
                })
            ) : (
                <div>No data found</div>
            )}



        </div>
    );
};
export default UserHome;
