import {doctors} from "./../../assets/data/doctors";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-colos-3">
            {doctors.map((doctor,index)=>(
                <DoctorCard key = {index} doctor={doctor}/>
            ))}
        </div>
    );
};

export default DoctorList;