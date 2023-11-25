import AboutUs from "../../../components/AboutUs";
import ContactUs from "../../../components/ContactUs";
import Banner from "../Banner/Banner";
import Stories from "../Tourism_and_Travel_Guide/Stories/Stories";
import TourismAndTravel from "../Tourism_and_Travel_Guide/TourismAndTravel";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourismAndTravel></TourismAndTravel>
            <Stories></Stories>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;