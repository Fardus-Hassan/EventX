import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (

        <div
            className="mb-10 sm:mb-[100px]  relative lg:h-[calc(100vh-88px)] md:h-[calc(100vh-85px)] h-[calc(100vh-62px)] overflow-y-auto bg-cover bg-top bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
            <div className='flex flex-col absolute top-[50%] translate-y-[-50%] text-center z-30 left-[50%] translate-x-[-50%] w-[90%]'>
                <h1 className=' max-w-[900px] mx-auto text-white lg:text-[46px] text-[35px] font-black font-poppins'>Crafting Unforgettable Experiences for Every <span className='text-pmColor'><Typewriter
                    words={['Festivity', 'Occasion', 'Event']}
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={3000}
                    cursorStyle='_'
                    autoStart={true}
                    loop={true}
                    cursor='pointer'
                /></span></h1>
                <p className=' max-w-[800px] mx-auto text-white lg:text-[16px] text-[14px] mt-4 mb-8 font-montserrat'> At EventX, we specialize in meticulously orchestrating events of all scales, ensuring every detail exceeds expectations. From intimate gatherings to grand affairs, trust us for flawless execution.</p>
                <Link to='/services'>
                    <button className="group mb-4 relative inline-flex w-fit text-center mx-auto h-12 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                        <span>Our Services</span>
                        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                        </div>
                    </button>
                </Link>
            </div>
            <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
        </div>
    );
}




export default Banner;