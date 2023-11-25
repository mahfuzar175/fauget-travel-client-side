import useStory from "../../../../hooks/useStory";
import StoryCard from "./StoryCard";

const Stories = () => {
  const [story] = useStory();
  return (
    <div>
      <div className="flex justify-center flex-row items-center">
        <div className="grid md:grid-cols-2 gap-4">
          {story.map((item) => (
            <StoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
