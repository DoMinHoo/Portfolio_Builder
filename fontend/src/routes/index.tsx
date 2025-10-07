import { createBrowserRouter } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";

// Layouts
import MainLayout from "../layouts/MainLayout";
import DashBoardLayout from "../layouts/DashBoardLayout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";



// Auth Pages
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";

const router = createBrowserRouter([
    // Auth routes
    {
        path: "/auth",
        children: [
            { index: true, element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
        ],
    },

    // Public routes
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "portfolio", element: <Portfolio /> },
            { path: "contact", element: <Contact /> },

            // Protected page (yêu cầu login)
            {
                path: "profile",
                element: (
                    <ProtectedRouter childrent={<Profile />}>

                    </ProtectedRouter>
                ),
            },
        ],
    },

    // Protected dashboard routes
    {
        path: "/dashboard",
        element: (
            <ProtectedRouter childrent={<DashBoardLayout />}>

            </ProtectedRouter>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "projects", element: <Profile /> },
            { path: "settings", element: <div>Settings (placeholder)</div> },
        ],
    },

    // 404 page (optional)
    {
        path: "*",
        element: <div className="text-center text-red-500 p-10">404 - Page Not Found</div>,
    },
]);

export default router;
