import { Outlet } from "react-router-dom";
import Footer from "../components/sheared/Footer";
import Navigation from "../components/sheared/Navigation";
import Scroll from "../components/Scroll";


const Root = () => {
    return (
        <div>
            <Scroll></Scroll>
            <Navigation></Navigation>
            <div className="lg:h-[88px] md:h-[88px] h-[64px]">

            </div>
            <div className="lg:min-h-[calc(100vh-106px-249px)] min-h-[calc(100vh-60px)] bg-white dark:bg-themeColor">
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;