import { useParams } from "react-router-dom";
import useTourPackages from "../../../../hooks/useTourPackages";
import { Helmet } from "react-helmet-async";

const TourTypePage = () => {
  const { type } = useParams();
  const [packages] = useTourPackages();

  // Filter packages based on the tour type
  const filteredPackages = packages.filter(
    (item) => item.tour_type.toLowerCase() === type
  );

  return (
    <div className="flex justify-center items-center mt-12">
      <Helmet>
                <title>Fauget Travel | Tour Type</title>
            </Helmet>
      <div className="mt-16 mb-12">
        <h1 className="text-3xl font-extrabold text-center uppercase mb-6">
          {type} Tours
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 font-Lato">
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
                      <h5 className="ext-xl font-extrabold text-gray-900 block font-sans text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
                        {packages.tour_type}
                      </h5>
                      <p className="flex items-center gap-1.5  font-sans leading-relaxed text-blue-gray-900 antialiased text-gray-900 font-bold text-lg">
                        ${packages.price}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">{packages.trip_title}</p>
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
