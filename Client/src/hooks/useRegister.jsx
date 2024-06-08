import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import axiosBaseURL from "../axiosBaseURL";

const useRegister = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const register = async (email, password, fullName, phoneNumber) => {
    setLoading(true);
    setError(null);
    const response = await axiosBaseURL.post(
      "/auth/register",
      {
        email,
        phoneNumber,
        fullName,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response);
    dispatch({ type: "REGISTER", payload: response.data });
    localStorage.setItem("user", JSON.stringify(response.data));
    navigate("/main-profile");
  };
  return { register, setLoading };
};

export default useRegister;
