import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Overview";
import OurPackages from "./OurPackages/OurPackages";
import MeetOurTourGuide from "./MeetOurTourGuide";
const TourismAndTravel = () => {
  return (
    <div className="mt-16 min-h-full">
      <div className="justify-center items-center text-center mb-6">
      <h2 className="text-4xl font-Lato font-extrabold text-black">
      Main Destinations
      </h2>
      <p className=" text-gray-600">We offer you the most exciting activities so you can have the most <br /> unforgettable vacations.</p>
      </div>
        <Tabs className='font-medium text-sm' defaultIndex={1} onSelect={(index) => console.log(index)}>
          <TabList>
            <Tab>OVERVIEW</Tab>
            <Tab>OUR PACKAGES</Tab>
            <Tab>MEET OUR TOUR GUIDE</Tab>
          </TabList>
          <TabPanel>
            <Overview></Overview>
          </TabPanel>
          <TabPanel>
            <OurPackages></OurPackages>
          </TabPanel>
          <TabPanel>
            <MeetOurTourGuide></MeetOurTourGuide>
          </TabPanel>
        </Tabs>
      </div>
  );
};

export default TourismAndTravel;
