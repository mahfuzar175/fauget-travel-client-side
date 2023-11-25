import AboutUs from "../../../components/AboutUs";
import ContactUs from "../../../components/ContactUs";
import Banner from "../Banner/Banner";
import TourismAndTravel from "../Tourism_and_Travel_Guide/TourismAndTravel";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourismAndTravel></TourismAndTravel>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;