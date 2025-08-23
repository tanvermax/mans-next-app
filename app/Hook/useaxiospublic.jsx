import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://mans-server.vercel.app",
  // baseURL: "http://localhost:5000", // 👈 use this for local dev if needed
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
