
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { GlobalStateContext } from '../../Global/GlobalContext';
import { BsPen } from 'react-icons/bs';
import { AiTwotoneDelete } from 'react-icons/ai';
import toast from 'react-hot-toast';



const ManageService = () => {

    const { user } = useContext(GlobalStateContext)
    const email = user.email

    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState([])


    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/events/${email}`)
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
                                                <button
                                                    onClick={() => handleDelete(data?._id)}
                                                    className="ml-2"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>

                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div> : <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                    <div className="flex flex-col items-center max-w-sm mx-auto text-center">
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