import React from 'react';

const OurAchievement = () => {
    return (
        <div className='pb-10 sm:pb-[100px]'>
            <div className="sm:text-left text-center w-[98%] mx-auto max-w-[1440px]">
                <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins">Our Achievement</h1>
                <p className="text-black dark:text-white mt-6 mb-10 max-w-[700px] font-medium sm:text-lg font-montserrat">Embark on our journey of success, marked by milestones, accolades, and delighted clients, shaping memorable experiences along the way.</p>
            </div>
            <div className='bg-pmColor bg-opacity-50 dark:bg-opacity-80 sm:pt-[100px] pt-10'>
                <div className='pb-10 sm:pb-[100px] w-[98%] mx-auto max-w-[1440px]'>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 justify-center items-center gap-10 text-white'>
                        <div className='mx-auto flex flex-col justify-center items-center'>
                            <div className='flex justify-center'>
                                <img className='w-[120px]' src="https://i.ibb.co/tHXkhsF/best-customer-experience-1.png" alt="" />
                            </div>
                            <h1 className='sm:text-7xl text-5xl font-bold py-4'>1270+</h1>
                            <h3 className='text-xl font-montserrat opacity-80'>Happy Customers</h3>
                        </div>
                        <div className='mx-auto flex flex-col justify-center items-center'>
                        <div className='flex justify-center translate-x-4'>
                                <img className='w-[120px]' src="https://i.ibb.co/Db9yqQ4/briefing.png" alt="" />
                            </div>
                            <h1 className='sm:text-7xl text-5xl font-bold py-4'>1320+</h1>
                            <h3 className='text-xl font-montserrat opacity-80'>Project Complate</h3>
                        </div>
                        <div className='mx-auto flex flex-col justify-center items-center'>
                        <div className='flex justify-center'>
                                <img className='w-[120px]' src="https://i.ibb.co/MC2BBFz/management.png" alt="" />
                            </div>
                            <h1 className='sm:text-7xl text-5xl font-bold py-4'>100+</h1>
                            <h3 className='text-xl font-montserrat opacity-80'>Experts Team</h3>
                        </div>
                        <div className='mx-auto flex flex-col justify-center items-center'>
                        <div className='flex justify-center'>
                                <img className='w-[120px]' src="https://i.ibb.co/HTg0Lx8/quality.png" alt="" />
                            </div>
                            <h1 className='sm:text-7xl text-5xl font-bold py-4'>10+</h1>
                            <h3 className='text-xl font-montserrat opacity-80'>Years Of Experience</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAchievement;