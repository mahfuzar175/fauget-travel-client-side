import { FaBook, FaHome, FaMailBulk, FaSearch, FaShopify, FaShoppingCart, FaUser, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useTourGuide from "../hooks/useTourGuide";

const Dashboard = () => {
    const [isAdmin ]= useAdmin();
    const [isTourGuide] = useTourGuide();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054] ">
        <h2 className="text-center font-bold text-lg font-serif underline mt-4">Dashboard</h2>
        <ul className="menu p-4">
        <li>
            <NavLink to="/dashboard/myProfile"><FaUser></FaUser> My Profile</NavLink>
          </li>
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/bookings"><FaUtensils></FaUtensils> Add Package</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageUsers"><FaUsers></FaUsers> Manage Users</NavLink>
          </li>
            </>
            :
            isTourGuide?<>
             <li>
            <NavLink to="/dashboard/myAssignedTours"><FaBook></FaBook> My Assigned Tours</NavLink>
          </li>
            </>
            :
            <>
          <li>
            <NavLink to="/dashboard/bookings"><FaBook></FaBook> My Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Wishlist</NavLink>
          </li>
            </>
          }
          
        {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch></FaSearch>MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShopify></FaShopify>SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaMailBulk></FaMailBulk> CONTATC
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
