import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../CoachNavBar";
const CoachProfile = () => {
    const [hotels, setHotels] = useState([]);

    //Getting all the data from the json file when the component gets mounted.
    useEffect(() => {
        axios.get("http://localhost:4500/coaches").then((res) => {
            setHotels(res.data);
        });
    }, []);
    console.log(hotels);


    return (
        <div >
            <NavBar />
            {hotels.length > 0 ? (
                hotels.map((hotel) => {
                    return (
                        <div key={hotel.id} className="card">


                            <img src={hotel.imageUrl} alt="images" className="card-img" />

                            <div className="card-body">
                                <h4>Coach Id:{hotel.id}</h4>
                                <p>Date of Birth:{hotel.dateOfBirth}</p>
                                <p>Mobile No:{hotel.mobileNumber}</p>
                                <p>speciality:{hotel.speciality}</p>
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
export default CoachProfile;
