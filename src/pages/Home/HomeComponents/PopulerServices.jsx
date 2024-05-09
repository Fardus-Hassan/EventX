import ServicesCard from "./ServicesCard";


const PopulerServices = () => {

    const card = [1, 2, 3, 4, 5, 6]

    return (
        <div className="pb-10 sm:pb-[100px]">
            <div className="sm:text-left text-center">
                <h1 className="text-pmColor text-3xl sm:text-5xl font-bold">Popular Services</h1>
                <p className="text-black dark:text-white mt-6 mb-10 max-w-[700px] font-semibold sm:text-lg">Here are some good services posted by our community, you can choose your preferred service from here</p>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
                {
                    card.map((item, i) => (
                        <ServicesCard key={i} item={item} />
                    ))
                }

            </div>
        </div>
    );
};

export default PopulerServices;