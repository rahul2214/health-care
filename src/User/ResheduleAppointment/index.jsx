import React, { useState, useEffect } from "react";
import validateField from "../../Credentials/ValidateForm";
import UserNavBar from "../../UserNavBar";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialFormData = {
    appointmentDate: "",
    slot: ""
};

const RescheduleAppointment = () => {
    const params = useParams();
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormData);
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4500/bookings?id=${params.id}`)
            .then((res) => {
                if (res.data.length > 0) {
                    const fetchedBooking = res.data[0];
                    setBooking(fetchedBooking);
                    setFormData({
                        appointmentDate: fetchedBooking.appointmentDate,
                        slot: fetchedBooking.slot
                    });
                } else {
                    alert("Booking not found");
                }
            })
            .catch((err) => {
                console.error("Error fetching booking data:", err);
            });
    }, [params.id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        const error = validateField(name, value, formData);
        setFormErrors({ ...formErrors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormErrors = {};

        Object.keys(formData).forEach((fieldName) => {
            newFormErrors[fieldName] = validateField(
                fieldName,
                formData[fieldName],
                formData
            );
        });

        setFormErrors(newFormErrors);

        if (Object.values(newFormErrors).some((error) => error)) {
            return;
        }

        if (booking) {
            const updatedBooking = { ...booking, ...formData };

            axios.put(`http://localhost:4500/bookings/${booking.id}`, updatedBooking)
                .then((response) => {
                    alert("Booking rescheduled successfully");
                })
                .catch((err) => {
                    console.error("Error updating booking data:", err);
                });
        } else {
            alert("Booking not found");
        }

        setFormData(initialFormData);
        setFormErrors({});
    };

    return (
        <>
            <UserNavBar />

            <div className="body-form">
                <div className="booking-card">
                    <form id="registration-form" onSubmit={handleSubmit} className="booking-form">
                        <h2 className="title">Reschedule Booking</h2>
                        <div className="form-group">
                            <label htmlFor="appointmentDate">Date of Appointment:</label>
                            <input
                                type="date"
                                id="appointmentDate"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleChange}
                            />
                            {formErrors.appointmentDate && <span className="error">{formErrors.appointmentDate}</span>}
                        </div>
                        <div className="form-group">
                            <label>Preffered Slot:</label>
                            <div className="form-row">
                                <label htmlFor="9 AM to 10 AM">9 AM to 10 AM</label>
                                <input
                                    type="radio"
                                    id="9 AM to 10 AM"
                                    name="slot"
                                    value="9 AM to 10 AM"
                                    checked={formData.slot === "9 AM to 10 AM"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="10 AM to 11 AM">10 AM to 11 AM</label>
                                <input
                                    type="radio"
                                    id="10 AM to 11 AM"
                                    name="slot"
                                    value="10 AM to 11 AM"
                                    checked={formData.slot === "10 AM to 11 AM"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="11 AM to 12 PM">11 AM to 12 PM</label>
                                <input
                                    type="radio"
                                    id="11 AM to 12 PM"
                                    name="slot"
                                    value="11 AM to 12 PM"
                                    checked={formData.slot === "11 AM to 12 PM"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="2 PM to 3 PM">2 PM to 3 PM</label>
                                <input
                                    type="radio"
                                    id="2 PM to 3 PM"
                                    name="slot"
                                    value="2 PM to 3 PM"
                                    checked={formData.slot === "2 PM to 3 PM"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="3 PM to 4 PM">3 PM to 4 PM</label>
                                <input
                                    type="radio"
                                    id="3 PM to 4 PM"
                                    name="slot"
                                    value="3 PM to 4 PM"
                                    checked={formData.slot === "3 PM to 4 PM"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="5 PM to 4 PM">5 PM to 4 PM</label>
                                <input
                                    type="radio"
                                    id="5 PM to 4 PM"
                                    name="slot"
                                    value="5 PM to 4 PM"
                                    checked={formData.slot === "5 PM to 4 PM"}
                                    onChange={handleChange}
                                />

                            </div>
                            {/* Checking whether the  formError is set for slot field, if set displaying the corresponding error message using conditional rendering*/}
                            {formErrors.slot && (
                                <span className="error">{formErrors.slot}</span>
                            )}
                        </div>

                        <br />
                        <button type="submit" >Reschedule</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RescheduleAppointment;
