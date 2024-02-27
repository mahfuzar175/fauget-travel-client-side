import { Helmet } from "react-helmet-async";
import useStory from "../../../../hooks/useStory";
import StoryCard from "./StoryCard";

const AllStory = () => {
    const [story] = useStory();
    return (
        <div className="flex justify-center items-center mt-20 mb-8 p-6">
            <Helmet>
                <title>Fauget Travel | All Story</title>
            </Helmet>
            <div>
            <h2 className="text-4xl text-center font-bold mb-8">Tourist Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                story.map(item =><StoryCard
                key={item.id}
                item={item}
                ></StoryCard>)
            }
        </div>
            </div>
        </div>
    );
};

export default AllStory;