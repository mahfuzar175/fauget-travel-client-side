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
          {story.map((item) => (
            <StoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
