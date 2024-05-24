import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalStateContext } from "../../Global/GlobalContext";
import toast from "react-hot-toast";


const AddService = () => {

    const { user } = useContext(GlobalStateContext)



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        // setError('')

        const photoURL = user?.photoURL
        const email = user?.email
        const userName = user?.displayName

        const { area, price, name, image, Description } = data;
        const eventInfo = {
            area, price, name, image, Description, userName, email, photoURL
        }



        const { data: info } = await axios.post(`${import.meta.env.VITE_SERVER}/events`, eventInfo)

        console.log(info);


        if (info.acknowledged) {
            toast.success('Add Successfully');
            reset()
        }



}


return (
    <div className="flex flex-col justify-center lg:w-[60%] md:w-[80%] w-[95%] mx-auto min-h-screen lg:pt-0 pt-10">
        <div className='max-w-[600px] sm:mb-10 mx-auto w-[95%]'>
            <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins text-center">Add Service</h1>
            <p className="text-black dark:text-white text-center mt-6 font-medium sm:text-base text-sm font-montserrat mb-10">Add the service you want to provide by writing the details of the face service in the input fields below</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="flex sm:flex-row flex-col justify-between items-center gap-10 mb-8">
                <div className="w-full">
                    <label for="name" className="block text-sm text-gray-500 dark:text-gray-300">Service Name</label>

                    <input id="name" type="text" name="name" {...register("name", { required: true })} placeholder="Type Your Service Name" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-pmColor focus:outline-none dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-pmColor" />
                    {errors.name && <span className="text-xs block text-red-500">This field is required</span>}
                </div>
                <div className="w-full">
                    <label for="Service-Area" className="block text-sm text-gray-500 dark:text-gray-300">Service Area</label>

                    <input id="Service-Area" type="text" name="area" {...register("area", { required: true })} placeholder="Type Your Service Area" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-pmColor focus:outline-none dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-pmColor" />
                    {errors.area && <span className="text-xs block text-red-500">This field is required</span>}
                </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between items-center gap-10 mb-8">
                <div className="w-full">
                    <label for="image" className="block text-sm text-gray-500 dark:text-gray-300">Image URL</label>

                    <input id="image" type="text" {...register("image", { required: true })} name="image" placeholder="Type Your Image URL" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-pmColor focus:outline-none dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-pmColor" />
                    {errors.image && <span className="text-xs block text-red-500">This field is required</span>}
                </div>
                <div className="w-full">
                    <label for="price" className="block text-sm text-gray-500 dark:text-gray-300">Service Price</label>

                    <input id="price" type="text" name="price" {...register("price", { required: true })} placeholder="Type Your Service Price" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-pmColor focus:outline-none dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-pmColor" />
                    {errors.price && <span className="text-xs block text-red-500">This field is required</span>}
                </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between items-end gap-10 mb-8">
                <div className="sm:min-w-[75%] w-full">
                    <label for="Description" className="block text-sm text-gray-500 dark:text-gray-300">Service Description</label>

                    <textarea id="Description" name="Description" {...register("Description", { required: true })} placeholder="Type Your Service Description" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-pmColor focus:outline-none dark:border-gray-600 dark:bg-themeColor3 dark:text-gray-300 dark:focus:border-pmColor"></textarea>
                    {errors.Description && <span className="text-xs block text-red-500">This field is required</span>}
                </div>
                <button className="text-nowrap group mb-4 relative inline-flex w-full text-center mx-auto h-12 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                    <span>Add</span>
                    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                    </div>
                </button>
            </div>
        </form>
    </div>
);
};

export default AddService;