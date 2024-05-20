import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white dark:bg-themeColor3 z-50">
            <ImSpinner9  className="text-7xl text-pmColor animate-spin"/>
        </div>
    );
};

export default Spinner;