import React, { useState } from 'react';
import axios from 'axios';

const BloodGroupSelection = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [donors, setDonors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with blood group:', selectedBloodGroup);

    try {
      const response = await axios.post('http://localhost:5000/api/donors/bloodgroup', {
        blood_group: selectedBloodGroup,
      });

      console.log('Response:', response.data);

      setDonors(response.data);
    } catch (error) {
      console.error('Error fetching donors:', error);
    }
  };

  return (
    <div>
      <h2>Blood Group Selection</h2>
      <form onSubmit={handleSubmit}>
        <label>Select Blood Group:</label>
        <select value={selectedBloodGroup} onChange={(e) => setSelectedBloodGroup(e.target.value)}>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          {/* Add more blood group options as needed */}
        </select>
        <button type="submit">Get Donors</button>
      </form>

      {donors.length > 0 && (
        <div>
          <h3>Donors with {selectedBloodGroup} Blood Group:</h3>
          <ul>
            {donors.map((donor) => (
              <li key={donor.id}>{donor.name}</li>
              // Adjust this based on your donor structure
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BloodGroupSelection;