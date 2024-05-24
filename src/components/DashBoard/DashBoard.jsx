import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className='max-w-[700px] mb-10 mx-auto w-[95%]'>
                <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins text-center">Your Dashboard</h1>
                <p className="text-black dark:text-white text-center mt-6 font-medium sm:text-base text-sm font-montserrat mb-10">This is your personal dashboard where you can !</p>

                <div className="md:flex mx-auto grid grid-cols-2 justify-center items-center gap-8">
                    <Link to="add-service" className="flex justify-center hover:border-b-pmColor duration-300 border-b border-transparent items-center gap-2 text-opacity-50 text-sm sm:text-base font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " />Add Services</Link>
                    <Link to='booked-service' className="flex justify-center hover:border-b-pmColor duration-300 border-b border-transparent items-center gap-2 text-opacity-50 text-sm sm:text-base font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " />Booked Service</Link>
                    <Link to='manage-services' className="flex justify-center hover:border-b-pmColor duration-300 border-b border-transparent items-center gap-2 text-opacity-50 text-sm sm:text-base font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " />Manage Services</Link>
                    <Link to='service-to-do' className="flex justify-center hover:border-b-pmColor duration-300 border-b border-transparent items-center gap-2 text-opacity-50 text-sm sm:text-base font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " />Service To Do</Link>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;