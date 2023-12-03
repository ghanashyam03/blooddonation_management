import React, { useState } from 'react';

const BloodGroupSelection = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');

  const handleSelection = (e) => {
    // Add logic to handle blood group selection
    setSelectedBloodGroup(e.target.value);
  };

  return (
    <div>
      <h2>Blood Group Selection</h2>
      <label>Select Blood Group:</label>
      <select value={selectedBloodGroup} onChange={handleSelection}>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        {/* Add more blood group options as needed */}
      </select>

      {/* Display the list of donors or handle further actions based on the selection */}
    </div>
  );
};

export default BloodGroupSelection;
