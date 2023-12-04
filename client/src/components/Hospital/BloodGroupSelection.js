import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
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

  const dummyDonors = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
  ];

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-5 grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
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
          <h3 className='m-10 text-2xl font-semibold'>Donors with {selectedBloodGroup} Blood Group:</h3>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-10">
            {donors.map((person) => (
              <li key={person.email} className="col-span-1 divide-y border-2 border-gray-100 shadow-lg divide-gray-200 rounded-lg bg-white ">
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                      {/* <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {person.role}
                      </span> */}
                    </div>
                    {/* <p className="mt-1 truncate text-sm text-gray-500">{person.title}</p> */}
                  </div>
                  <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={person.imageUrl} alt="" />
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        href={`mailto:${person.email}`}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        Email
                      </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <a
                        href={`tel:${person.telephone}`}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
  </div>
  );
};

export default BloodGroupSelection;