import { Helmet } from "react-helmet-async";
import AboutUs from "../../../components/AboutUs";
import ContactUs from "../../../components/ContactUs";
import Banner from "../Banner/Banner";
import Stories from "../Tourism_and_Travel_Guide/Stories/Stories";
import TourismAndTravel from "../Tourism_and_Travel_Guide/TourismAndTravel";
import Community from "./Community/Community";
import TourType from "./TourType/TourType";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fauget Travel | Home</title>
            </Helmet>
            <Banner></Banner>
            <TourismAndTravel></TourismAndTravel>
            <TourType></TourType>
            <Stories></Stories>
            <Community></Community>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;