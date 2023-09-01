import { createBrowserRouter } from "react-router-dom";
import { MainLayout, DarkLayout } from "../components/layouts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>
    },
    {
        path: "/darkmode",
        element: <DarkLayout/>
    }

])