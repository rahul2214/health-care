import React, { useState, useEffect } from "react";
import NavBar from "../../CoachNavBar";
import axios from "axios";
const CoachHome = () => {
    const [hotels, setHotels] = useState([]);

    //Getting all the data from the json file when the component gets mounted.
    useEffect(() => {
        axios.get("http://localhost:4500/bookings").then((res) => {
            setHotels(res.data);

        });
    }, []);



    return (
        <div><NavBar />
            <div className="body-form">

                {hotels.length > 0 ? (
                    hotels.map((hotel) => {
                        return (
                            <div key={hotel.id} className="booking-card">
                                <div>
                                    <h1>Appointment Date:{hotel.appointmentDate}</h1>
                                    <p>Slot : {hotel.slot}</p>
                                    <p>Booking Id : {hotel.id}</p>
                                    <p>user Id : {hotel.userId}</p>

                                </div>


                            </div>
                        );
                    })
                ) : (
                    <div>No data found</div>
                )}


            </div>
        </div>
    );
};
export default CoachHome;
