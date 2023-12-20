import React from 'react'
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Services from '../pages/Services';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';

import {  Routes, Route } from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/MediFlex_frontEnd" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/doctors" element={<Doctors/>}></Route>
      <Route path="/doctors/:id" element={<DoctorDetails/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<SignUp/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/services" element={<Services/>}></Route>  
    </Routes>
  )
}

export default Routers