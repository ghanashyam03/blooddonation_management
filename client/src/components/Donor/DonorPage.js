import React from 'react';

const DonorPage = ({ donorData }) => {
  // Assuming donorData is an object containing donor information
  const { name, phone, bloodGroup } = donorData;

  return (
    <div>
      <h2>Donor Information</h2>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Blood Group: {bloodGroup}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default DonorPage;
