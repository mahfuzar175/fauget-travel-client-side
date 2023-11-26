import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useTourGuide from "../hooks/useTourGuide";

const TourGuideRoute = ({children}) => {
    const {user, loading }=  useAuth();
    const [isTourGuide, isTourGuideLoading] = useTourGuide();
    const location = useLocation();  
    if(loading || isTourGuideLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isTourGuide){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default TourGuideRoute;