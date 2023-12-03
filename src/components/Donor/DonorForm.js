import React, { useState } from 'react';
import axios from 'axios';

const DonorForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/donor/add', {
        name,
        phone,
        bloodGroup
      });

      alert('Donor information submitted successfully!');
    } catch (error) {
      console.error('Error submitting donor information:', error);
      alert('Error submitting donor information. Please try again.');
    }
  };

  return (
    <div>
      <h2>Donor Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>Blood Group:</label>
        <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonorForm;
