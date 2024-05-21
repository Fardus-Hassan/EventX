import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Error from "../components/sheared/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";
import ScrollToTop from "../components/ScrollToTop";
import Dashboard from "../Layout/Dashboard";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <ScrollToTop>
                <Root />
            </ScrollToTop>
        ),
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
                path: "/details",
                element: <Details></Details>,
            }
        ],

    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    },
]);

export default Routes;