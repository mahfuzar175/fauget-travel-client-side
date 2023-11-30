import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Overview";
import OurPackages from "./OurPackages/OurPackages";
import MeetOurTourGuide from "./MeetOurTourGuide";
const TourismAndTravel = () => {
  return (
    <div className="mt-16">
      <div className="justify-center items-center text-center">
      <h2 className="text-4xl font-Lato font-extrabold">
        Tourism and Travel Guide
      </h2>
      <p>We offer you the most exciting activities so you can have the most unforgettable vacations.</p>
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
