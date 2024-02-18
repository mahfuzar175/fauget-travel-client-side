import { Link } from "react-router-dom";
import PacakgeCard from "./PacakgeCard";
import useTourPackages from './../../../../hooks/useTourPackages';


const OurPackages = () => {
  const [packages] = useTourPackages();

  return (
    <div>
      <div className="flex justify-center flex-row items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {packages.slice(0, 3).map((item) => (
          <PacakgeCard key={item.id} item={item} />
        ))}
      </div>
      </div>
      <div className="mt-2 flex justify-center md:justify-end mr-16 items-center">
        <Link to="/allPackages">
        <button className="btn btn-outline rounded-full">All Packages</button>
            

        </Link>
      </div>
    </div>
  );
};

export default OurPackages;
