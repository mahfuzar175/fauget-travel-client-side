import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PackageDetailsCard from "./PackageDetailsCard";

const PackageDetails = () => {
    const [item, setitem] = useState();
    const { id } = useParams();
    const tourPacakge = useLoaderData();

    useEffect(() => {
        const findItem = tourPacakge?.find((item) => item._id == id);
        setitem(findItem);
      }, [id, tourPacakge]);
    //   console.log(item);

    return (
        <div>
            <PackageDetailsCard item={item}></PackageDetailsCard>
        </div>
    );
};

export default PackageDetails;