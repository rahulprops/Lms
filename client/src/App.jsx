import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Login from './pages/Login';
import Register from './pages/Registor';
import HeroSection from './student/HeroSection';
import ShowUserSide from './showuserside/ShowUserSide';
import UserProfile from './student/UserProfile';
import MyLearning from './student/MyLearning'
import AdminLayout from './Layout/AdminLayout';
import Dashboard from './admin/Dashboard';
import RequireAdmin from './admin/RequireAdmin';
import PageNotFound from './components/PageNotFound';
import AddCourse from './admin/AddCourse';
import CourseList from './admin/CourseList';
// import AdminLayout from './Layout/AdminLayout';
// import Dashboard from './admin/Dashboard';
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
          <Route path="mylearning" element={<MyLearning/>} />
          {/* <Route path='/profile' element{<UserProfile/>} /> */}
        </Route>

        {/* admin Layout nested */}
        <Route path='/admin' element={<RequireAdmin><AdminLayout/></RequireAdmin>}>
          <Route index element={<Dashboard/>}/>
          <Route path='addcourse' element={<AddCourse/>} />
          <Route path='list-course' element={<CourseList/>} />
        </Route>
        {/* pagenotfound pagenotfound */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
} 

export default App;
