import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";


const PopulerServices = () => {

    const card = [1, 2, 3, 4, 5, 6]

    return (
        <div className="pb-10 sm:pb-[100px] w-[98%] mx-auto max-w-[1440px]">
            <div className="sm:text-left text-center">
                <h1 className="text-pmColor text-3xl sm:text-5xl font-bold font-poppins">Popular Services</h1>
                <p className="text-black dark:text-white mt-6 mb-10 max-w-[700px] font-medium sm:text-lg font-montserrat">Here are some good services posted by our community, you can choose your preferred service from here</p>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                {
                    card.slice(0, 4).map((item, i) => (
                        <ServicesCard key={i} item={item} />
                    ))
                }

            </div>
            <div className="mx-auto w-full text-center mt-10">
                <Link to='/services'>
                    <button className="group mb-4 relative inline-flex w-fit text-center mx-auto h-12 items-center justify-center overflow-hidden rounded-md bg-pmColor px-6 font-medium text-neutral-200">
                        <span>Show All</span>
                        <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
        //  <section className="relative h-screen overflow-y-auto bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://html.rrdevs.net/printfix/assets/imgs/projact/projact-img3.jpg')" }}>
        //     <h1>Hellow</h1>
        //  </section>

    );
};

export default PopulerServices;