import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../../../Global/GlobalContext";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

const Services = ({ item }) => {


    const { user } = useContext(GlobalStateContext)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="w-full overflow-hidden rounded-2xl bg-gray-200 dark:bg-themeColor3 mx-auto">
                <div className="overflow-hidden rounded-t-2xl">
                    <img className="w-full mx-auto object-cover object-center sm:h-[400px] h-[300px] transform transition-transform duration-500 hover:scale-110" src={item?.image} alt="" />
                </div>



                <div className="p-6">
                    <div>
                        <span className="text-lg font-medium text-pmColor"><strong>Price : </strong>{item.price}</span>
                        <a className="block mt-4 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white">{item.name}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.Description}</p>
                    </div>

                    <div className="mt-6">
                        <div className="flex flex-col-reverse items-start gap-5">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={item.photoURL} alt="Avatar" />
                                <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{item.userName}</p>
                            </div>
                            <span className="mx-1 text-sm text-gray-600 dark:text-gray-300"><strong>Area : {item.area}</strong></span>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full text-center">
                    {
                        user ? <Link to={`/details/${item._id}`}>
                            <button className="group mb-4 relative inline-flex w-fit text-center mx-auto h-12 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                                <span>View Detail</span>
                                <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                                </div>
                            </button>
                        </Link> : <button onClick={() => setIsOpen(true)} className="group mb-4 relative inline-flex w-fit text-center mx-auto h-12 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                            <span>View Detail</span>
                            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                            </div>
                        </button>
                    }
                    {isOpen && (
                        <div
                            className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                    &#8203;
                                </span>

                                <div
                                    className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-themeColor3 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                                >
                                    <div>
                                        <div className="flex items-center justify-center">
                                            <RiGitRepositoryPrivateLine className="text-2xl" />
                                        </div>

                                        <div className="mt-2 text-center">
                                            <h3
                                                className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                                id="modal-title"
                                            >
                                                Private Route
                                            </h3>
                                            <p className="mt-2 text-sm w-[80%] mx-auto text-gray-500 dark:text-gray-400">
                                                If you want to see detail information ! Please Sign In
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:flex items-center justify-center">
                                        <div className="sm:flex sm:items-center ">
                                            <button
                                                onClick={() => setIsOpen(false)}
                                                className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                            >
                                                Cancel
                                            </button>

                                            <Link to={`/details/${item._id}`}>
                                                <button onClick={() => setIsOpen(true)} className="group relative inline-flex sm:w-fit w-full sm:mt-0 mt-3 text-center mx-auto h-9 items-center justify-center overflow-hidden rounded-md bg-pmColor px-3 font-medium text-neutral-200">
                                                    <span className="text-sm">Sign In</span>
                                                    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Services;