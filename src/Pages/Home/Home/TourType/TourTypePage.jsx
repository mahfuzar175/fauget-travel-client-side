import { useParams } from "react-router-dom";
import useTourPackages from "../../../../hooks/useTourPackages";

const TourTypePage = () => {
  const { type } = useParams();
  const [packages] = useTourPackages();

  // Filter packages based on the tour type
  const filteredPackages = packages.filter(
    (item) => item.tour_type.toLowerCase() === type
  );

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="mt-16 mb-12">
        <h1 className="text-3xl font-extrabold text-center uppercase mb-6">
          {type} Tours
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {filteredPackages.map((packages) => (
            <div key={packages._id}>
              <div>
                <div className="relative flex w-full max-w-[26rem] flex-col bg-white bg-clip-border text-gray-700 border">
                  <div className="relative text-white bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                      className="w-[414px] h-[276px]"
                      src={packages.tour_image}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                        Tour Type: {packages.tour_type}
                      </h5>
                      <p className="flex items-center gap-1.5  font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
                        ${packages.price}
                      </p>
                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700 mb-2">
                      {packages.trip_title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TourTypePage;
