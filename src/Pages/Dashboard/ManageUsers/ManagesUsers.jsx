import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const ManagesUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleMaketTourGuide = (user) => {
    axiosSecure.patch(`/users/tourGuide/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${user.name} is a Tour Guide Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeletedUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center underline">MANAGE USERS</h2>
      
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>MAKE ADMIN</th>
              <th>MAKE TOUR GUIDE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <h2>{user.name}</h2>
                </td>
                <td>
                  <h2>{user.email}</h2>
                </td>
                <th>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-lg text-white bg-[#D1A054] hover:text-black"
                    >
                      <FaUsers></FaUsers>{" "}
                    </button>
                  )}
                </th>
                <th>
                  {user.role === "tourGuide" ? (
                    "Tour Guide"
                  ) : (
                    <button
                      onClick={() => handleMaketTourGuide(user)}
                      className="btn btn-lg text-white bg-[#D1A054] hover:text-black"
                    >
                      <FaUsers></FaUsers>{" "}
                    </button>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => handleDeletedUser(user)}
                    className="btn btn-lg text-white bg-red-700 hover:text-black"
                  >
                    <FaTrash></FaTrash>{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagesUsers;
