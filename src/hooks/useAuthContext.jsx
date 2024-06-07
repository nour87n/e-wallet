import { AuthContext } from "../context/Authcontext"
import { useContext } from "react";
export const useAuthContext = () => {
    const { state ,dispatch } = useContext(AuthContext);
    if(!state){
        console.log("user not logged in");
    }
    return { state, dispatch };
}