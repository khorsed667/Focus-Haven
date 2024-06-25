import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SingIn from "../Pages/Authentication/SingIn/SingIn";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import PaymentSuccess from "../component/PaymentSuccess";
import PaymentFailed from "../component/PaymentFailed";
import PrivateRoute from "./PrivateRoute";
import Instractor from "../Pages/Instractor/Instractor";
import AllClasses from "../Pages/Classes/AllClass";
import Dashboard from "../Pages/Dashboard/Dashboard";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/instractor',
          element: <Instractor></Instractor>
        },
        {
          path: '/classes',
          element: <AllClasses></AllClasses>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        },
        {
          path: '/signIn',
          element: <SingIn></SingIn>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }, 
        {
          path: '/class_details/:id',
          element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>
        },
        {
          path: '/payment/success/:trans_id',
          element: <PaymentSuccess></PaymentSuccess>
        },
        {
          path: '/payment/fail',
          element: <PaymentFailed></PaymentFailed>
        },
      ]
    },
  ]);