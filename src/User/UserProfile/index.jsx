import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavBar from "../../UserNavBar";
import { useParams } from "react-router-dom";
const UserProfile = () => {
    const params=useParams();
    const [hotels, setHotels] = useState([]);

    //Getting all the data from the json file when the component gets mounted.
    useEffect(() => {
        axios.get(`http://localhost:4500/users?id=${params.id}`).then((res) => {
            if (res.data.length > 0) {
                const fetchedBooking = res.data[0];
                
                setHotels({
                    fetchedBooking
                });
            } else {
                alert("Booking not found");
            }
        });
    }, [params.id]);
    console.log(hotels);


    return (
        <div >
            <UserNavBar />
            {hotels.length > 0 ? (
                hotels.map((hotel) => {
                    return (
                        <div key={hotel.id} className="card">


                            <img src="" alt="images" className="card-img" />

                            <div className="card-body">
                                <h4>{hotel.name}</h4>

                                <p>Date of Birth:{hotel.dateOfBirth}</p>
                                <p>Email Id:{hotel.email}</p>

                                <p>Mobile No:{hotel.mobileNumber}</p>
                                <p>Address:{hotel.city},{hotel.state}</p>
                                <p>{hotel.country}</p>
                                <p>PinCode:{hotel.pincode}</p>
                            </div>


                        </div>
                    );
                })
            ) : (
                <div>No planned shedules yet</div>
            )}



        </div>
    );
};
export default UserProfile;
