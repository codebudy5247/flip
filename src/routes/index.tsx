import { CircularProgress } from "@mui/material";
import { Suspense, lazy, ElementType } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

import Signup from "../pages/signup/Signup";
import SignIn from "../pages/signin/SignIn";
import Home from "../pages/Home";

export default function Router() {
  let acessToken : any = localStorage.getItem('Token')
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
}
