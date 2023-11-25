import AboutUs from "../../../components/AboutUs";
import ContactUs from "../../../components/ContactUs";
import Banner from "../Banner/Banner";
import Stories from "../Tourism_and_Travel_Guide/Stories/Stories";
import TourismAndTravel from "../Tourism_and_Travel_Guide/TourismAndTravel";
import Community from "./Community/Community";


const Home = () => {
    return (
        <div className="bg-gray-100">
            <Banner></Banner>
            <TourismAndTravel></TourismAndTravel>
            <Stories></Stories>
            <Community></Community>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;