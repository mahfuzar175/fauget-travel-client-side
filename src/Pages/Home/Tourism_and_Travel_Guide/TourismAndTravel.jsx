import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Overview";
import OurPackages from "./OurPackages/OurPackages";
import MeetOurTourGuide from "./MeetOurTourGuide";
const TourismAndTravel = () => {
  return (
    <div className="mt-24 min-h-screen">
      <div className="justify-center items-center text-center mb-8">
        <h2 className="text-4xl font-Lato font-extrabold">
          Tourism & our travel guide
        </h2>
      </div>
      <Tabs
        className="font-medium text-sm"
        defaultIndex={0}
        onSelect={(index) => console.log(index)}
      >
        <TabList className="border-none text-center">
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
