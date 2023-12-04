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
    <div className="bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
      <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        <h2 className="inline sm:block lg:inline xl:block">Select the blood group</h2>{' '}
        {/* <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p> */}
      </div>
      <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Blood group
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="A+"
        value={selectedBloodGroup}
         onChange={(e) => setSelectedBloodGroup(e.target.value)}
        
      >
        <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
      </select>
      <button type="submit" className='mt-5  py-4 text-white rounded-lg bg-indigo-600 text-whote font-bold px-3 text-center '>Get Donors</button>
      </form>
    </div>
    </div>
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