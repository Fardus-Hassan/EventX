import WithLoading from "../../components/WithLoading";


const DashBoard = () => {
    return (
        <WithLoading>
            <div className='text-black dark:text-white lg:mt-0 md:mt-2 sm:mt-8 mt-4'>
            <h1>DashBoard</h1>
        </div>
        </WithLoading>
    );
};

export default DashBoard;