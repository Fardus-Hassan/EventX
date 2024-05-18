
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Team = () => {
    return (
        <div className="max-w-[1440px] mx-auto w-[95%] pb-10 sm:pb-[100px]">
            <div data-aos="fade-down" data-aos-duration="1000">
                <div className="sm:text-right text-center sm:flex sm:flex-col sm:justify-end sm:items-end">
                    <div className=' max-w-[700px] mb-10'>
                        <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins">Meet Our Team</h1>
                        <p className="text-black dark:text-white sm:text-right text-center mt-6 font-medium sm:text-lg font-montserrat">Get acquainted with the talented individuals who bring creativity, expertise, and passion to every event, ensuring unforgettable experiences.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                <div data-aos="fade-down" data-aos-duration="1000" className="shadow-xl rounded-2xl pb-5 bg-white dark:bg-themeColor3">
                    <div className="overflow-hidden rounded-t-2xl">
                        <img className="w-full mx-auto object-top object-cover h-[300px] transform transition-transform duration-500 hover:scale-110" src="https://images.pexels.com/photos/8872162/pexels-photo-8872162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="sm:px-0 px-3">
                        <h1 className="text-center text-opacity-90 font-poppins text-xl my-3 font-semibold text-black dark:text-white">Sarah Johnson</h1>
                        <p className="mb-3 text-center font-montserrat font-semibold text-black sm:text-base text-sm text-opacity-50 dark:text-white">Event Coordinator</p>
                    </div>
                    <div className="space-x-3 flex justify-center items-center mt-3">
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaInstagram className="text-lg" />
                        </div>
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaFacebookF className="text-lg" />
                        </div>
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <BsTwitter className="text-lg" />
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="shadow-xl rounded-2xl pb-5 bg-white dark:bg-themeColor3">
                    <div className="overflow-hidden rounded-t-2xl">
                        <img className="w-full mx-auto object-top object-cover h-[300px] transform transition-transform duration-500 hover:scale-110" src="https://images.pexels.com/photos/4242995/pexels-photo-4242995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="sm:px-0 px-3">
                        <h1 className="text-center text-opacity-90 font-poppins text-xl my-3 font-semibold text-black dark:text-white">Michael Wong</h1>
                        <p className="mb-3 text-center font-montserrat font-semibold text-black sm:text-base text-sm text-opacity-50 dark:text-white">Venue Manager</p>
                    </div>
                    <div className="space-x-3 flex justify-center items-center mt-3">
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaInstagram className="text-lg" />
                        </div>
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaFacebookF className="text-lg" />
                        </div>
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <BsTwitter className="text-lg" />
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="shadow-xl rounded-2xl pb-5 bg-white dark:bg-themeColor3 text-black dark:text-white">
                    <div className="overflow-hidden rounded-t-2xl">
                        <img className="w-full mx-auto object-cover object-center h-[300px] transform transition-transform duration-500 hover:scale-110" src="https://images.pexels.com/photos/7654454/pexels-photo-7654454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="sm:px-0 px-3">
                        <h1 className="text-center text-opacity-90 font-poppins text-xl my-3 font-semibold text-black dark:text-white">Emily Clark</h1>
                        <p className="mb-3 text-center font-montserrat font-semibold text-black sm:text-base text-sm text-opacity-50 dark:text-white">Theme Designer</p>
                    </div>
                    <div className="space-x-3 flex justify-center items-center mt-3">
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaInstagram className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaFacebookF className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <BsTwitter className="text-lg" />
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" className="shadow-xl rounded-2xl pb-5 bg-white dark:bg-themeColor3 text-black dark:text-white">
                    <div  className="overflow-hidden rounded-t-2xl">
                        <img className="w-full mx-auto object-cover object-top h-[300px] transform transition-transform duration-500 hover:scale-110" src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="sm:px-0 px-3">
                        <h1 className="text-center text-opacity-90 font-poppins text-xl my-3 font-semibold text-black dark:text-white">Lucas Patel</h1>
                        <p className="mb-3 text-center font-montserrat font-semibold text-black sm:text-base text-sm text-opacity-50 dark:text-white">Entertainment Specialist</p>
                    </div>
                    <div className="space-x-3 flex justify-center items-center mt-3">
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaInstagram className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaFacebookF className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <BsTwitter className="text-lg" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;