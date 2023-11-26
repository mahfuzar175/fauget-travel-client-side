import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: client=[]} = useQuery({
        queryKey: ['client', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users?email=${user.email}`)
            return res.data;
        }
    })
    return [client, refetch]
};

export default useUser;