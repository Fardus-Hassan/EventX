import ServicesCard from "./ServicesCard";


const PopulerServices = () => {

    const card = [1, 2, 3, 4, 5, 6]

    return (
        <div className="pb-10 sm:pb-[100px] w-[98%] mx-auto max-w-[1440px]">
            <div className="sm:text-left text-center">
                <h1 className="text-pmColor text-4xl sm:text-5xl font-bold font-poppins">Popular Services</h1>
                <p className="text-black dark:text-white mt-6 mb-10 max-w-[700px] font-medium sm:text-lg font-montserrat">Here are some good services posted by our community, you can choose your preferred service from here</p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {
                    card.map((item, i) => (
                        <ServicesCard key={i} item={item} />
                    ))
                }

            </div>
        </div>
        //  <section className="relative h-screen overflow-y-auto bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://html.rrdevs.net/printfix/assets/imgs/projact/projact-img3.jpg')" }}>
        //     <h1>Hellow</h1>
        //  </section>

    );
};

export default PopulerServices;