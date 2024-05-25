import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Error from "../components/sheared/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";
import ScrollToTop from "../components/ScrollToTop";
import Dashboard from "../Layout/Dashboard";
import DashBoard from "../components/DashBoard/DashBoard";
import AddService from "../components/DashBoard/AddService";
import ManageService from "../components/DashBoard/ManageService";
import BookedService from "../components/DashBoard/BookedService";
import ServiceToDo from "../components/DashBoard/ServiceToDo";
import UpdateService from "../components/DashBoard/UpdateService";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <ScrollToTop><Root /></ScrollToTop>,
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
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
            }
        ],

    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                index: true,
                element: <DashBoard></DashBoard>,
            },
            {
                path: "add-service",
                element: <AddService></AddService>,
            },
            {
                path: "manage-services",
                element: <ManageService></ManageService>,
            },
            {
                
                path: "booked-service",
                element: <BookedService></BookedService>,
            },
            {
                path: "service-to-do",
                element: <ServiceToDo></ServiceToDo>,
            },{
                path: `/dashboard/manage-service/:id`,
                element: <UpdateService></UpdateService>,
            }


        ]
    },
]);

export default Routes;