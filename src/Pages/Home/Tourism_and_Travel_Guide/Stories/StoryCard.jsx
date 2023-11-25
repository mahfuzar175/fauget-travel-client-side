
const StoryCard = ({ item }) => {
    const {title} = item;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default StoryCard;