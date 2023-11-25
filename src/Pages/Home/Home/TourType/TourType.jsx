import useTourPackages from "../../../../hooks/useTourPackages";
import { FaBattleNet, FaCat, FaCity, FaFlagCheckered, FaWater } from "react-icons/fa";

const TourType = () => {
    const [packages] = useTourPackages();

    const Adventure = packages.filter(item => item.tour_type === 'Adventure');
    const Cultural = packages.filter(item => item.tour_type === 'Cultural');
    const Beach = packages.filter(item => item.tour_type === 'Beach');
    const Safari = packages.filter(item => item.tour_type === 'Safari');
    const City = packages.filter(item => item.tour_type === 'City');

    return (
        <div className="mt-16 mb-12">
            <h1 className="text-3xl font-bold text-center nb-4">TOUR TYPE</h1>
            <div className="flex justify-center items-center">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4">
                <div className="w-32 h-32 btn rounded-full border border-gray-800"><div className="flex flex-col gap-1"><FaFlagCheckered className="w-12 h-12"></FaFlagCheckered><p>Adventure</p></div></div>
                <div className="w-32 h-32 btn rounded-full border border-gray-800"><div className="flex flex-col gap-1"><FaBattleNet className="w-12 h-12"></FaBattleNet><p>Cultural</p></div></div>
                <div className="w-32 h-32 btn rounded-full border border-gray-800"><div className="flex flex-col gap-1"><FaWater className="w-12 h-12"></FaWater><p>Beach</p></div></div>
                <div className="w-32 h-32 btn rounded-full border border-gray-800"><div className="flex flex-col gap-1"><FaCat className="w-12 h-12"></FaCat><p>Safari</p></div></div>
                <div className="w-32 h-32 btn rounded-full border border-gray-800"><div className="flex flex-col gap-1"><FaCity className="w-12 h-12"></FaCity><p>City</p></div></div>
            </div>
            </div>
        </div>
    );
};

export default TourType;
