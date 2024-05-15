import { Outlet } from "react-router-dom";
import Footer from "../components/sheared/Footer";
import Navigation from "../components/sheared/Navigation";


const Root = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="lg:h-[88px] md:h-[85px] h-[78px]">

            </div>
            <div className="lg:min-h-[calc(100vh-106px-249px)] min-h-[calc(100vh-60px)] bg-white dark:bg-themeColor2">
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;