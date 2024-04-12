import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>
    }

])