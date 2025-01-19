import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Login from './pages/Login';
import Register from './pages/Registor';
import HeroSection from './student/HeroSection';
import ShowUserSide from './showuserside/ShowUserSide';
import UserProfile from './student/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout with Navbar */}
        <Route path="/" element={<MainLayout />}>
          {/* Nested Routes */}
          <Route index element={<ShowUserSide />} /> {/* Default Route */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="user-profile" element={<UserProfile />} />
          {/* <Route path='/profile' element{<UserProfile/>} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
