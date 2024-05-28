import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GlobalStateContext } from '../../Global/GlobalContext';
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navigation = () => {

    const { user, logout, handleSearch, open, setOpen, isOpen, setIsOpen } = useContext(GlobalStateContext)


    
    // console.log(icon);
    const [isDark, setIsDark] = useState(() => {
        // Retrieve theme preference from local storage or default to false (light theme)
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : false;
    });


    useEffect(() => {
        // Save theme preference to local storage whenever it changes
        localStorage.setItem("theme", JSON.stringify(isDark));

        // Update HTML class based on the theme
        const html = document.querySelector("html");
        if (isDark) {
            html.classList.add("dark");
            html.classList.remove("light");
        } else {
            html.classList.add("light");
            html.classList.remove("dark");
        }

    }, [isDark]);

    const toggle = () => {
        setIsDark(!isDark);
    };


    const handleSubmit = (e) => {
        handleSearch(e.target.value);
    }


    const inputRef = useRef(null);

    // Use useEffect to focus the input when the component mounts
    useEffect(() => {
        open && inputRef.current.focus();
    }, [open]);

    return (
        <nav
            className=" bg-white shadow dark:bg-themeColor3 fixed w-full z-50">
            <div
                className={`w-screen lg:h-[120px] sm:h-[200px] h-[175px] border-b border-pmColor border-opacity-30 bg-sky-200 dark:bg-themeColor duration-300 absolute ${open ? "translate-y-0" : "translate-y-[-100%]"} left-0 z-50`}>
                <div className='flex sm:justify-end justify-center md:mr-10 sm:mr-5 sm:mt-0 mt-3 sm:items-center h-full z-50 hover:cursor-pointer'>
                    <IoIosCloseCircleOutline
                        onClick={() => {
                            setOpen(!open)

                        }}
                        className='text-pmColor text-5xl' />
                </div>
                <div className='absolute flex justify-center lg:translate-y-[-170%] sm:translate-y-[-240%] translate-y-[-220%] sm:w-[50%] w-[90%] left-[50%] translate-x-[-50%]'>
                    <div className='w-full'>
                        <from className="flex  items-center flex-row-reverse mt-2">


                            <input ref={inputRef} type="text" name='search' onChange={handleSubmit} placeholder="Search Service Name" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-12 rtl:pr-11 rtl:pl-5 dark:bg-themeColor3 dark:text-gray-300 dark:border-gray-600 focus:border-pmColor dark:focus:border-pmColor focus:outline-none" />
                        </from>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] py-4 sm:py-6 lg:py-2 lg:w-[95%] w-[90%] mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to='/'>
                            <h1 className='sm:text-3xl text-2xl dark:text-white dark:text-opacity-80 text-black text-opacity-70 font-poppins font-black'>Event<span className='text-pmColor'>X</span></h1>
                        </Link>
                        {/* Mobile menu button */}
                        <div className="flex justify-center items-center sm:gap-5 gap-4 lg:hidden">



                            <label className="swap swap-rotate">

                                {/* this hidden checkbox controls the state */}
                                <input onClick={toggle} type="checkbox" className="theme-controller" value="synthwave" />

                                {isDark ? <svg className={`fill-current w-8 h-8`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg> : <svg className={`fill-current w-8 h-8`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>}

                            </label>
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                            {user ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || "https://i.ibb.co/m9jpXGZ/profile-user.png"} alt="User" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content text-black dark:text-white rounded-box w-fit bg-white dark:bg-themeColor3">
                                    <li><a>{user?.displayName}</a></li>
                                    <li><a>{user?.email}</a></li>
                                    <li><a onClick={() => logout()} className='text-pmColor'>Logout</a></li>
                                </ul>
                            </div> : <Link onClick={() => setIsOpen(false)} to='/login' className="group relative inline-flex w-fit text-center mx-auto text-sm text-nowrap py-2 items-center justify-center overflow-hidden rounded-md bg-pmColor px-5 font-medium text-neutral-200">
                                <span>Sign In</span>
                                <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                                </div>
                            </Link>}
                        </div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className='lg:flex lg:justify-center lg:items-center lg:gap-5'>
                        <div className={`absolute inset-x-0 z-10 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:bg-transparent bg-white lg:dark:bg-transparent dark:bg-themeColor3 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                            <div className="container flex items-center justify-center px-6 pt-6 sm:gap-0 gap-5 xs:gap-0 sm:p-6 pb-2 mx-auto text-gray-600 capitalize dark:text-gray-300">
                                <Link to='/services' onClick={() => {
                                    {
                                        setOpen(!open)
                                        setIsOpen(!isOpen)
                                    }
                                }}>

                                    <IoSearch className='text-xl text-pmColor mr-3 hover:cursor-pointer' />
                                </Link>
                                <NavLink onClick={() => setIsOpen(false)} to="/" className={({ isActive, isPending }) =>
                                    isActive
                                        ? "border-b-2 hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 border-pmColor mx-1.5 sm:mx-6"
                                        : isPending
                                            ? "pending"
                                            : "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-pmColor mx-1.5 sm:mx-6"
                                }>Home</NavLink>
                                {/* border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 */}

                                <NavLink onClick={() => setIsOpen(false)} to="/services" className={({ isActive, isPending }) =>
                                    isActive
                                        ? "border-b-2 hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 border-pmColor mx-1.5 sm:mx-6"
                                        : isPending
                                            ? "pending"
                                            : "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-pmColor mx-1.5 sm:mx-6"
                                }>Services </NavLink>

                                {
                                    user && <NavLink onClick={() => setIsOpen(false)} to="/dashboard" className={({ isActive, isPending }) =>
                                        isActive
                                            ? "border-b-2 hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 border-pmColor mx-1.5 sm:mx-6"
                                            : isPending
                                                ? "pending"
                                                : "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-pmColor mx-1.5 sm:mx-6"
                                    }>Dashboard</NavLink>
                                }

                            </div>
                            <div className="flex items-center justify-center mt-4 lg:mt-0">
                                {user ? <div className="dropdown dropdown-end lg:block hidden z-50">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL || "https://i.ibb.co/m9jpXGZ/profile-user.png"} alt="User" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content text-black dark:text-white rounded-box w-fit bg-white dark:bg-themeColor3">
                                        <li><a>{user?.displayName}</a></li>
                                        <li><a>{user?.email}</a></li>
                                        <li><a onClick={() => logout()} className='text-pmColor'>Logout</a></li>
                                    </ul>
                                </div> : <Link onClick={() => setIsOpen(false)} to='/login' className="group relative inline-flex w-fit text-center mx-auto text-sm text-nowrap py-2 items-center justify-center overflow-hidden rounded-md bg-pmColor px-5 font-medium text-neutral-200">
                                    <span>Sign In</span>
                                    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                                    </div>
                                </Link>}

                            </div>
                        </div>
                        <div className='lg:block hidden'>
                            <label className="swap swap-rotate mt-[6px]">

                                {/* this hidden checkbox controls the state */}
                                <input onClick={toggle} type="checkbox" className="theme-controller" value="synthwave" />

                                {isDark ? <svg className={`fill-current w-8 h-8`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg> : <svg className={`fill-current w-8 h-8`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>}

                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;