import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";

const PacakgeCard = ({ item }) => {
  const { id, tour_image, tour_type, trip_title, price, _id} = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [ refetch] = useCart();

  const handleAddtoCart = () =>{
    if(user && user.email){
      const cartItem = {
       packageId: _id,
        email: user.email,
        tour_type,
        tour_image,
        trip_title,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${trip_title} is added to your cart!`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    }
    else {
      Swal.fire({
        title: "You are not Logged In!",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-4 font-Lato transform transition duration-500  
        hover:scale-105">
            <div className="relative overflow-hidden">
              <img className="object-cover md:w-[354px] md:h-[250px] " src={tour_image} alt="Product" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
              <Link to={`/packageDetails/${_id}`}> <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Details</button></Link>
                
              </div>
            </div>
            <div>
            <h3 className="text-xl font-extrabold text-gray-900 mt-4 ">{tour_type}</h3>
            <p className="text-gray-500 text-sm mt-2">{trip_title}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-900 font-bold text-lg">${price}</span>
              <button onClick={handleAddtoCart} className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
            </div>
            </div>
          </div>
    </div>
  );
};
export default PacakgeCard;
