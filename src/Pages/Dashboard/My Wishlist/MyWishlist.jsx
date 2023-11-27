import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaSearchPlus, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link} from "react-router-dom";

const MyWishlist = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleDeletedCart = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-around mb-4">
        <h2 className="text-3xl font-semibold">WISH LIST ITEMS</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM TYPE</th>
              <th>ITEM TITLE</th>
              <th>ITEM PRICE</th>
              <th>VIEW DETAILS</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.tour_image} alt={`Item ${index + 1}`} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h2>{item.tour_type}</h2>
                </td>
                <td>
                  <h2>{item.trip_title}</h2>
                </td>
                <th>
                  <h2>${item.price}</h2>
                </th>
                <th>
                  <Link to={`/packageDetails/${item.packageId}`}>
                    <button
                      className="btn btn-lg text-white bg-green-700 hover:text-black"
                    >
                      <FaSearchPlus />
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDeletedCart(item._id)}
                    className="btn btn-lg text-white bg-red-700 hover:text-black"
                  >
                    <FaTrash />
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

export default MyWishlist;
