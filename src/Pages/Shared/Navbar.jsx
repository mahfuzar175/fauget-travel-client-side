import { NavLink } from "react-router-dom";
import icon from "../../assets/Icon/Travi-rvg.png";
import userDefaultPic from '../../assets/login/user.png';
import { useContext} from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const userName = user ? user.displayName : "";
  const userProfilePic = user ? user.photoURL : userDefaultPic;



  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li className="hover:text-slate-300">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="hover:text-slate-300">
        <NavLink to="/community">COMMUNITY</NavLink>
      </li>
      <li className="hover:text-slate-300">
        <NavLink to="/story">BLOGS</NavLink>
      </li>
      <li className="hover:text-slate-300">
        <NavLink to="/aboutUs">ABOUT US</NavLink>
      </li>
      <li className="hover:text-slate-300">
        <NavLink to="/contactUs">CONTACT US</NavLink>
      </li>
      {user ? (
        <>
          {/*<li><span>{user?.displayName}</span></li>*/}
          <li className="hover:text-slate-300">
            <button onClick={handleLogOut} className="btn btn-ghost text-sm">
              LOGOUT
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="hover:text-slate-300">
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar p-2 fixed z-30 lg:bg-opacity-30 bg-white text-black lg:bg-black border lg:border-none lg:text-white font-Lato">
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
              
              className="mt-3 z-[1] p-2 shadow dropdown-content bg-black text-white bg-opacity-90 rounded-md w-48"
            >
              {navOptions}
            </ul>
          </div>
          <a className="font-serif flex justify-center items-center">
            <img className="w-[60px]" src={icon} alt="" />
            <a className="normal-case flex font-serif font-bold text-lg">
              FAUGET TRAVEL s
            </a>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-8 justify-center items-center">{navOptions}</ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userProfilePic} />
        </div>
      </label>
      <ul className="mt-3 z-[1] p-2 shadow dropdown-content bg-black text-white bg-opacity-90 rounded-md w-48">
        <li>
          <a className="justify-between">
            {userName}
          </a>
        </li>
        <li className="hover:text-slate-300"><NavLink to="/dashboard/dashboardCover">Dashboard</NavLink></li>
        {user ? (
        <>
          {/*<li><span>{user?.displayName}</span></li>*/}
          <li className="hover:text-slate-300">
            <button onClick={handleLogOut} className="btn btn-ghost text-sm">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="hover:text-slate-300">
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
      </ul>
    </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
