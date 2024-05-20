import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaHandPointDown  } from "react-icons/fa";
import WithLoading from "../../components/WithLoading";

const Details = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(() => {
            setIsVisible(true);
        }, 10); // small delay to trigger the transition
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsOpen(false);
        }, 500); // match the duration of your CSS transition
    };


    useEffect(() => {
        // Function to trigger the animation on component mount
        const triggerAnimation = () => {
            const arrows = document.querySelectorAll('.scroll-arrow');
            arrows.forEach((arrow, index) => {
                setTimeout(() => {
                    arrow.classList.add('animate-bounce');
                }, index * 0); // Adjust the delay as needed
            });
        };
    
        // Delay before triggering animation
        const delay = 1010; // 1.5 seconds in milliseconds
    
        const timeoutId = setTimeout(() => {
            triggerAnimation();
        }, delay);
    
        // Cleanup function
        return () => {
            // Clear timeout if component unmounts before animation starts
            clearTimeout(timeoutId);
    
            // Remove animation classes when component unmounts
            const arrows = document.querySelectorAll('.scroll-arrow');
            arrows.forEach(arrow => {
                arrow.classList.remove('animate-bounce');
            });
        };
    }, []);
    

    return (
        <WithLoading>
            <div className="mb-10 sm:mb-[100px]  relative h-[60vh] overflow-y-auto bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://images.pexels.com/photos/3756623/pexels-photo-3756623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
            <div className='flex flex-col absolute top-[50%] translate-y-[-50%] text-center z-30 left-[50%] translate-x-[-50%] w-[90%]'>
                <h1 className='max-w-[900px] mx-auto text-white lg:text-[56px] text-[35px] font-black font-poppins'>Service <span className='text-pmColor'>Details</span></h1>
                <p className='max-w-[800px] mx-auto text-white lg:text-[20px] text-[16px] mt-4 mb-8 font-montserrat'> The service you want to see is below</p>
                <div className="">
                    
                    {/* Use scroll-arrow class and key prop for animation */}
                    <FaHandPointDown  className="sm:text-5xl text-3xl text-white mx-auto mr-5 inline-block scroll-arrow" key="arrow1" />
                    <FaHandPointDown  className="sm:text-5xl text-3xl text-white mx-auto ml-5 inline-block scroll-arrow" key="arrow2" />
                </div>
            </div>
            <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
        </div>
            <div className='max-w-[1440px] mx-auto w-[98%] flex lg:flex-row flex-col gap-10 justify-between lg:items-center py-10 sm:pb-[100px]'>
                <div className='lg:w-[50%] sm:h-[600px] h-[400px] rounded-xl relative overflow-hidden'>
                    <img className='object-cover h-full w-full rounded-xl transition-transform duration-500 transform hover:scale-110' src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='lg:w-[50%] space-y-6 lg:px-0 sm:px-5 px-2'>
                    <h1 className='sm:text-5xl text-4xl font-poppins font-semibold text-black dark:text-white'>Service Name</h1>
                    <p className='text-lg font-montserrat font-semibold text-black dark:text-white'>Price : $230.50</p>
                    <p className='font-montserrat sm:text-base text-sm text-black dark:text-white'><strong>Description :</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, labore. Accusamus architecto esse necessitatibus cum tempore, quia culpa illo, possimus voluptates cumque maiores molestias laborum vitae in laboriosam eos illum iusto et, aspernatur deleniti provident tenetur. Illo voluptas eum, aut quo asperiores exercitationem distinctio animi possimus maxime at, cupiditate commodi architecto magnam deleniti nihil dignissimos aliquid omnis expedita ab aliquam.</p>

                    <p className='font-montserrat sm:text-base text-sm text-black dark:text-white'>Joydebpur, Dhaka, Bangladesh</p>
                    <div className="flex items-center">
                        <div className="flex items-center gap-2">
                            <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                            <a href="#" className="mx-2 font-semibold font-montserrat text-gray-700 dark:text-gray-200" role="link">Fardus Hassan</a>
                        </div>
                    </div>


                    <button onClick={handleOpen} className="group relative inline-flex w-fit text-center mx-auto h-12 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                        <span>Book Now</span>
                        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </button>
                    <div className="relative flex justify-start z-50 shadow-2xl">
                        {isOpen && (
                            <div className={`fixed inset-0 z-10 overflow-y-auto transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                <div className="bg-themeColor3 bg-opacity-50 flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                    <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                                        &#8203;
                                    </span>
                                    <div
                                        className={`relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-themeColor3 sm:my-8 sm:w-full lg:max-w-[50%] sm:max-w-[90%] sm:p-6 sm:align-middle ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'}`}
                                        style={{
                                            transition: 'transform 300ms ease-out, opacity 300ms ease-out',
                                        }}
                                    >
                                        <div onClick={handleClose} className="flex hover:cursor-pointer justify-end mb-4">
                                            <IoIosCloseCircleOutline className="text-3xl text-black dark:text-white" />
                                        </div>
                                        <div className="relative overflow-hidden rounded-xl h-[400px] mb-3">
                                            <img className='object-cover w-full h-[400px] rounded-xl ransition-transform duration-500 transform hover:scale-110' src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        </div>
                                        <h3 className="text-lg text-center font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                            Service Name
                                        </h3>
                                        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                                            Your new project has been created. Invite your team to collaborate on this project.
                                        </p>
                                        <form className="mt-4" action="#">
                                            <div className="flex sm:flex-row flex-col gap-4 sm:mb-5 mb-3 w-full justify-center">
                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email1"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email1"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email2"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email2"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-row flex-col gap-4 sm:mb-5 mb-3 w-full justify-center">
                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email1"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email1"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email2"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email2"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-row flex-col gap-4 sm:mb-5 mb-3 w-full justify-center">
                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email1"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email1"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email2"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email2"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-row flex-col gap-4 sm:mb-5 mb-3 w-full justify-center">
                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email1"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email1"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email2"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email2"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-row flex-col gap-4 sm:mb-5 mb-3 w-full justify-center">
                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email1"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email1"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full">
                                                    <label
                                                        htmlFor="email2"
                                                        className="text-sm text-gray-700 dark:text-gray-200"
                                                    >
                                                        Email address
                                                    </label>

                                                    <div className="block mt-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email2"
                                                            placeholder="user@email.xyz"
                                                            defaultValue="devdhaif@gmail.com"
                                                            className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-blue-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="mt-10 gap-3 flex sm:items-center">
                                                <button
                                                    type="button"
                                                    onClick={handleClose}
                                                    className="w-[50%] px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                                >
                                                    Cancel
                                                </button>

                                                <button className="group relative inline-flex w-[50%] text-center mx-auto h-10 items-center justify-center overflow-hidden rounded-md bg-pmColor px-8 font-medium text-neutral-200">
                                                    <span>Purchase</span>
                                                    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                                                    </div>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <form className='border lg:w-[400px] sm:p-6 p-3 rounded-2xl -translate-y-5'>
                        <h2 className='font-poppins font-semibold text-xl mb-3 text-black dark:text-white'>Comment</h2>
                        <input
                            type="text" name="comment" placeholder="Type Your Comment" className="block w-full px-4 py-2 mt-2 text-gray-700 h-[60px] placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-pmColor focus:ring-pmColor focus:outline-none focus:ring focus:ring-opacity-40" />
                        <button className='px-5 py-2 bg-pmColor rounded-xl block mt-3 text-white'>Sent</button>
                    </form>
                </div>
            </div>
        </WithLoading>
    );
};

export default Details;