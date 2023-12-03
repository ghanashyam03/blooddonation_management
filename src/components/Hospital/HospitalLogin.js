import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import correct hook

const HospitalLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Correct hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/hospital/login', {
        email,
        password,
      });

      console.log(response.data);

      if (response.data.success) {
        // Redirect to BloodGroupSelection.js upon successful login
        navigate('/bloodgroupselection');
      } else {
        console.error('Login failed:', response.data.message);
        // Handle unsuccessful login (show error message, etc.)
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div>
      <h2>Hospital Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default HospitalLogin;
