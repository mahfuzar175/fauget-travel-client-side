import { FaCheck, FaExpeditedssl } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useGuide from "../../../hooks/useGuide";
import useAuth from "../../../hooks/useAuth";

const MyAssignedTours = () => {
  const axiosSecure = useAxiosSecure();
  const [booking, refetch] = useGuide();
  const { user } = useAuth();
  console.log(user);

  const handleInReview = (item) => {
    axiosSecure.patch(`/bookings/inReview/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "In Review!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleReject = (item) => {
    axiosSecure.patch(`/bookings/rejected/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Rejected!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleAccepted = (item) => {
    axiosSecure.patch(`/bookings/accepted/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Accepted!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="flex justify-around mb-4">
          <h2 className="text-3xl font-semibold">ASSIGNED ITEMS</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full ">
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>#</th>
                <th>PACKAGE NAME</th>
                <th>TOUR GUIDE NAME</th>
                <th>TOUR DATE</th>
                <th>TOUR PRICE</th>
                <th>REVIEW</th>
                <th>REJECTED</th>
                <th>ACCEPTED</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>

                  <td>
                    <h2>{item.trip_title}</h2>
                  </td>
                  <td>
                    <h2>{item.tourist_name}</h2>
                  </td>
                  <td>
                    <h2>{item.date}</h2>
                  </td>
                  <th>
                    <h2>${item.price}</h2>
                  </th>
                  <th>
                    {item.status === "inReview" ? (
                      "In Review"
                    ) : (
                      <button
                        onClick={() => handleInReview(item)}
                        className="btn btn-lg text-white bg-[#D1A054] hover:text-black"
                      >
                        <MdPendingActions></MdPendingActions>{" "}
                      </button>
                    )}
                  </th>
                  <th>
                    {item.status === "rejected" ? (
                      "Rejected"
                    ) : (
                      <button
                        onClick={() => handleReject(item)}
                        className="btn btn-lg text-white bg-gray-800 hover:text-white"
                      >
                        <FaExpeditedssl></FaExpeditedssl>{" "}
                      </button>
                    )}
                  </th>
                  <th>
                    {item.status === "accepted" ? (
                      "Accepted"
                    ) : (
                      <button
                        onClick={() => handleAccepted(item)}
                        className="btn btn-lg text-white bg-emerald-700 hover:text-black"
                      >
                        <FaCheck></FaCheck>{" "}
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAssignedTours;
