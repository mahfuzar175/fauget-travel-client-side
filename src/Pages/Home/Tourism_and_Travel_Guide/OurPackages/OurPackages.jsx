import { Link } from "react-router-dom";
import PacakgeCard from "./PacakgeCard";
import useTourPackages from './../../../../hooks/useTourPackages';


const OurPackages = () => {
  const [packages] = useTourPackages();

  return (
    <div>
      <div className="flex justify-center flex-row items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {packages.slice(0, 3).map((item) => (
          <PacakgeCard key={item.id} item={item} />
        ))}
      </div>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <Link to="/allPackages">
          <button className="btn btn-primary bg-green-600 hover:bg-green-500 border-none text-white px-4 py-2 rounded-lg">
            All Packages
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurPackages;
