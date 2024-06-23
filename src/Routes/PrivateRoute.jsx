import { useContext } from "react";
import { AuthContext } from "../Pages/Authentication/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {loading, user} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <p className="mt-36 text-center">Please Wait...</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/singIn' state={{from : location}}></Navigate>
};

export default PrivateRoute;