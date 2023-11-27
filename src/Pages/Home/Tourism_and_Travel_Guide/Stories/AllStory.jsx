import useStory from "../../../../hooks/useStory";
import StoryCard from "./StoryCard";

const AllStory = () => {
    const [story] = useStory();
    return (
        <div className="flex justify-center items-center mt-28 mb-8 p-6">
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