import React from 'react';

const Details = () => {
    return (
        <div>
            <div className="mb-10 sm:mb-[100px]  relative h-[60vh] overflow-y-auto bg-cover bg-bottom bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://images.pexels.com/photos/3756623/pexels-photo-3756623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
                <div className='flex flex-col absolute top-[50%] translate-y-[-50%] text-center z-30 left-[50%] translate-x-[-50%] w-[90%]'>
                    <h1 className=' max-w-[900px] mx-auto text-white lg:text-[56px] text-[35px] font-black font-poppins'>Service <span className='text-pmColor'>Details</span></h1>
                    <p className=' max-w-[800px] mx-auto text-white lg:text-[20px] text-[16px] mt-4 mb-8 font-montserrat'> The service you want to see is below</p>
                    {/* <button className="group mb-4 relative inline-flex w-fit text-center mx-auto h-12 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                        <span>Our Services</span>
                        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                        </div>
                    </button> */}
                </div>
                <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
            </div>
            <div className='max-w-[1440px] mx-auto w-[98%] flex lg:flex-row flex-col gap-10 justify-between lg:items-center py-10 sm:pb-[100px]'>
                <div className='lg:w-[50%] h-[600px] rounded-xl'>
                    <img className='object-cover h-full w-full rounded-xl' src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='lg:w-[50%] space-y-6 lg:px-0 sm:px-5 px-2'>
                    <h1 className='sm:text-5xl text-4xl font-poppins font-semibold'>Service Name</h1>
                    <p className='text-lg font-montserrat font-semibold'>Price : $230.50</p>
                    <p className='font-montserrat sm:text-base text-sm'><strong>Description :</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quidem.</p>

                    <p className='font-montserrat sm:text-base text-sm'>Joydebpur, Dhaka, Bangladesh</p>
                    <div className="flex items-center">
                        <div className="flex items-center gap-2">
                            <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                            <a href="#" className="mx-2 font-semibold font-montserrat text-gray-700 dark:text-gray-200" role="link">Fardus Hassan</a>
                        </div>
                    </div>
                    <button className="group relative inline-flex w-fit text-center mx-auto h-12 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                        <span>Book Now</span>
                        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                        </div>
                    </button>
                    <form className='border lg:w-[400px] sm:p-6 p-3 rounded-2xl'>
                        <h2 className='font-poppins font-semibold text-xl mb-3'>Comment</h2>
                        <input
                            type="text" name="comment" placeholder="Type Your Comment" className="block w-full px-4 py-2 mt-2 text-gray-700 h-[60px] placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-pmColor focus:ring-pmColor focus:outline-none focus:ring focus:ring-opacity-40" />
                        <button className='px-5 py-2 bg-pmColor rounded-xl block mt-3 text-white'>Sent</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Details;