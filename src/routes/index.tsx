import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import DashBoardLayout from "../layouts/DashBoardLayout";
import DashBoardHome from "../layouts/DashBoardHome";
import DashBoardProject from "../layouts/DashBoardProject";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "portfolio", element: <Portfolio /> },
            { path: "contact", element: <Contact /> },
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