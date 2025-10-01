import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import DashBoardLayout from "../layouts/DashBoardLayout";
import DashBoardHome from "../layouts/DashBoardHome";
import DashBoardProject from "../layouts/DashBoardProject";

import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

import Profile from "../pages/Profile";


const router = createBrowserRouter([
    {
        path: "auth",
        children: [
            { index: true, element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> }
        ]
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "portfolio", element: <Portfolio /> },
            { path: "contact", element: <Contact /> },
            { path: "profile", element: <Profile /> }
        ]
    },
    {
        path: "/dashboard",
        element: <DashBoardLayout />,
        children: [
            { index: true, element: <DashBoardHome /> },
            { path: "projects", element: <DashBoardProject /> },
            { path: "settings", element: <div>Settings (plaveholder)</div> }

        ]
    }
])

export default router;