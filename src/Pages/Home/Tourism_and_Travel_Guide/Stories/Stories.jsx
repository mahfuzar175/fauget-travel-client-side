import { Link } from "react-router-dom";
import useStory from "../../../../hooks/useStory";
import StoryCard from "./StoryCard";

const Stories = () => {
  const [story] = useStory();
  return (
    <div className="mt-[90px]">
      <div className="space-y-2 text-center">
			<h2 className="text-4xl font-bold">Tourist Story</h2>
			<p className="text-base md:text-lg text-gray-600 dark:text-gray-400">Dive into the enchanting narratives of global wanderings and unforgettable escapades <br /> in our Tourist Story section.</p>
		</div>
      <div className="flex justify-center flex-row items-center p-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {story.slice(0, 3).map((item) => (
            <StoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-2 mr-[198px] flex justify-center md:justify-end items-center mb-8">
        <Link to="/allStory">
          <button className="btn btn-outline rounded-full">
            More Stories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Stories;
