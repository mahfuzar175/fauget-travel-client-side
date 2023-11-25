import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const StoryDetailsCard = ({ item }) => {
  const {
    id,
    spot_image,
    spot_name,
    location,
    posted_date,
    tourist_image,
    tourist_name,
    journey_review,
    rating,
  } = item || {};
  console.log(item);

  const fbshareUrl = "https://www.facebook.com";
  const whatsappshareUrl = "https://web.whatsapp.com";
  const linkdinshareUrl = "https://www.linkedin.com";
  const instrashareUrl = "https://www.instagram.com";

  return (
    <div className="mt-20">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
            <img
              src={spot_image}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {spot_name}
              </h3>
              <div className="flex justify-between">
                <div className="flex justify-start items-center gap-4">
                  <img
                    className="rounded-full w-[45px] "
                    src={tourist_image}
                    alt=""
                  />
                  <span className="text-xs dark:text-gray-400">
                    <p className="font-bold text-base">{tourist_name}</p>
                    {posted_date}
                  </span>
                </div>
                <div>
                  <h2 className="underline">{location}</h2>
                </div>
              </div>
              <p>{journey_review}</p>
              <div className="flex items-center space-x-2 text-yellow-500">
                <FacebookShareButton
                  url={fbshareUrl}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={whatsappshareUrl}
                  separator=":: "
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <LinkedinShareButton
                  url={linkdinshareUrl}
                  className="Demo__some-network__share-button"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <InstapaperShareButton
                  url={instrashareUrl}
                  className="Demo__some-network__share-button"
                >
                  <InstapaperIcon size={32} round />
                </InstapaperShareButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryDetailsCard;
