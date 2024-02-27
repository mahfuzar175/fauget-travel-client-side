import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '../../../assets/banner/1.jpg'
import img2 from '../../../assets/banner/2.jpg'
import img3 from '../../../assets/banner/3.jpg'
import img4 from '../../../assets/banner/4.jpg'
import img5 from '../../../assets/banner/5.jpg'
import img6 from '../../../assets/banner/6.jpg';
// import './Banner.css'; // Import a CSS file for additional styling

const Banner = () => {
    const slides = [
        { image: img1, heading: 'EXPLORE THE WORLD', heading2: 'A MORE REWARDING WAY TO TRAVEL' },
        { image: img2, heading: 'COMMIT TO TRAVEL', heading2: 'THE REAL ADVENTURE IS OUT THERE' },
        { image: img3, heading: 'ASCEND TO TRANQUILITY', heading2: 'DISCOVER PEACE IN THE HILLS' },
        { image: img4, heading: 'FIND YOUR PASSION', heading2: 'ESCAPE LIFE FOR A LITTLE WHIILE' },
        { image: img5, heading: 'BE AN ADVNETURERE', heading2: 'COLLECTING MEMORIES EVERY TIME' },
        { image: img6, heading: 'VERTICAL WONDERS UNVEILED', heading2: 'UNEARTH THE CHARMS OF ELEVATED' },
    ];

    return (
        <Carousel className="text-center lg:mt-0 mt-[76px]" autoPlay interval={3000} infiniteLoop>
            {slides.map((slide, index) => (
                <div key={index} className="relative">
                    <img src={slide.image} alt={`Slide ${index + 1}`} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold  bg-opacity-20 bg-black md:p-16 p-2"> <p className="md:text-xl text-sm text-base-100 font-serif">{slide.heading}</p> <br /> <p className="font-extrabold text-xl md:text-5xl">{slide.heading2}</p></div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
