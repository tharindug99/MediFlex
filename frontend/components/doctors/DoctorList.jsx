import {doctors} from "../../src/data/Doctors";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
    return(
        <div className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 mx-10 justify-center">
            {doctors.map((doctor,index)=>(
                <DoctorCard key = {index} doctor={doctor}/>
            ))}
        </div>
    );
};

export default DoctorList;