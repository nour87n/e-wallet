import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import AxiosBaseURL from "../AxiosConfig";

const useLogout = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const logout = async () => {
    try {
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
      await axiosBaseURL.delete("/auth/logout", {
        withCredentials: true,
      });
      setLoading(true);
      setError(null);
    } catch (error) {
      setError(error.message || "An error occurred during logout.");
      setLoading(false);
    }
  };
  return { logout, error, loading };
};

export default useLogout;
