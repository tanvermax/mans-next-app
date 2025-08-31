// hooks/useAuth.js

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const useAuth = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchUserData = async () => {
    if (status === "loading" || !session) {
      setLoading(false);
      return;
    }
    try {
      // Send the email as a query parameter
      const response = await axios.get(`https://mans-server.vercel.app/user?email=${session.user.email}`);
      setUserData(response.data); // Directly set the data from the response
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };
  fetchUserData();
}, [session, status]);

  // Return the user data, and a loading state to manage UI in the component
  return { userData, loading };
};

export default useAuth;