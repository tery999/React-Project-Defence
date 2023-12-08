import { useContext, useEffect } from "react";
import * as userService from "../../services/userService";
import {AuthContext} from "../../context/authContext";


export default function LogoutForm () {
    const {logoutHandlder} = useContext(AuthContext)
    useEffect( ()=> {
        userService.logout()
        .then( ()=> logoutHandlder())
    },[])
    return null;
}