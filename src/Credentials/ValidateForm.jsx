const validateField = (name, value, formData) => {
    switch (name) {
        //Display error message if the name textbox is empty or contains less than 3 charcters
        case "name":
            if (value.length === 0) {
                return "Name is required";
            }
            if (value.length < 3) {
                return "Name Should be Atleast 3 characters Long";
            }
            //if not empty and more that 3 charcters,then entered data is updated in formData
            return "";
        case "address":
            if (value.length === 0) {
                return "Adress is required";
            }

            //if not empty and more that 3 charcters,then entered data is updated in formData
            return "";
        case "mobileNumber":
            if (value.length === 0) {
                return "Mobile Number is required";
            }
            if (value.length !== 10) {
                return "Mobile Number Should be 10 characters Long";
            }
            //if not empty and more that 3 charcters,then entered data is updated in formData
            return "";
        case "email":
            //Display error message if the email is empty or not in correct format, using regular expression.
            if (!value) {
                return "Email is required";
            }
            if (!/\S+@\S+\.\S+/.test(value)) {
                return "Email is invalid";
            }
            //if not empty and correct email format, then entered data is updated in formData
            return "";
        case "password":
            if (!value) {
                return "Password is required";
            }
            if (value.length < 8) {
                return "Password must be at least 8 characters";
            }
            return "";
        case "pincode":
            if (!value) {
                return "Pincode is required";
            }
            if (value.length > 0 && value.length > 6) {
                return "Maximum is 6";
            }
            return "";
        case "gender":
            if (!value) {
                return "Gender is required";
            }
            return "";
        case "slot":
            if (!value) {
                return "Slot is required";
            }
            return "";
        case "city":
            if (value.length === 0) {
                return "city is required";
            }

            //if not empty and more that 3 charcters,then entered data is updated in formData
            return "";
        case "state":
            if (value.length === 0) {
                return "state is required";
            }

            //if not empty and more that 3 charcters,then entered data is updated in formData
            return "";
        case "country":
            if (value.length === 0) {
                return "country is required";
            }

            //if not empty and more that 3 charcters,then entered data is updated in formData
            return "";
        case "dateOfBirth":
            if (!value) {
                return "Date of Birth is required";
            }
            // startDate = new Date(value);
            // const today = new Date();
            // today.setHours(0, 0, 0, 0); // Set time to midnight
            // if (startDate < today) {
            //     return "Start Date should be greater than or equal to today";
            // }
            return "";
        case "appointmentDate":
            if (!value) {
                return "Date of Birth is required";
            }
            // startDate = new Date(value);
            // const today = new Date();
            // today.setHours(0, 0, 0, 0); // Set time to midnight
            // if (startDate < today) {
            //     return "Start Date should be greater than or equal to today";
            // }
            return "";

     
        case "specialty":
            if (!value) {
                return "specialty is required";
            }
            return "";


        default:
            return "";
    }
};
export default validateField;
