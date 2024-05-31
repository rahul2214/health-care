import React, { useState } from "react";
import validateField from "../ValidateForm";
import axios from "axios";

const initialFormData = {
    name: "",
    mobileNumber: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    city: "",
    state: "",
    country: "",
    pincode: ""
};

const UserSignUp = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        const fieldValue = type === "radio" ? value : value.trim();

        setFormData({ ...formData, [name]: fieldValue });

        const error = validateField(name, fieldValue, formData);
        setFormErrors({ ...formErrors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormErrors = {};

        Object.keys(formData).forEach((fieldName) => {
            newFormErrors[fieldName] = validateField(fieldName, formData[fieldName], formData);
        });
        setFormErrors(newFormErrors);

        if (Object.values(newFormErrors).some((error) => error)) {
            return;
        }

        setIsSubmitting(true);

        axios
            .post("http://localhost:4500/users", formData)
            .then((response) => {
                alert("Registered successfully");
                setFormData(initialFormData);
                setFormErrors({});
                console.log(response.data);
            })
            .catch((err) => {
                console.error("Can't post", err);
                alert("Registration failed");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <nav style={{ backgroundColor: "#a78181", height: "60px", fontSize: "24px", color: "white", paddingLeft: "20px", paddingTop: "10px" }}>WeCare</nav>
            <div className="body-form">
                <div className="booking-card" style={{ width: "700px" }}>
                    <form id="registration-form" onSubmit={handleSubmit} className="booking-form">
                        <h2 className="title">User Profile</h2>
                        <div style={{ display: "flex" }}>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
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
                                    {formErrors.mobileNumber && <span className="error">{formErrors.mobileNumber}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Id:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {formErrors.email && <span className="error">{formErrors.email}</span>}
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
                                    {formErrors.password && (
                                        <span className="error">{formErrors.password}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Gender:</label>
                                    <div style={{ display: "flex" }}>
                                        <input
                                            type="radio"
                                            id="male"
                                            name="gender"
                                            value="male"
                                            checked={formData.gender === "male"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="male">Male</label>
                                        <input
                                            type="radio"
                                            id="female"
                                            name="gender"
                                            value="female"
                                            checked={formData.gender === "female"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                    {formErrors.gender && (
                                        <span className="error">{formErrors.gender}</span>
                                    )}
                                </div>
                            </div>
                            <div style={{ marginLeft: "20px" }}>
                                <div className="form-group">
                                    <label htmlFor="dateOfBirth">Date of birth:</label>
                                    <input
                                        type="date"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                    />
                                    {formErrors.dateOfBirth && <span className="error">{formErrors.dateOfBirth}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pincode">PinCode:</label>
                                    <input
                                        type="number"
                                        id="pincode"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                    />
                                    {formErrors.pincode && <span className="error">{formErrors.pincode}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City:</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                    {formErrors.city && (
                                        <span className="error">{formErrors.city}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State:</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                    {formErrors.state && (
                                        <span className="error">{formErrors.state}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country:</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                    {formErrors.country && (
                                        <span className="error">{formErrors.country}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Registering..." : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserSignUp;
