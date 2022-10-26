import React, { useState } from 'react';


const Form = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastName, setlastName] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    // const handleFirstName = (e) => {
    //     firstName(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setfirstNameError("first name is required!");
    //     } else if(e.target.value.length < 2) {
    //         setfirstNameError("First name should be at least 2 characters");
    //     } else {
    //         setfirstNameError("");
    //     }
    // }

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //     return "Thank you for submitting the form!";
    // } else {
    //     return "Welcome, please submit the form";
    // }
    // };

    return (
        <>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setfirstName(e.target.value)} />
                </div>
                <p>
                    {firstName.length > 0 && firstName.length < 2
                        ? "First name must be at least 2 characters."
                        : ""
                    }
                </p>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setlastName(e.target.value)} />
                    <p>

                    {lastName.length > 0 && lastName.length < 2
                        ? "First name must be at least 2 characters."
                        : ""
                    }
                    </p>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    <p>

                    {email.length > 0 && email.length < 2
                        ? "First name must be at least 2 characters."
                        : ""
                    }
                    </p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    <p>

                    {password.length > 0 && password.length < 2
                        ? "First name must be at least 2 characters."
                        : ""
                    }
                    </p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setconfirmPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>

        </>
    );
};

export default Form;