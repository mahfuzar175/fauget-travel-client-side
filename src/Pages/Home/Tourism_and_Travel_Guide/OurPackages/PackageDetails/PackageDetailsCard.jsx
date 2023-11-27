import { useEffect, useState } from "react";
import useUser from "../../../../../hooks/useUser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const PackageDetailsCard = ({ item }) => {
  const [tourGuides, setTourGuides] = useState([]);
  const [users] = useUser();
  const [startDate, setStartDate] = useState(new Date());
  const {user} = useAuth()
  const userName =  user.displayName;
  const userProfilePic = user.photoURL;
  const userEmail = user.email;
  const axiosSecure = useAxiosSecure()
  

  useEffect(() => {
    const tourGuideUsers = users.filter((user) => user.role === "tourGuide");
    setTourGuides(tourGuideUsers);
  }, [users]);

  const {
    id,
    tour_image,
    tour_type,
    trip_title,
    price,
    _id,
    img1,
    img2,
    img3,
    img4,
    day1_activity,
    day1_description,
    day2_activity,
    day2_description,
  } = item || {};
  console.log(item);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const tourist_name = form.tourist_name.value;
    const tourist_email = form.tourist_email.value;
    const tourist_image = form.tourist_image.value;
    const price = form.price.value;
    const date = form.date.value;
    const tourGuide = form.tourGuide.value;

    if(user && user.email){
      const newbooking = {
        email: user.email,
        tourist_name,
        tourist_email,
        tourist_image,
        price,
        date,
        tourGuide
  
      };
      axiosSecure.post('/bookings', newbooking)
      .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Added to your Bookings`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
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
          Swal.fire({
            title: 'Added!',
            text: "Your Bookings has benn Added",
            icon: 'success'
          });
        }
      });
    }



    // // send data to the server
    // fetch("http://localhost:5000/stories", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newStory),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Story Added Successfully",
    //         icon: "success",
    //         confirmButtonText: "Ok",
    //       });
    //     }
    //   });
  };

  return (
    <div className="mt-16">
      {/* gallery section */}
      <div>
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src={tour_image}
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={img1}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={img2}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={img3}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={img4}
            />
          </div>
        </section>
      </div>

      {/* About The Tour Section */}
      <div>
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src={tour_image}
              alt=""
              className="w-full h-60 sm:h-96 dark:bg-gray-500"
            />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md text-white bg-gray-900">
              <div className="space-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block text-2xl font-semibold sm:text-3xl"
                >
                  {trip_title}
                </a>
                <p className="text-sm dark:text-gray-400">
                  Tour Type:
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline ml-1"
                  >
                    {tour_type}
                  </a>
                  <p className="text-yellow-400 text-lg font-semibold mt-2">
                    ${price}
                  </p>
                </p>
              </div>
              <div className="dark:text-gray-100">
                <p>
                  Uncover the magic of our handpicked destinations as we guide
                  you through the most captivating landmarks, hidden treasures,
                  and cultural hotspots. From the ancient wonders to modern
                  marvels, our tours are crafted to showcase the best of each
                  destination, ensuring an enriching travel experience...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Plan Section */}
      <section className="dark:bg-gray-800 dark:text-gray-100 border border-gray-600 m-4">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracki text-center uppercase">
            Tour plan
          </p>
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            Details Tour plan
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-red-500 font-bold">
                Day-1
              </summary>
              <div className="px-4 pb-4">
                <p>
                  {day1_activity}, {day1_description}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline text-red-500 font-bold">
                Day-2
              </summary>
              <div className="px-4 pb-4">
                <p>
                  {day2_activity}, {day2_description}
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <div className="mt-4 p-4">
        {/* booking form */}
        <div>
          {/* form */}
          <div className="bg-gray-200 p-8">
            <h2 className="flex justify-center items-center text-4xl font-extrabold mb-4">Booking</h2>
            <form onSubmit={handleBooking}>
              <div className="md:flex mb-6 gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Tourist Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      defaultValue={userName}
                      readOnly
                      required
                      name="tourist_name"
                      placeholder="Tourist Name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Tourist Email</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      defaultValue={userEmail}
                      required
                      readOnly
                      name="tourist_email"
                      placeholder="Tourist Email"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* form name and quantity row */}
              <div className="md:flex mb-6 gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Tourist Image</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="tourist_image"
                      readOnly
                      defaultValue={userProfilePic}
                      required
                      placeholder="Tourist Image"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      required
                      name="price"
                      readOnly
                      defaultValue={price}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              {/* form supplier row */}
              <div className="md:flex mb-6 gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Tour Date*</span>
                  </label>
                  <div className="input input-bordered w-full"><DatePicker required showIcon name="date" selected={startDate} onChange={(date) => setStartDate(date)} /></div>
                  
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Tour Guide Name*</span>
                  </label>
                  <select
                    id="tourGuide"
                    name="tourGuide"
                    required
                    className="input input-bordered w-full"
                  >
                     <option value="" disabled selected hidden>
                      Select Tour Guide
                    </option>
                    {tourGuides.map((tourGuide) => (
                      <option key={tourGuide._id} value={tourGuide.name}>
                        {tourGuide.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* formPhoto url row */}
              <input
                type="submit"
                value="Add Booking"
                className="btn btn-block btn-neutral"
              />
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsCard;
