import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update this line
import Home from './pages/Home';
// import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import DonorForm from './components/Donor/DonorForm';
import DonorPage from './components/Donor/DonorPage';
import HospitalSignup from './components/Hospital/HospitalSignup';
import HospitalLogin from './components/Hospital/HospitalLogin';
import BloodGroupSelection from './components/Hospital/BloodGroupSelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/landing" element={<LandingPage />} /> */}
        <Route path="/donor/form" element={<DonorForm />} />
        <Route path="/donor/thank" element={<DonorPage />} />
        <Route path="/hospital/signup" element={<HospitalSignup />} />
        <Route path="/hospital/login" element={<HospitalLogin />} />
        <Route path="/bloodgroupselection" element={<BloodGroupSelection />} /> {/* Update path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
