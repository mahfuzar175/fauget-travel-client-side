import { Link } from 'react-router-dom';
import { FaBattleNet, FaCat, FaCity, FaFlagCheckered, FaWater } from 'react-icons/fa';

const TourType = () => {


    const tourTypes = [
        { type: 'Adventure', icon: FaFlagCheckered },
        { type: 'Cultural', icon: FaBattleNet },
        { type: 'Beach', icon: FaWater },
        { type: 'Safari', icon: FaCat },
        { type: 'City', icon: FaCity },
    ];

    return (
        <div className="mt-16 mb-12 bg-gray-800 p-12 text-white text-center">
            <p className='text-xs underline font-mono'>Find a Tour by</p>
            <h1 className="text-3xl font-bold text-center mb-4">TOUR TYPE</h1>
            <hr className='mb-6'/>
            <div className="flex justify-center items-center">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 mb-2">
                    {tourTypes.map(({ type, icon: Icon }) => (
                        <Link key={type} to={`/tour/${type.toLowerCase()}`}>
                            <div className="w-32 h-32 btn bg-white bg rounded-md">
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
    );
};

export default TourType;
