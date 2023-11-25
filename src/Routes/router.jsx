import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllPacakges from "../Pages/Home/Tourism_and_Travel_Guide/OurPackages/AllPacakges";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../Layout/Dashboard";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import Stories from "../Pages/Home/Tourism_and_Travel_Guide/Stories/Stories";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import StoryDetails from "../Pages/Home/Tourism_and_Travel_Guide/Stories/StoryDetails";
import Community from "../Pages/Home/Home/Community/Community";


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
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
          
        }
    ]
  },
]);
