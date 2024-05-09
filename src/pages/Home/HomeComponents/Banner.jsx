import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {

    // const [value, setValue] = useState('')
    // // const realValue = value.length > 0 ? value : "null"

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const search = e.target.value
    //     setValue(search)
    //   }
    

    return (

        <div className='pb-10 sm:pb-[100px] pt-2 max-w-[1440px] mx-auto lg:w-[90%] relative rounded-2xl'>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                scrollbar={{
                    hide: true,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                loop={true}
                modules={[Scrollbar, Navigation, Pagination, Autoplay]}
                className="mySwiper max-h-[80vh] rounded-2xl"
            >
                <SwiperSlide>
                    <img className='min-h-[80vh] object-cover block w-full' src="https://images.pexels.com/photos/7709189/pexels-photo-7709189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div></SwiperSlide>
                <SwiperSlide>
                    <img className='min-h-[80vh] object-cover block w-full' src="https://images.pexels.com/photos/7709259/pexels-photo-7709259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div></SwiperSlide>
                <SwiperSlide><img className='min-h-[80vh] object-cover block w-full' src="https://images.pexels.com/photos/7709122/pexels-photo-7709122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div></SwiperSlide>


                <div className=' max-w-[800px] mx-auto absolute top-[50%] translate-y-[-50%] text-center z-30 left-[50%] translate-x-[-50%] w-[90%]'>
                    <h1 className='text-white lg:text-[46px] text-[35px] font-black'>Connect and Share Services with Our Community</h1>
                    <p className='text-white lg:text-[16px] text-[14px] mt-4 mb-8'> SKILL SHEAR connects users to share skills, services, and resources locally, fostering community collaboration and mutual support effortlessly.</p>
                    <form className="input bg-white dark:bg-themeColor input-bordered flex md:w-[700px] w-full mx-auto md:flex-row flex-col items-center md:h-14 gap-2 rounded-full outline-none border-none">
                        <input 
                        // onChange={handleSubmit}
                         type="text" name='search' className="grow w-ful rounded-3xl font-heebo md:text-left text-center md:pt-0 pt-3 font-medium border-none outline-none" placeholder="Search" />
                        {/* <Link to={`/country/${realValue}`} className="inline-block"> */}
                            <button type="submit" className="bg-pmColor px-5 rounded-3xl text-base py-2 text-white md:mt-0 mt-3 font-heebo font-semibold">Search</button>
                        {/* </Link> */}
                    </form>
                </div>
            </Swiper>
        </div>
    );
}




export default Banner;