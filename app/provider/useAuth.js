import { useContext } from "react";
import { AuthContext } from "./authContext";


const useAuth = () => {
    const auth = useContext(AuthContext);
    
    return auth;
};

export default useAuth;