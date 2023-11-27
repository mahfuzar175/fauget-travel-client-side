import { Link } from "react-router-dom";
import useStory from "../../../../hooks/useStory";
import StoryCard from "./StoryCard";

const Stories = () => {
  const [story] = useStory();
  return (
    <div className="mt-20">
      <div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Tourist Story</h2>
			<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
      <div className="flex justify-center flex-row items-center p-4">
        <div className="grid md:grid-cols-2 gap-4">
          {story.slice(0, 4).map((item) => (
            <StoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <Link to="/allStory">
          <button className="btn btn-primary bg-green-600 hover:bg-green-500 border-none text-white px-4 py-2 rounded-lg">
            All Stories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Stories;
