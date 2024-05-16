import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GlobalStateContext } from "../Global/GlobalContext";



const PrivateRoute = ({ children }) => {

    const location = useLocation();


    const { user, loading } = useContext(GlobalStateContext);

    console.log(user);

    
    
     if (loading) {
        return <div className="flex justify-center items-center w-full mt-[200px] absolute">
            <span className="loading loading-bars loading-lg text-pmColor"></span>
        </div>
    }
    else if (user) {
        return children
    }
    else {
        return <Navigate to="/login" state={location?.pathname || "/"} replace={true} />
    }
};

export default PrivateRoute;