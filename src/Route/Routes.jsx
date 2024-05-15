import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import DashBoard from "../pages/Dashboard/DashBoard";
import Error from "../components/sheared/Error";
import Login from "../pages/Login";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/dashboard",
                element: <DashBoard></DashBoard>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            }
        ],
    },
]);

export default Routes;