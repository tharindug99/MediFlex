import React, { useState } from 'react';
import DoctorCard from '../../components/doctors/DoctorCard';  // Update the path based on your project structure
import img1 from '../../src/assets/images/doc.png'

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All'); // Default filter

  // Your list of doctors with their professions (added more sample data)
  const doctorsList = [
    { name: 'Dr. Smith', profession: 'Neuro-surgeon', photo: img1 },
    { name: 'Dr. Johnson', profession: 'Dermatologist', photo: img1 },
    { name: 'Dr. Davis', profession: 'Paediatrician', photo: img1 },
    { name: 'Dr. Brown', profession: 'Cardiologist', photo: img1 },
    { name: 'Dr. Wilson', profession: 'Orthopedic Surgeon', photo: img1 },
    { name: 'Dr. Lee', profession: 'Gastroenterologist', photo: img1 },
    { name: 'Dr. Turner', profession: 'Ophthalmologist', photo: img1 },
    { name: 'Dr. Mitchell', profession: 'Psychiatrist', photo: img1 },
    { name: 'Dr. Parker', profession: 'Endocrinologist', photo: img1 },
    { name: 'Dr. Adams', profession: 'Rheumatologist', photo: img1 },
    { name: 'Dr. White', profession: 'Urologist', photo: img1 },
    { name: 'Dr. Anderson', profession: 'Otolaryngologist', photo: img1 },
    { name: 'Dr. Hayes', profession: 'Nephrologist', photo: img1 },
    { name: 'Dr. Clark', profession: 'Pulmonologist', photo: img1 },
    { name: 'Dr. Turner', profession: 'Hematologist', photo: img1 },
    { name: 'Dr. Taylor', profession: 'Dentist', photo: img1 },
    { name: 'Dr. Hughes', profession: 'Allergist', photo: img1 },
    { name: 'Dr. Robinson', profession: 'Plastic Surgeon', photo: img1 },
    { name: 'Dr. Stewart', profession: 'Gynecologist', photo: img1 },
    { name: 'Dr. Martin', profession: 'Neurologist', photo: img1 },
  ];

  // Filter doctors based on the selected profession
  const filteredDoctors = selectedFilter === 'All'
    ? doctorsList
    : doctorsList.filter(doctor => doctor.profession === selectedFilter);

  // Filter doctors based on the search term
  const searchedDoctors = searchTerm
    ? filteredDoctors.filter(doctor => doctor.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : filteredDoctors;

  // Unique professions for dropdown options
  const allProfessions = ['All', ...new Set(doctorsList.map(doctor => doctor.profession))];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-[1440px] md:w-[760px] sm:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Doctors</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-4"
        />

        {/* Profession Filter */}
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-4"
        >
          {allProfessions.map((profession, index) => (
            <option key={index} value={profession}>{profession}</option>
          ))}
        </select>

        {/* Display Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchedDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
