import { Helmet } from "react-helmet-async";
import useStory from "../../../../hooks/useStory";
import StoryCard from "./StoryCard";

const AllStory = () => {
    const [story] = useStory();
    return (
        <div className="flex justify-center items-center mt-28 mb-8 p-6">
            <Helmet>
                <title>Fauget Travel | All Story</title>
            </Helmet>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                story.map(item =><StoryCard
                key={item.id}
                item={item}
                ></StoryCard>)
            }
        </div>
        </div>
    );
};

export default AllStory;