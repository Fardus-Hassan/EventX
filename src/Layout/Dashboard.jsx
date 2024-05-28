import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink, Outlet } from 'react-router-dom';
import WithLoading from '../components/WithLoading';
import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../Global/GlobalContext";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const Dashboard = () => {

    const { user, logout } = useContext(GlobalStateContext)



    const [isOpen, setIsOpen] = useState(false);
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


    const [open, setOpen] = useState(false)

    return (
        <WithLoading>
            <div className='text-black dark:text-white flex bg-white dark:bg-themeColor max-h-screen overflow-hidden'>
                <div className={`border-r border-pmColor border-opacity-50 lg:static absolute duration-500 z-50 ${open ? " translate-x-0 " : " translate-x-[-100%] lg:translate-x-0"} bg-white dark:bg-themeColor3 h-screen`}>
                    <aside className="flex flex-col w-64 xs:w-screen h-screen px-5 py-8 overflow-y-auto xs:pt-20">
                        <div className="flex justify-between items-start">
                            <Link to='/' className='mb-5'>
                                <h1 className='sm:text-3xl text-2xl dark:text-white dark:text-opacity-80 text-black text-opacity-70 font-poppins font-black'>Event<span className='text-pmColor'>X</span></h1>
                            </Link>
                            <label className="swap swap-rotate mt-[2px]">

                                {/* this hidden checkbox controls the state */}
                                <input onClick={toggle} type="checkbox" className="theme-controller" value="synthwave" />

                                {isDark ? <svg className={`fill-current w-7 h-7`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg> : <svg className={`fill-current w-7 h-7`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>}

                            </label>
                        </div>

                        <div className="flex flex-col justify-between flex-1">
                            <nav className="-mx-3 space-y-3 ">
                                <NavLink className="flex items-center px-3 py-2  sm:mt-10 mt-6 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-pmColor dark:hover:bg-pmColor" to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    <span className="mx-2 text-sm font-medium">Home</span>
                                </NavLink>

                                <NavLink className="flex items-center px-3 py-2  sm:mt-10 mt-6 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-pmColor dark:hover:bg-pmColor" to="/services">
                                    <MdMiscellaneousServices className="text-xl" />

                                    <span className="mx-2 text-sm font-medium">Services</span>
                                </NavLink>

                                <NavLink onClick={() => setOpen(false)} className="flex items-center px-3 py-2  sm:mt-10 mt-6 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-pmColor dark:hover:bg-pmColor" to="/dashboard" end>
                                    <TbLayoutDashboardFilled className="text-xl" />

                                    <span className="mx-2 text-sm font-medium">DashBoard</span>
                                </NavLink>

                                <div className="space-y-3 ml-7">
                                    <NavLink onClick={() => setOpen(false)} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-pmColor dark:hover:bg-pmColor" to="add-service">
                                        <IoIosAddCircleOutline className="text-xl" />

                                        <span className="mx-2 text-sm font-medium">Add Service</span>
                                    </NavLink>

                                    <NavLink onClick={() => setOpen(false)} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-pmColor dark:hover:bg-pmColor" to="manage-services">
                                        <MdManageHistory className="text-xl" />

                                        <span className="mx-2 text-sm font-medium">Manage Services</span>
                                    </NavLink>

                                    <NavLink onClick={() => setOpen(false)} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-pmColor dark:hover:bg-pmColor" to="booked-service">
                                        <CiBookmarkCheck className="text-xl" />

                                        <span className="mx-2 text-sm font-medium">Booked Service</span>
                                    </NavLink>

                                    <NavLink onClick={() => setOpen(false)} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-pmColor dark:hover:bg-pmColor" to="service-to-do">
                                        <GrUpdate className="text-sm ml-1" />

                                        <span className="mx-2 text-sm font-medium">Service To Do</span>
                                    </NavLink>
                                </div>

                            </nav>

                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-3">


                                        <div className="relative">
                                            <img className="object-cover w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-0 ring-1 ring-white bottom-0"></span>
                                        </div>

                                        <h2 className="text-base font-semibold text-gray-800 dark:text-white">{user.displayName}</h2>
                                    </div>

                                    <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border rounded-lg">
                                        <IoIosLogOut onClick={logout} className="text-lg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="bg-white dark:bg-themeColor flex-1 pt-5">
                    <div className="flex justify-end w-full pr-5 mx-auto lg:hidden fixed z-50">
                        <div onClick={() => setOpen(!open)} className={`bg-pmColor absolute z-50 dark:bg-opacity-100 shadow-2xl dark:bg-themeColor3 w-fit sm:p-4 p-3 rounded-xl `}>
                            {
                                open ?
                                    <IoMdClose className="sm:text-2xl text-lg text-white" />
                                    :
                                    <FaBarsStaggered className="sm:text-2xl text-lg text-white" />
                            }
                        </div>
                    </div>
                    <div className="max-h-screen overflow-y-auto">
                        <div className="w-[95%] mx-auto">

                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </WithLoading>
    );
};

export default Dashboard;