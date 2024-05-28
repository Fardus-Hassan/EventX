import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../../Global/GlobalContext";
import axios from "axios";
import Spinner from "../Spinner";
import SiteTitle from "../sheared/SiteTitle";

const BookedService = () => {


    const { user } = useContext(GlobalStateContext)
    const email = user.email

    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState([])


    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/bookedEvents/byEmail/${email}`)
            setDatas(data)
            setLoading(false)
        }
        getData()
    }, [email])


    if (loading) {
        return <Spinner></Spinner>
    }


    return (
        <section className="bg-white dark:bg-themeColor lg:pt-10 sm:py-20 py-16 min-h-screen">
            <SiteTitle title='DashBoard | Booked Services'></SiteTitle>
            {datas.length > 0 ? <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
                {
                    datas.map((data, i) => (
                        <div key={i} className="overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-themeColor3">
                            <div className="p-4">
                                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{data.name}</h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{data.Description.slice(0, 100,) + "..."}</p>
                            </div>
                            <div className="overflow-hidden relative">
                                <div className="absolute top-3 right-1 z-10">
                                    <span className={`text-sm px-4 font-medium shadow-2xl py-2 ${data?.status == "Pending" && "bg-yellow-500"} ${data?.status == "Working" && "bg-blue-500"} ${data?.status == "Completed" && "bg-green-500"} rounded-xl`}>{data.status}</span>
                                </div>
                                <img className="w-full mx-auto object-cover object-top h-[300px] transform transition-transform duration-500 hover:scale-110" src={data.image} alt="" />
                            </div>
                            <div className="flex items-center justify-between p-4 pb-0">
                                <div className="flex items-center gap-2">
                                    <img className="object-cover h-10 rounded-full" src={data?.photoURL} alt="Avatar" />
                                    <a href="#" className="mx-2 font-semibold font-montserrat text-gray-700 dark:text-gray-200" role="link">{data.userName}</a>
                                </div>
                                <div>
                                    <h1 className="text-sm"><strong>Area :</strong> {data.area}</h1>
                                    <h1 className="text-sm mt-2"><strong>Date :</strong> {data.ServiceTakingDate}</h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 gap-3 bg-white dark:bg-themeColor3">
                                <h1 className="text-lg font-bold dark:text-white text-black">{data.price}</h1>
                                <Link to={`/details/${data.id}`}>
                                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div> : <div className="flex items-center max-h-screen px-6 mx-auto">
                <div className="flex flex-col items-center justify-center max-w-sm mx-auto text-center lg:h-[calc(100vh-120px)] sm:h-[calc(100vh-160px)] h-[calc(100vh-128px)]  lg:pt-10">
                    <p className="p-3 text-sm font-medium text-pmColor rounded-full bg-blue-50 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">No booked service available</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">If you have not purchased any service yet, click the button below to purchase the service</p>

                    <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 justify-center">
                        <Link to='/services'>
                            <button className="group mb-4 relative inline-flex w-fit text-center mx-auto h-10 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                                <span>Show Service</span>
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

export default BookedService;