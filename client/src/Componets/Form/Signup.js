import React, { useState } from "react";
import Button from "../Button/Button";
import Styles from "../Form/Form.module.css";
import {
  isValidEmail,
  isStrongPassword,
  isValidName,
} from "../Validation/Validation";

export default function Signup() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Check if the form is valid before submitting
    if (!isFormValid) {
      alert("Please fill in all the required fields correctly.");
      return;
    }

    // Send form data to backend
    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
        setFormStatus({ submitted: true, success: true, error: null });
        // Handle the response accordingly (if needed)
      })
      .catch((err) => {
        console.error("Error:", err);
        setFormStatus({
          submitted: true,
          success: false,
          error: "Failed to submit the form.",
        });
      });
  }

  // Initialize form field values
  const [Values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
    validateForm();
  };

  // Form validation function
  const validateForm = () => {
    const isNameValid = isValidName(Values.name);
    const isEmailValid = isValidEmail(Values.email);
    const isPasswordValid = isStrongPassword(Values.password);

    // Set the form validity based on all input validations
    setIsFormValid(isNameValid && isEmailValid && isPasswordValid);
  };

  return (
    <div className={Styles.Signup}>
      <h1>Signup</h1>
      {formStatus.submitted && formStatus.success && (//conditional randring
        <p>Form submitted successfully!</p>
      )}
      {formStatus.submitted && !formStatus.success && (
        <p>Error: {formStatus.error}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="name">
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </div>

        <Button text="Signup" type="submit"  />
      </form>
      <a href="/Login">signin</a>
    </div>
  );
}
