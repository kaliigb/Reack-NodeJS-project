import React, { useState } from 'react';
import Button from '../Button/Button';
import Styles from '../Form/Form.module.css';
import { isValidEmail, isValidPassword } from '../Validation/Validation';

export default function Login() {
  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
   // Basic password validation
   if (Values.password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

    // Send form data to backend
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Values),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Success') { // Check the 'message' property in the response
          console.log('Sign in successfully!!');
          window.location.pathname = '/Product';
        } else {
          alert('Failed to sign in');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  // Initialize form field values
  const [Values, setValues] = useState({
    email: '',
    password: '',
  });

  // Handle form field changes
  const handleChange = e => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };

  return (
    <div className={Styles.Signup}>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
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
        <Button text="SignIn" type="submit" />
      </form>
      <a href="/">signup</a>
    </div>
  );
}
