
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { GlobalStateContext } from '../../Global/GlobalContext';
import { IoWarningOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import SiteTitle from '../sheared/SiteTitle';



const ManageService = () => {

    const { user } = useContext(GlobalStateContext)
    const email = user?.email
    const [isOpen, setIsOpen] = useState(false);

    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState([])
    const [isVisible, setIsVisible] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(() => {
            setIsVisible(true);
        }, 0); // small delay to trigger the transition
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsOpen(false);
        }, 500); // match the duration of your CSS transition
    };



    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/events/byEmail/${email}`)
            setDatas(data)
            setLoading(false)
        }
        getData()
    }, [email])


    if (loading) {
        return <Spinner></Spinner>
    }


    const handleDelete = async (id) => {
        const { data } = await axios.delete(`${import.meta.env.VITE_SERVER}/events/delete/${id}`)
        if (data.acknowledged) {
            // window.location.reload()
            toast.success('Deleted Successfully');
            setDatas(datas.filter(data => data._id !== id))
        }
    }


    return (
        <section className="bg-white dark:bg-themeColor lg:w-full w-screen lg:py-10 py-16 ">
            <SiteTitle title='DashBoard | Manage Services'></SiteTitle>
            {
                datas.length > 0 ? <div className="w-[95%] mx-auto min-h-screen">
                    <div className=" overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className='text-black dark:text-white'>
                                    <th></th>
                                    <th></th>
                                    <th>Service Title</th>
                                    <th>Service Description</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas &&
                                    datas.map((data, i) => (
                                        <tr key={data._id}>
                                            <th>{i + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask rounded-md w-40 h-40">
                                                        <img src={data.image} alt="Service" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>

                                                <div>
                                                    <div className="font-bold">{data.name}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <h3 className='md:hidden block'>
                                                    {data?.Description.slice(0, 50,) || data.Description}
                                                    {data?.Description.length > 50 ? '...' : ''}
                                                </h3>
                                                <h3 className='md:block hidden'>
                                                    {data?.Description}
                                                </h3>
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/dashboard/manage-service/${data?._id}`}
                                                >
                                                    <button className="ml-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                        </svg>
                                                    </button>
                                                </Link>

                                            </td>

                                            <td>
                                                <button onClick={handleOpen}
                                                    className="ml-2"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                                {isOpen && (
                                                    <div
                                                        className={`fixed inset-0 z-10 bg-black bg-opacity-5 overflow-y-auto transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                                                        aria-labelledby="modal-title"
                                                        role="dialog"
                                                        aria-modal="true"
                                                    >
                                                        <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
                                                            <span className="inline-block align-middle h-screen" aria-hidden="true">
                                                                &#8203;
                                                            </span>

                                                            <div
                                                                className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg rtl:text-right dark:bg-themeColor3 sm:my-8 sm:align-middle max-w-sm sm:w-full p-6"
                                                            >
                                                                <div>
                                                                    <div className="flex items-center justify-center">
                                                                        <IoWarningOutline className="text-2xl" />
                                                                    </div>

                                                                    <div className="mt-2 text-center">
                                                                        <h3
                                                                            className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                                                            id="modal-title"
                                                                        >
                                                                            Warning
                                                                        </h3>
                                                                        <p className="mt-2 text-sm w-[80%] mx-auto text-gray-500 dark:text-gray-400">
                                                                            If you delete it, you can't get it back
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-5 sm:flex items-center justify-center">
                                                                    <div className="sm:flex sm:items-center ">
                                                                        <button
                                                                            onClick={handleClose}
                                                                            className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                                                        >
                                                                            Cancel
                                                                        </button>

                                                                        <button onClick={() => {
                                                                            handleClose();
                                                                            handleDelete(data?._id)
                                                                        }} className="group relative mt-3 sm:mt-0 inline-flex sm:w-fit w-full text-center mx-auto h-[35px] items-center justify-center overflow-hidden rounded-md bg-pmColor px-3 font-medium text-neutral-200">
                                                                            <span className="text-sm">Delete</span>
                                                                            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>

                                    ))}

                            </tbody>
                        </table>
                    </div>
                </div> : <div className="flex items-center max-h-screen px-6 mx-auto max-w-screen">
                    <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-center lg:h-[calc(100vh-80px)] h-[calc(100vh-128px)]">
                        <p className="p-3 text-sm font-medium text-pmColor rounded-full bg-blue-50 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">No Services Available</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">You have not added any service yet, click the button below to add a service</p>

                        <div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0">
                            <Link to='/dashboard/add-service'>
                                <button className="group mb-4 relative inline-flex w-fit text-center mx-auto h-10 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                                    <span>Add Service</span>
                                    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            }

        </section>
    );
};

export default ManageService;