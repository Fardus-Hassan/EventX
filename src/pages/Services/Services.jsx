import { useEffect, useState } from "react";
import WithLoading from "../../components/WithLoading";
import ServicesCards from "./ServiceComponents/ServicesCards";
import axios from "axios";
import Spinner from "../../components/Spinner";



const Services = () => {

    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState([])

    useEffect(() => {
        setLoading(true)
        const getData = async() =>{
            const {data} = await axios.get(`${import.meta.env.VITE_SERVER}/events`)
            setDatas(data)
            setLoading(false)
        }
        getData()
    },[])

    console.log(datas);

    if(loading){
        return <Spinner></Spinner>
    }


    return (
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
            </div>
        </WithLoading>
    );
};

export default Services;