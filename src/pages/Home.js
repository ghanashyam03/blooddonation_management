import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blood Donation System</h1>
      <p>Are you a blood donor or a hospital?</p>
      
      <Link to="/donor/form">
        <button>Blood Donor</button>
      </Link>
      
      <Link to="/hospital/signup">
        <button>Hospital</button>
      </Link>
    </div>
  );
};

export default Home;

