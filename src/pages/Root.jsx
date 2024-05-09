import { Outlet } from "react-router-dom";
import Footer from "../components/sheared/Footer";
import Navigation from "../components/sheared/Navigation";


const Root = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="lg:min-h-[calc(100vh-106px-249px)] min-h-[calc(100vh-60px)] bg-white dark:bg-themeColor">
                <div className="max-w-[1440px] mx-auto w-[90%]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;