import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavBar from "../../UserNavBar";
import { useNavigate } from "react-router-dom";
const UserApointments = () => {
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate();

    //Getting all the data from the json file when the component gets mounted.
    useEffect(() => {
        axios.get("http://localhost:4500/bookings").then((res) => {
            setHotels(res.data);

        });
    }, []);
    const deleteRoom = (empId) => {

        axios
            .delete("http://localhost:4500/bookings/" + empId)
            .then((res) => {
                axios.get("http://localhost:4500/bookings").then((res) => {
                    setHotels(res.data);
                });
            });
    };



    return (
        <div>
            <UserNavBar />
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
                                    <p>Coach Id : {hotel.coachId}</p>
                                </div>
                                <div className="booking-form">
                                    <button onClick={() => navigate('/resheduleappointment/' + hotel.id)}>Reshedule</button>
                                    <button onClick={() => deleteRoom(hotel.id)}>Cancel</button>

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
export default UserApointments;
