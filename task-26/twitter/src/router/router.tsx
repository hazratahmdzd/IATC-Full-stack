import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";


export const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])