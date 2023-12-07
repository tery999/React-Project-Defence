import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../context/authContext";

export default function PrivateRoute() {
    const { isLogged } = useContext(AuthContext);

    if (!isLogged) {
        return <Navigate to="/Login" />;
    }

    return <Outlet />;

}