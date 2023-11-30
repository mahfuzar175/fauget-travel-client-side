import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MeetOurTourGuideSingleCardData from "./MeetOurTourGuideSingleCardData";


const MeetOurTourGuideSingleCard = () => {
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
            <MeetOurTourGuideSingleCardData item={item}></MeetOurTourGuideSingleCardData>
        </div>
    );
};


export default MeetOurTourGuideSingleCard;