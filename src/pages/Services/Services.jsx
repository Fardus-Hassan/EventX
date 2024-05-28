import { useEffect, useState } from "react";
import WithLoading from "../../components/WithLoading";
import ServicesCards from "./ServiceComponents/ServicesCards";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { keys } from "localforage";
import ScrollToTop from "../../components/ScrollToTop";
import SiteTitle from "../../components/sheared/SiteTitle";



const Services = () => {

    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState([])



    const [total, setTotal] = useState(32)
    const [itemPerPage, setItemPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)
    const totalPage = Math.ceil(total / itemPerPage)
    const pages = [...Array(totalPage).keys()]
    // console.log(total);

    // console.log(currentPage);


    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/events?page=${currentPage}&size=${itemPerPage}`)
            setDatas(data)
            setLoading(false)
        }
        getData()
    }, [currentPage, itemPerPage])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/events/byCount/eventsCount`)
            setTotal(data.count)
            setLoading(false)
        }
        getData()
    }, [])

    if (loading) {
        return <Spinner></Spinner>
    }


    return (
        <ScrollToTop>
            <SiteTitle title='EventX | Service'></SiteTitle>
            <WithLoading>
                <div className="w-[95%] max-w-[1170px] mx-auto pb-10 sm:pb-[100px]">
                    <div className='max-w-[600px] mb-10 mx-auto w-[95%] sm:pt-14 pt-10'>
                        <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins text-center">All services</h1>
                        <p className="text-black dark:text-white text-center mt-6 font-medium sm:text-base text-sm font-montserrat mb-10">All types of our services are given below, you can choose the service according to your choice</p>
                    </div>
                    <div className="mt-10 flex flex-col gap-7">
                        {
                            datas.map((item, i) => (
                                <ServicesCards key={i} item={item} />
                            ))
                        }
                    </div>
                    <div className=" flex justify-center pt-10">
                        <button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)} className={`${currentPage === 0 ? " text-gray-200 dark:text-opacity-10 flex items-center justify-center px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-themeColor3 dark:text-gray-200 hover:cursor-not-allowed border dark:border-none shadow-md" : "flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-themeColor3 dark:text-gray-200 hover:bg-pmColor hover:text-white dark:hover:text-gray-200 border dark:border-none shadow-md"} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        <div className="sm:inline flex justify-between flex-wrap gap-2">
                            {
                                pages.map((item, i) => (
                                    <button onClick={() => setCurrentPage(i)} key={i} className={` px-4 ${currentPage === i ? "bg-pmColor py-2 mx-1 transition-colors hover:text-white duration-300 transform rounded-md  text-white hover:bg-pmColor border dark:border-none shadow-md" : 'py-2 mx-1 transition-colors bg-white dark:bg-themeColor3 hover:text-white text-black duration-300 transform rounded-md  dark:text-white hover:bg-pmColor border dark:border-none shadow-md'} `}>
                                        {item + 1}
                                    </button>
                                ))
                            }
                        </div>

                        <button disabled={currentPage === Math.ceil(total / itemPerPage) - 1} onClick={() => setCurrentPage(currentPage + 1)} className={`${currentPage === Math.ceil(total / itemPerPage) - 1 ? " text-gray-200 dark:text-opacity-10 flex items-center justify-center px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-themeColor3 dark:text-gray-200 hover:cursor-not-allowed border dark:border-none shadow-md" : "flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-themeColor3 dark:text-gray-200 hover:bg-pmColor hover:text-white dark:hover:text-gray-200 border dark:border-none shadow-md"} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </WithLoading>
        </ScrollToTop>
    );
};

export default Services;