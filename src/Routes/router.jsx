import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllPacakges from "../Pages/Home/Tourism_and_Travel_Guide/OurPackages/AllPacakges";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../Layout/Dashboard";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import Stories from "../Pages/Home/Tourism_and_Travel_Guide/Stories/Stories";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import StoryDetails from "../Pages/Home/Tourism_and_Travel_Guide/Stories/StoryDetails";
import Community from "../Pages/Home/Home/Community/Community";
import MyWishlist from "../Pages/Dashboard/My Wishlist/MyWishlist";
import ManagesUsers from "../Pages/Dashboard/ManageUsers/ManagesUsers";
import MyAssignedTours from "../Pages/Dashboard/My Assigned Tours/MyAssignedTours";
import PackageDetails from "../Pages/Home/Tourism_and_Travel_Guide/OurPackages/PackageDetails/PackageDetails";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import TourGuideProfile from "../Pages/Dashboard/TourGuideProfile/TourGuideProfile";
import TouristProfile from "../Pages/Dashboard/TouristProfile/TouristProfile";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import TourGuideRoute from "./TourGuideRoute";
import DashBoardCover from "../Pages/Dashboard/DashBoardCover";
import AllStory from "../Pages/Home/Tourism_and_Travel_Guide/Stories/AllStory";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allPackages',
          element: <AllPacakges></AllPacakges>
        },
        {
          path: '/packageDetails/:id',
          element: <PackageDetails></PackageDetails>,
          loader:() => fetch('http://localhost:5000/travelPackages')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/story',
          element: <Stories></Stories>
        },
        {
          path: '/allStory',
          element: <AllStory></AllStory>
        },
        {
          path: '/storyDetails/:id',
          element: <StoryDetails></StoryDetails>,
          loader: () => fetch('http://localhost:5000/stories')
        },
        {
          path: '/community',
          element: <Community></Community>
        },
        {
          path: 'aboutUs',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/contactUs',
          element: <ContactUs></ContactUs>
        }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'dashboardCover',
        element: <DashBoardCover></DashBoardCover>
      },

      // admin routes
      {
        path: 'adminProfile',
        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageUsers',
        element: <AdminRoute><ManagesUsers></ManagesUsers></AdminRoute>
      },

      // Tour Guide Routes
      {
        path: 'tourGuideProfile',
        element: <TourGuideRoute><TourGuideProfile></TourGuideProfile></TourGuideRoute>
      },

      // normal user
      {
        path: 'myAssignedTours',
        element: <PrivateRoute><MyAssignedTours></MyAssignedTours></PrivateRoute>
      },
      {
        path: 'touristProfile',
        element: <PrivateRoute><TouristProfile></TouristProfile></PrivateRoute>
      },
      {
        path: 'cart',
        element: <MyWishlist></MyWishlist>
      }
    ]
  }
]);
