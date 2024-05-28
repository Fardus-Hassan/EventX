import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { GlobalStateContext } from '../../Global/GlobalContext';
import axios from 'axios';
import SiteTitle from '../sheared/SiteTitle';
import toast from 'react-hot-toast';

const ServiceToDo = () => {
    const { user } = useContext(GlobalStateContext);
    const email = user?.email;
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState([]);
    const [statuses, setStatuses] = useState({});

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/bookedEvents/ToDo/${email}`);
            setDatas(data);
            const initialStatuses = data.reduce((acc, item) => {
                acc[item._id] = item.status;
                return acc;
            }, {});
            setStatuses(initialStatuses);
            setLoading(false);
        }
        getData();
    }, [email]);

    const handleDropdownToggle = async (e, id) => {
        const newStatus = e.target.value;
        try {
            const response = await axios.patch(`${import.meta.env.VITE_SERVER}/bookedEvents/status/${id}`, { status: newStatus });

            if (response.data.acknowledged) {
                toast.success(`Status updated to ${newStatus}`);
                setStatuses(prevStatuses => ({
                    ...prevStatuses,
                    [id]: newStatus
                }));
            } else {
                toast.error('Failed to update status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error('An error occurred while updating the status');
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'bg-yellow-500';
            case 'Working':
                return 'bg-blue-500';
            case 'Completed':
                return 'bg-green-500';
            default:
                return 'bg-gray-500';
        }
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <section className="bg-white dark:bg-themeColor min-h-screen w-screen lg:w-full lg:py-10 py-16">
            <SiteTitle title='DashBoard | Service To Do'></SiteTitle>

            {
                datas.length > 0 ?
                    <div className="w-[95%] mx-auto min-h-screen overflow-x-auto">
                        <div>
                            <table className="table">
                                <thead>
                                    <tr className='text-black dark:text-white'>
                                        <th></th>
                                        <th></th>
                                        <th>Service Title</th>
                                        <th>Customer Name</th>
                                        <th>Customer Email</th>
                                        <th>Instruction</th>
                                        <th>Date of Service</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datas.map((data, i) => (
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
                                                <div className='flex items-center gap-5'>
                                                    <div className='avatar'>
                                                        <div className="mask rounded-md w-14 h-14">
                                                            <img className='w-14 h-14 rounded-full' src={data?.currentUserPhoto} alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h1 className='font-montserrat font-bold'>{data.currentUserName}</h1>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h1 className='font-medium'>{data?.currentUserEmail}</h1>
                                            </td>
                                            <td>
                                                <h1 className='font-medium'>{data.SpecialInstruction}</h1>
                                            </td>
                                            <td>
                                                <h1 className='font-medium'>{data.ServiceTakingDate}</h1>
                                            </td>
                                            <td>
                                                <div className="relative inline-block min-w-28 rounded-3xl text-white font-montserrat font-semibold">
                                                    <div className="relative inline-block w-full">
                                                        <select
                                                            onChange={(e) => handleDropdownToggle(e, data._id)}
                                                            value={statuses[data._id] || data.status}
                                                            className={`block appearance-none ${getStatusColor(statuses[data._id] || data.status)} w-full rounded-3xl px-4 py-3 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline transition-colors duration-300`}
                                                        >
                                                            <option value="Pending">Pending</option>
                                                            <option value="Working">Working</option>
                                                            <option value="Completed">Completed</option>
                                                        </select>
                                                        <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 transition-transform duration-100 rotate-180`}>
                                                            <svg className="fill-current h-5 w-5 pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                <path d="M10 3a1 1 0 00-.71.29l-5 5a1 1 0 101.42 1.42L10 5.41l4.29 4.3a1 1 0 001.42-1.42l-5-5A1 1 0 0010 3z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div> : 
                    <div className="flex items-center px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-center lg:h-[calc(100vh-80px)] h-[calc(100vh-128px)]">
                            <p className="p-3 text-sm font-medium text-pmColor rounded-full bg-blue-50 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </p>
                            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">No Services Available</h1>
                            <p className="mt-4 text-gray-500 dark:text-gray-400">No one has booked any of your services so far, you can add more services if you want</p>

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

export default ServiceToDo;
