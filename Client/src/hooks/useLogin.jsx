import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import axiosBaseURL from "../axiosConfig";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext()
    const navigate = useNavigate();
    const login = async (email,password) => {
            setLoading(true);
            setError(null);
            const response = await axiosBaseURL.post(
              "/auth/login",
              {
                email,
                password,
              },
              {
                withCredentials:true
              }
            );
            dispatch({ type: "LOGIN", payload: response.data });
            localStorage.setItem('user', JSON.stringify(response.data))
            navigate("/");
        
    };
    return { login, error, loading, setLoading };
}