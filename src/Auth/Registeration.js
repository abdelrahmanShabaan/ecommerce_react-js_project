import React from 'react'
import { Formik } from "formik";
import { useState } from "react";

function Registeration() {
        
        // Define constants to save form data
        const [data, setData] = useState({
            name: "",
            password: "",
            confirmPassword: "",
        });

        // Error messages validation saved in constants
        const [errors, setErrors] = useState({
            nameError: "",
            passwordError: "",
            confirmPasswordError: "",
        });

        // Regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Regex for password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Function to handle form field changes
        const changeData = (e) => {
            const { name, value } = e.target;
            setData({
            ...data,
            [name]: value,
            });

            // Validation for name and email
            if (name === "name") {
            setErrors({
                ...errors,
                nameError:
                value.length === 0
                    ? "This field is required"
                    : value.length < 3
                    ? "Please enter a valid name"
                    : !emailRegex.test(value) && "Invalid email address",
            });
            }

            // Validation for password
            if (name === "password") {
            setErrors({
                ...errors,
                passwordError:
                value.length === 0
                    ? "This field is required"
                    : value.length < 8
                    ? "Password must be at least 8 characters."
                    : !passwordRegex.test(value) &&
                    "Password must contain at least one lowercase, one uppercase, one digit, and one special character",
            });
            }

            // Validation for confirmPassword
            if (name === "confirmPassword") {
            setErrors({
                ...errors,
                confirmPasswordError:
                value !== data.password && "Passwords do not match",
            });
            }
        };

        // ------------- span of success ------------//
        const [successMessage, setSuccessMessage] = useState("");

        // Function to handle form submission
        const submitData = (e) => {
            e.preventDefault();
            if (!errors.nameError && !errors.passwordError && !errors.confirmPasswordError) {
        
            // ---------------------------------------- Form submission logic ---------------------------------//
           // console.log("Registration successful and save in local storage");
            // Save email and password in local storage
            // localStorage.setItem('email', data.name);
            // localStorage.setItem('password', data.password);

            //another once to save data of user if he want to login again
            sessionStorage.setItem('email', data.name);
            sessionStorage.setItem('password', data.password);
            //print successfully message
            setSuccessMessage("Registration successful");

            }
        };

  return (
    <>
      <div className="container">
        <h1 className="text-primary text-center">Registration Form</h1>
        {/* success registration span  */}
        {successMessage && (   <div className="alert alert-success mt-3" role="alert" style={{textAlign : 'center' , fontSize:'2rem'}}> {successMessage} </div>  )}

        <form onSubmit={(e) => submitData(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              value={data.name}
              onChange={(e) => changeData(e)}
              name="name"
            />
            <p className="text-danger">{errors.nameError}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={data.password}
              onChange={(e) => changeData(e)}
              name="password"
            />
            <p className="text-danger">{errors.passwordError}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              value={data.confirmPassword}
              onChange={(e) => changeData(e)}
              name="confirmPassword"
            />
            <p className="text-danger">{errors.confirmPasswordError}</p>
          </div>

          <button
            disabled={
              errors.nameError ||
              errors.passwordError ||
              errors.confirmPasswordError
            }
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Registeration;