
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Reviews = () => {


    const loop = [1, 2, 3, 4, 5];

    return (
        <div className="max-w-[1440px] mx-auto w-[95%]">
            <div data-aos="fade-down" data-aos-duration="1000" className="text-center mb-10">
                <div className="sm:text-left text-center">
                    <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins">Popular Services</h1>
                    <p className="text-black dark:text-white mt-6 mb-10 max-w-[700px] font-medium sm:text-lg font-montserrat">Here are some good services posted by our community, you can choose your preferred service from here</p>
                </div>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000">
                <Swiper
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >


                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-70 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className="  dark:text-white text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/94/21/55/942155b73e3ad9184c190f08aca149d6.jpg" alt="" />
                                </span>
                                <h3 className="  dark:text-white text-black text-center text-opacity-90 font-poppins text-xl my-3 font-semibold">Ava Adventures</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto  dark:text-white text-black text-opacity-60 text-center font-montserrat font-bold">The event was organized perfectly. Attention to detail was superb. Highly recommended for any event planning needs.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-70 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className=" dark:text-white text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/c2/a2/e5/c2a2e5b6acbf04d453eadb78c37d528a.jpg" alt="" />
                                </span>
                                <h3 className=" dark:text-white text-black text-center text-opacity-90 font-poppins text-xl my-3 font-semibold">Maxine Wanderlust</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto dark:text-white text-black text-opacity-60 text-center font-montserrat font-bold">Incredible service from start to finish. Our event was a huge success thanks to their expertise and dedication.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-70 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className=" dark:text-white text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/0a/38/d5/0a38d57007e2b01e789b8fa321e63635.jpg" alt="" />
                                </span>
                                <h3 className=" dark:text-white text-black text-center text-opacity-90 font-poppins text-xl my-3 font-semibold">Ethan Rivers</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto dark:text-white text-black text-opacity-60 text-center font-montserrat font-bold">Professional and reliable event management. Everything went smoothly and exceeded our expectations. Will definitely use again.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-70 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className=" dark:text-white text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/35/42/a9/3542a919850265a62cbf88d64321dcbd.jpg" alt="" />
                                </span>
                                <h3 className=" dark:text-white text-black text-center text-opacity-90 font-poppins text-xl my-3 font-semibold"> Marcus Journeys</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto dark:text-white text-black text-opacity-60 text-center font-montserrat font-bold">Outstanding job! Our event was seamless and stress-free. The team was helpful, friendly, and efficient throughout.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-70 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className="dark:text-white  text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/82/1e/82/821e8200c5fc1ad020190bfb75a10786.jpg" alt="" />
                                </span>
                                <h3 className=" dark:text-white text-black text-center text-opacity-90 font-poppins text-xl my-3 font-semibold">Oliver Outdoors</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto dark:text-white text-black text-opacity-60 text-center font-montserrat font-bold">The team made our event unforgettable. Every detail was handled professionally. Excellent communication and execution.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;