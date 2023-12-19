import React from 'react';
import starIcon from '../../src/assets/images/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';


const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    profession,
    totalPatients,
    hospital,
  } = doctor;

  return (
    <div className="doctor-card p-3 lg:p-5 bg-white shadow-xl border-white border-2 rounded-xl shadow-lg">
      <div className="image-container flex justify-center items-center ">
        <img src={photo} className="w-1/2 h-1/2" alt="" />
      </div>



      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

       {/* Display the profession */}
    

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-cyan-700 py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {profession}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[12px] leading-6 lg:text-[14px] lg:leading-7 font-semibold text-headingColor">
            <img src={starIcon} alt="" className="w-4 h-4" /> {avgRating}
          </span>

          <span className="text-[12px] leading-6 lg:text-[14px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-3 lg:mb-0">
          <h3 className="text-[12px] leading-7 lg:text-[18px] lg:leading-[24px] font-semibold text-headingColor">
            +{totalPatients} patients
          </h3>

          <p className="text-[20px] leading-6 font-[400] text-white">
            At {hospital}
          </p>
        </div>

        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
