import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import StoryDetailsCard from "../StoryDetailsCard";


const StoryDetails = () => {
    const [item, setitem] = useState();
    const { id } = useParams();
    const stories = useLoaderData();
  
    useEffect(() => {
      const findItem = stories?.find((item) => item.id == id);
      setitem(findItem);
    }, [id, stories]);
    console.log(item);

    return (
        <div className="min-h-screen">
            <StoryDetailsCard item={item}></StoryDetailsCard>
        </div>
    );
};

export default StoryDetails;