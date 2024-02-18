import { Link } from "react-router-dom";
import {
  FaBattleNet,
  FaCat,
  FaCity,
  FaFlagCheckered,
  FaWater,
} from "react-icons/fa";
import background from "../../../../../src/assets/back/back.jpg";

const TourType = () => {
  const tourTypes = [
    { type: "Adventure", icon: FaFlagCheckered },
    { type: "Cultural", icon: FaBattleNet },
    { type: "Beach", icon: FaWater },
    { type: "Safari", icon: FaCat },
    { type: "City", icon: FaCity },
  ];

  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="mt-28">
      <div className="p-24 text-center" style={backgroundImageStyle}>
      <h2 className="font-bold text-center text-4xl mb-8">
        Choose a Tour Type
      </h2>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mb-2">
            {tourTypes.map(({ type, icon: Icon }) => (
              <Link key={type} to={`/tour/${type.toLowerCase()}`}>
                <div className="w-32 h-32 border flex flex-row justify-center items-center bg-white rounded-full shadow-2xl shadow-black">
                  <div className="flex flex-col gap-1">
                    <Icon className="w-12 h-12"></Icon>
                    <p>{type}</p>
                  </div>
                  <p></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourType;
