import React, { useState, useEffect } from "react";
import validateField from "../../Credentials/ValidateForm";
import UserNavBar from "../../UserNavBar";
import axios from "axios";
import { useParams } from 'react-router-dom';
//Initialising the form fields with empty value.
const initialFormData = {
    appointmentDate: "",
    slot: ""

};
const BookAppointment = () => {
    let params = useParams();

    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormData);
    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            hotelName: params.hotelName
        }));
    }, [params.hotelName]);
    const handleChange = (event) => {
        var fieldValue;
        const { name, value, type } = event.target;

        //Checking the type of inputs is radio
        if (type === "radio") {
            fieldValue = value;
        }
        else {
            fieldValue = value.trim();
        }
        //Updating the form data with new value from each input.
        setFormData({ ...formData, [name]: fieldValue });

        //Validates the field by calling the validateField function from the Validate.js file, and passing the field name, value, and current form data.
        const error = validateField(name, fieldValue, formData);

        //The resulting error message is then stored in the formErrors state variable.
        setFormErrors({ ...formErrors, [name]: error });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormErrors = {};
        //Validates all form fields by calling validateField for each field and storing the resulting error messages in a new object newFormErrors.
        Object.keys(formData).forEach((fieldName) => {
            newFormErrors[fieldName] = validateField(
                fieldName,
                formData[fieldName],
                formData
            );
        });
        setFormErrors(newFormErrors);
        //If any of the fields have errors, the form submission is aborted.
        if (Object.values(newFormErrors).some((error) => error)) {
            return;
        }

        axios
            .post("http://localhost:4500/bookings", formData)
            .then((response) => {
                setFormData("");
                console.log(response.data);
            })
            .catch((err) => {
                console.log("Cant post");
            });
        alert("Room Booked Successfully");
        // The formData and formErrors state variables are reset to their initial values using setFormData() and setFormErrors() .
        setFormData(initialFormData);
        setFormErrors({});
    };
    return (
        <>
            <UserNavBar />
            <div className="body-form">
                <div className="booking-card">

                    <form id="registration-form" onSubmit={handleSubmit} className="booking-form">
                        <h2 className="title">Proceed with your Appointment</h2>

                        <div className="form-group">
                            <label htmlFor="appointmentDate">Date of Appointment:</label>
                            <input
                                type="date"
                                id="appointmentDate"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleChange}
                            />
                            {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
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
                        <button type="submit">Book Appointment</button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default BookAppointment;
