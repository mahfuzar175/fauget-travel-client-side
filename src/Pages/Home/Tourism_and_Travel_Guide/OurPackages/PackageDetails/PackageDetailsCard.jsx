const PackageDetailsCard = ({ item }) => {
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
    day2_activity,
    day3_activity,
  } = item || {};
  console.log(item);
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
                  <p className="text-yellow-400 text-lg font-semibold mt-2">${price}</p>
                </p>
              </div>
              <div className="dark:text-gray-100">
                <p>Uncover the magic of our handpicked destinations as we guide you through the most captivating landmarks, hidden treasures, and cultural hotspots. From the ancient wonders to modern marvels, our tours are crafted to showcase the best of each destination, ensuring an enriching travel experience...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Plan Section */}
      <section className="dark:bg-gray-800 dark:text-gray-100 border border-gray-600 m-4">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracki text-center uppercase">Tour plan</p>
		<h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Details Tour plan</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline text-red-500 font-bold">Day-1</summary>
				<div className="px-4 pb-4">
					<p>{tour_type}, {trip_title}, {day1_activity}</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline text-red-500 font-bold">Day-2</summary>
				<div className="px-4 pb-4">
					<p>{tour_type}, {trip_title}, {day2_activity}</p>
				</div>
			</details>
		</div>
	</div>
</section>

    </div>
  );
};

export default PackageDetailsCard;
