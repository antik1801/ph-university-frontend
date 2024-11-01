import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { adminRoutes } from "./admin.routes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    },
    {
        path: "/admin",
        element: <App />,
        children : adminRoutes
    },
    {
        path: "/faculty",
        element: <App />,
        children : adminRoutes
    },
    {
        path: "/student",
        element: <App />,
        children : adminRoutes
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])