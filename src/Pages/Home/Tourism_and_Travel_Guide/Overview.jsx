import ReactPlayer from "react-player";
import "./Overview.css";
const Overview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4 mt-2">
      <div className="player-wrapper hover:shadow-md hover:shadow-blue-600">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/qbGZDEFHBmc?si=HRUUGih6BecA-HCA"
          width="100%"
          height="100%"
        />
      </div>
      <div className="player-wrapper hover:shadow-md hover:shadow-blue-600">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/ibuUmMhD2Pg?si=HEUV1xh1ztJnJCLS"
          width="100%"
          height="100%"
        />
      </div>
      <div className="player-wrapper hover:shadow-md hover:shadow-blue-600">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/rDYdeq3JW_E?si=-e4A0luwGAKFViJ8"
          width="100%"
          height="100%"
        />
      </div>
      <div className="player-wrapper hover:shadow-md hover:shadow-blue-600">
        <ReactPlayer
          className="react-player"
          url="https://youtu.be/0NMIZ-PTt8k?si=qIfs5tUL7Aqr0RDa"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Overview;
