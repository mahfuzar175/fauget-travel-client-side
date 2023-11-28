import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TourGuideSingleCardData from "./TourGuideSingleCardData";

const TourGuideSingleCard = () => {
    const [item, setitem] = useState();
    const { id } = useParams();
    const tourGuideData = useLoaderData();
    useEffect(() => {
        const findItem = tourGuideData?.find((item) => item._id == id);
        setitem(findItem);
      }, [id, tourGuideData]);
    //   console.log(item);
    return (
        <div>
            <TourGuideSingleCardData item={item}></TourGuideSingleCardData>
        </div>
    );
};

export default TourGuideSingleCard;