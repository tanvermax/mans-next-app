import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://mans-server.vercel.app",
  // baseURL: "https://mans-server.vercel.app", // 👈 use this for local dev if needed
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
