import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className='max-w-[1440px] w-[98%] mx-auto pb-10 sm:pb-[100px]'>
            <div>
                <div className="sm:text-right text-center sm:flex sm:flex-col sm:justify-end sm:items-end">
                    <div className=' max-w-[700px] mb-10'>
                        <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins">Why People Choose Us</h1>
                        <p className="text-black dark:text-white sm:text-right text-center mt-6 font-medium sm:text-lg font-montserrat">Your dreams, our passion. From intimate gatherings to grand celebrations, we make every moment extraordinary.</p>
                    </div>
                </div>
                <div className="max-w-[1440px] mx-auto sm:mb-16 flex lg:flex-row flex-col justify-between items-center sm:gap-20 gap-8">
                    <div data-aos="fade-down" data-aos-duration="1000" className="relative">
                        <div className='flex justify-between'>
                            <img className=' block w-[48.5%] rounded-xl sm:mb-20 object-cover h-[500px] relative overflow-y-auto bg-cover bg-center bg-no-repeat bg-fixed' src="https://images.pexels.com/photos/5428771/pexels-photo-5428771.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            <img className='block w-[48.5%] rounded-xl object-cover sm:h-[600px] h-[500px]' src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className='sm:max-w-[400px] h-fit p-6 mt-4 sm:mt-0 bg-pmColor bg-opacity-80 rounded-xl sm:absolute sm:bottom-[-8%]'>
                            <div className='flex justify-between items-center gap-5'>
                                <h1 className='text-white flex flex-col justify-center items-center font-poppins font-semibold text-3xl'><span>10 +</span><span>Years</span></h1>
                                <p className='text-sm font-montserrat font-medium text-white'>Seasoned professionals crafting flawless events for lasting memories.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" className="lg:max-w-[50%] lg:px-0 px-6 h-full">

                        <h3 className="text-base sm:text-2xl font-poppins font-bold inline-block  text-pmColor">ABOUT US
                        </h3>
                        <p className=" text-black dark:text-white text-opacity-50 text-sm sm:text-[16px] font-montserrat my-7">At EventX, we are more than just event planners; we are storytellers, architects of unforgettable experiences, and partners in your journey to create lasting memories. </p>
                        <div className="grid grid-cols-2 my-7 gap-5">
                            <span className="flex justify-start items-center gap-2 text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " /> Event Coordination</span>
                            <span className="flex justify-start items-center gap-2 text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " /> Venue Managements</span>
                            <span className="flex justify-start items-center gap-2 text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " /> Theme Design</span>
                            <span className="flex justify-start items-center gap-2 text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " /> Entertainment Booking</span>
                            <span className="flex justify-start items-center gap-2 text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " /> Catering Services</span>
                            <span className="flex justify-start items-center gap-2 text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold  text-black dark:text-white"><FaArrowRight className="text-pmColor text-sm sm:text-lg  " /> On-site Logistics</span>

                        </div>
                        <div className="w-full text-center mt-14 lg:w-fit lg:text-left">
                            <div>
                                <button className="group mb-4 relative inline-flex w-fit h-12 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                                    <span>Read More</span>
                                    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // lg:w-[800px] md:h-[500px] h-[350px]
    );
};

export default AboutUs;