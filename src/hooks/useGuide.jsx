import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useGuide = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: booking=[]} = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/bookings?tourGuide=${user.displayName}`)
            return res.data;
        }
    })
    return [booking, refetch]
};

export default useGuide;