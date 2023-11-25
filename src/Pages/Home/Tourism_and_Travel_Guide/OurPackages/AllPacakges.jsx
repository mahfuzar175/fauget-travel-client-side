import useTourPackages from "../../../../hooks/useTourPackages";
import PacakgeCard from "./PacakgeCard";

const AllPacakges = () => {
    const [packages] = useTourPackages();
    return (
        <div className="flex justify-center items-center mt-28 mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                packages.map(item =><PacakgeCard
                key={item.id}
                item={item}
                ></PacakgeCard>)
            }
        </div>
        </div>
    );
};

export default AllPacakges;