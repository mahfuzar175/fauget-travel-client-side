import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="flex flex-col min-h-screen">
      { noHeaderFooter || <Navbar></Navbar>}
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      { noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
