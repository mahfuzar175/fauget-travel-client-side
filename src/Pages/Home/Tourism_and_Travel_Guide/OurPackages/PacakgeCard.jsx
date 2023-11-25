import useAuth from "../../../../hooks/useAuth";

const PacakgeCard = ({ item }) => {
  const { tour_image, tour_type, trip_title, price} = item;
  const {user} = useAuth;

  const handleAddtoCart = tour =>{
    console.log(tour);
  }

  return (
    <div>
      <div className="relative flex w-full max-w-[26rem] flex-col bg-white bg-clip-border text-gray-700 border">
        <div className="relative text-white bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img className="w-[414px] h-[276px]"
            src={tour_image}
          />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          <button
          onClick={() => handleAddtoCart(item)}
            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              Tour Type: {tour_type}
            </h5>
            <p className="flex items-center gap-1.5  font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700 mb-2">
            {trip_title}
          </p>
          <div className="flex justify-center items-center ">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacakgeCard;
