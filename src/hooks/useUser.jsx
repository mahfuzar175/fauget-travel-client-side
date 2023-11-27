import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const {refetch, data: client=[]} = useQuery({
        queryKey: ['client', user?.email],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/users?email=${user.email}`,  {
                skipAuthInterceptor: true,
              })
            return res.data;
        }
    })
    return [client, refetch]
};

export default useUser;