import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import img1 from '../src/assets/images/online-medical-support.png'
import img2 from '../src/assets/images/ambulance.png'
import img3 from '../src/assets/images/quickResponse.png'
import img4 from '../src/assets/images/AllinOne.png'



const Services = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:m-60 md:m-30 sm:m-20 lg:grid-cols-2 gap-5 mt-5 pb-20 lg:mt-10">
            <div className="flex flex-col items-center bg-cyan-600 rounded-lg p-5">
              <img src={img1} className="h-20 w-20" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">Online Consultation Facilities</h1>
              <p className="text-center">Discover expert healthcare professionals to meet your medical needs.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

            <div className="flex flex-col items-center bg-yellow-500 rounded-lg p-5">
              <img src={img4} className="h-20 w-20" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">Islandwide Quick Response Team</h1>
              <p className="text-center">Access around-the-clock assistance for immediate healthcare support and emergencies.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

            <div className="flex flex-col items-center bg-green-500 rounded-lg p-5">
              <img src={img3} className="h-20 w-20" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">All under one roof</h1>
              <p className="text-center">Experience comprehensive care with a wide range of medical services conveniently available in one location.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

            <div className="flex flex-col items-center bg-red-500 rounded-lg p-5">
              <img src={img2} className="h-20 w-20" alt="" />
              <h1 className="text-2xl font-semibold text-center mt-4">High quality service</h1>
              <p className="text-center">Receive top-notch medical care with a commitment to excellence, ensuring your well-being and satisfaction.</p>
              <FaRegArrowAltCircleRight className="m-5 h-6 w-6"/>
            </div>

          </div>
    </div>
  )
}

export default Services