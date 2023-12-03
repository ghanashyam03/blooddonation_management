import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const HospitalSignup = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server
      const response = await axios.post('http://localhost:5000/api/hospital/signup', {
        hospitalName,
        email,
        password,
      });

      console.log(response.data); // Log the response, you can handle it as needed

      // Optionally, you can redirect or show a success message to the user
    } catch (error) {
      console.error('Error signing up hospital:', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div>
      <h2>Hospital Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Hospital Name:</label>
        <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Sign Up</button>
      </form>
      <Link to="/hospital/Login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default HospitalSignup;
