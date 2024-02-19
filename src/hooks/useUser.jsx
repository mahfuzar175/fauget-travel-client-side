import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const { user } = useAuth();

  // For authenticated users
  const axiosSecure = useAxiosSecure();
  const { refetch: refetchAuthenticated, data: clientAuthenticated = [] } = useQuery({
    queryKey: ['client', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user.email}`);
      return res.data;
    },
    enabled: !!user, // Only fetch data if user is authenticated
  });

  // For unauthenticated users
  const axiosPublic = useAxiosPublic();
  const { refetch: refetchPublic, data: clientPublic = [] } = useQuery({
    queryKey: ['client', 'public'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users`);
      return res.data;
    },
    enabled: !user, // Only fetch data if user is not authenticated
  });

  const refetch = user ? refetchAuthenticated : refetchPublic;
  const client = user ? clientAuthenticated : clientPublic;

  return [client, refetch];
};

export default useUser;
