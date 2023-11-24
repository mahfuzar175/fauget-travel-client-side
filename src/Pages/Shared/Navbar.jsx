import { NavLink } from "react-router-dom";
import icon from '../../assets/Icon/Travi-rvg.png'
const Navbar = () => {
    const navOptions = (
        <>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/menu">COMMUNITY</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">BLOGS</NavLink>
          </li>
          <li>
          <NavLink to="/order/salad">ABOUT US</NavLink>
          </li>
          <li>
          <NavLink to="/order/salad">CONTACT US</NavLink>
          </li>
          <li>
          <NavLink to='/login'>LOGIN</NavLink>
          </li>
        </>
      );
      return (
        <>
          <div className="navbar p-4 fixed z-30 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-80 rounded-box w-52"
                >
                  {navOptions}
                </ul>
              </div>
              <a className="font-serif flex justify-center items-center">
                  <img className="w-[60px]" src={icon} alt="" />
                <a className="normal-case font-serif font-bold text-lg">FAUGET TRAVEL</a>
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navOptions}</ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>
        </>
      );
    };

export default Navbar;