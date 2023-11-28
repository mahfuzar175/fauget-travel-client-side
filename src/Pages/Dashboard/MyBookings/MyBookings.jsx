import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiCursorClick } from "react-icons/hi";
import { MdPendingActions } from "react-icons/md";
import { FaExpeditedssl } from "react-icons/fa";
import useBookings from "../../../hooks/useBookings";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Confetti from 'react-confetti'

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const [booking, refetch] = useBookings();
  const [bookingCount, setBookingCount] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);

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
        setBookingCount((prevCount) => prevCount + 1);
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

  const handleCancel = (item) => {
    // cancel logic will be here

    console.log("Cancel button clicked for item:", item);
  };

  useEffect(() => {
    if (bookingCount > 3) {
      setShowCongratulations(true);
    }
  }, [bookingCount]);

  return (
    <div>
      <div>
        <div className="flex justify-around mb-4">
          <h2 className="text-3xl font-semibold">BOOKING ITEMS</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full ">
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th>#</th>
                <th>PACKAGE NAME</th>
                <th>TOUR GUIDE NAME</th>
                <th>TOUR DATE</th>
                <th>TOURE PRICE</th>
                <th>REVIEW</th>
                <th>REJECTED</th>
                <th>ACCEPTED</th>
                <th>PAY</th>
                <th>CANCEL</th>
                <th>APPLY</th>
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
                    <h2>{item.tourGuide}</h2>
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
                    {item.status === "accepted" ? "Accepted" : <button
                      onClick={() => handleAccepted(item)}
                      className="btn btn-lg text-white bg-emerald-700 hover:text-black"
                    >
                      <FaCheck></FaCheck>{" "}
                    </button>}
                  </th>
                  <th>
                    <button
                      disabled={item.status !== "accepted"}
                      className={`btn btn-lg text-white ${
                        item.status === "accepted"
                          ? "bg-green-600 hover:text-black"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <HiMiniCurrencyDollar></HiMiniCurrencyDollar>{" "}
                    </button>
                  </th>
                  <th>
                    {item.status === "inReview" ? (
                      <button
                        onClick={() => handleCancel(item)}
                        className="btn btn-lg text-white bg-red-600 hover:text-black"
                      >
                        <GiCancel></GiCancel>{" "}
                      </button>
                    ) : null}
                  </th>
                  <th>
                    {showCongratulations ? (
                      <>
                        <Confetti />
                        <button className="btn btn-lg text-white bg-pink-600 hover:text-black">
                          <HiCursorClick></HiCursorClick>{" "}
                        </button>
                      </>
                    ) : (
                      <button
                        disabled={true}
                        className="btn btn-lg text-white bg-gray-400 cursor-not-allowed"
                      >
                        <HiCursorClick></HiCursorClick>{" "}
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

export default MyBookings;
