import React from 'react';

const MainServices = () => {
    return (
            <div className='pb-10 sm:pb-[100px] w-[95%] mx-auto max-w-[1440px]'>
                <div className="sm:text-right text-center sm:flex sm:flex-col sm:justify-end sm:items-end">
                    <div className=' max-w-[700px] mb-10'>
                        <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins">Our Main Services</h1>
                        <p className="text-black dark:text-white sm:text-right text-center mt-6 font-medium sm:text-lg font-montserrat">Discover our core event management services designed to bring your vision to life seamlessly and with unparalleled expertise.</p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-3'>
                    <div className='text-center p-6 rounded-xl  text-black dark:text-white hover:scale-105 duration-300 hover:shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src="https://i.ibb.co/2nYQskT/marketing-plan.png" alt="" />
                        </div>
                        <h1 className='py-5 font-poppins font-bold text-xl'>Event Plan</h1>
                        <p className='font-montserrat font-medium'>Expert coordination from concept to completion, ensuring a seamless experience for your special occasion.</p>
                    </div>
                    <div className='text-center p-6 rounded-xl  text-black dark:text-white hover:scale-105 duration-300 hover:shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src="https://i.ibb.co/48FvqW4/placeholder.png" alt="" />
                        </div>
                        <h1 className='py-5 font-poppins font-bold text-xl'>Venue</h1>
                        <p className='font-montserrat font-medium'>Discover ideal spaces meticulously managed to meet your event's unique requirements and exceed expectations.</p>
                    </div>
                    <div className='text-center p-6 rounded-xl  text-black dark:text-white hover:scale-105 duration-300 hover:shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src="https://i.ibb.co/ChYjDNM/theme.png" alt="" />
                        </div>
                        <h1 className='py-5 font-poppins font-bold text-xl'>Theme Design</h1>
                        <p className='font-montserrat font-medium'>Elevate your event with creative themes and meticulously crafted ambiance personalized to your vision and preferences.</p>
                    </div>
                    <div className='text-center p-6 rounded-xl  text-black dark:text-white hover:scale-105 duration-300 hover:shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src="https://i.ibb.co/MDSTnbZ/celebration.png" alt="" />
                        </div>
                        <h1 className='py-5 font-poppins font-bold text-xl'>Entertainment</h1>
                        <p className='font-montserrat font-medium'>Delight guests with unforgettable performances and entertainment options carefully curated and flawlessly executed.</p>
                    </div>
                    <div className='text-center p-6 rounded-xl  text-black dark:text-white hover:scale-105 duration-300 hover:shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src="https://i.ibb.co/8sHxsPg/buffet.png" alt="" />
                        </div>
                        <h1 className='py-5 font-poppins font-bold text-xl'>Catering</h1>
                        <p className='font-montserrat font-medium'>Indulge in a culinary journey of exquisite cuisine and impeccable service tailored to elevate your event to new heights.</p>
                    </div>
                    <div className='text-center p-6 rounded-xl  text-black dark:text-white hover:scale-105 duration-300 hover:shadow-2xl'>
                        <div className='flex justify-center'>
                            <img className='w-20' src="https://i.ibb.co/zG0XdCG/cargo.png" alt="" />
                        </div>
                        <h1 className='py-5 font-poppins font-bold text-xl'>Logistics</h1>
                        <p className='font-montserrat font-medium'>Experience flawless operations and attentive support from our professional team, ensuring every detail is managed with precision.</p>
                    </div>
                </div>
            </div>
    );
};

export default MainServices;