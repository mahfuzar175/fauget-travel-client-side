import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TourGuideSingleCardData from "./TourGuideSingleCardData";
import { Helmet } from "react-helmet-async";

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
            <Helmet>
                <title>Fauget Travel | Tour Guide Details</title>
            </Helmet>
            <TourGuideSingleCardData item={item}></TourGuideSingleCardData>
        </div>
    );
};

export default TourGuideSingleCard;