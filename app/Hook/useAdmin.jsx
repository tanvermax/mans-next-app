import { useState, useEffect } from 'react';
import useAuth from '../provider/useAuth';

const useAdmin = () => {

    const { user } = useAuth()

    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUserRole = async () => {
            if (user?.email) {
                setIsLoading(true);
                try {
                    const response = await fetch(`/api/user?email=${user.email}`);
                    const data = await response.json();
                    console.log('data.data', data.data);
                    setUserRole(data.data);
                } catch (error) {
                    console.error('Failed to fetch user role:', error);
                    setUserRole(null);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setUserRole(null);
            }
        };

        fetchUserRole();
    }, [user]);

    return { userRole, isLoading };
};

export default useAdmin;