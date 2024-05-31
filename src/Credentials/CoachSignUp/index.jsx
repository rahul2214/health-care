import React, { useState } from "react";
import validateField from "../ValidateForm";
import axios from "axios";

const initialFormData = {
    name: "",
    mobileNumber: "",
    password: "",
    speciality:"",
    gender: "",
    dob:""


};
const CoachSignUp = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormData);
    const handleChange = (event) => {
        
        const { name, value, type } = event.target;

        //Checking the type of inputs
        const fieldValue = type === "radio" ? value : value.trim();

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
            .post("http://localhost:4500/coaches", formData)
            .then((response) => {
                setFormData("");
                console.log(response.data);
            })
            .catch((err) => {
                console.log("Cant post");
            });
        alert("registered successfully")
        // The formData and formErrors state variables are reset to their initial values using setFormData() and setFormErrors() .
        setFormData(initialFormData);
        setFormErrors({});
    };
    return (
        <>
            <nav style={{ backgroundColor: "#a78181", height: "60px", fontSize: "24px", color: "white", paddingLeft: "20px", paddingTop: "10px" }}>WeCare</nav>

            <div className="body-form">
                <div className="booking-card">
                    <form id="registration-form" onSubmit={handleSubmit} className="booking-form">
                        <h2 className="title">Life Coach Profile</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
                            {formErrors.name && <span className="error">{formErrors.name}</span>}
                        </div>
                      
                        <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number:</label>
                            <input
                                type="number"
                                id="mobileNumber"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                            />
                            {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
                            {formErrors.mobileNumber && <span className="error">{formErrors.mobileNumber}</span>}
                        </div>


                      
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {/* Checking whether the  formError is set for password field, if set displaying the corresponding error message using conditional rendering*/}
                            {formErrors.password && (
                                <span className="error">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Gender:</label>
                            <div className="form-row">
                                <label htmlFor="male">Male</label>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="female">Female</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === "female"}
                                    onChange={handleChange}
                                />
                               
                            </div>
                            {/* Checking whether the  formError is set for gender field, if set displaying the corresponding error message using conditional rendering*/}
                            {formErrors.gender && (
                                <span className="error">{formErrors.gender}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of birth:</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                            {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
                            {formErrors.dob && <span className="error">{formErrors.dob}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="speciality">speciality:</label>
                            <input
                                type="text"
                                id="speciality"
                                name="speciality"
                                value={formData.speciality}
                                onChange={handleChange}
                            />
                            {/* Checking whether the  formError is set for speciality field, if set displaying the corresponding error message using conditional rendering*/}
                            {formErrors.speciality && (
                                <span className="error">{formErrors.speciality}</span>
                            )}
                        </div>
                        <br />
                        <button type="submit" >Register</button>
                    </form>
                    
                </div>
            </div>
        </>
    );
};
export default CoachSignUp;
