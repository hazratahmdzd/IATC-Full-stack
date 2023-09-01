import { createBrowserRouter } from "react-router-dom";
import { MainLayout, DestinationsLayout, CrewLayout, TechnologyLayout } from "../components";
import {
    Moon,
    Mars,
    Europa,
    Titan,
    DouglasHurley,
    MarkShuttleworth,
    VictorGlover,
    AnoushehAnsari
} from "../pages";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />
    },
    {
        path: "/destinations",
        element: <DestinationsLayout />,
        children: [
            {
                path: '/destinations',
                element: <Moon />
            },
            {
                path: '/destinations/mars',
                element: <Mars />
            },
            {
                path: '/destinations/europa',
                element: <Europa />
            },
            {
                path: '/destinations/titan',
                element: <Titan />
            }
        ]
    },
    {
        path: '/crew',
        element: <CrewLayout />,
        children: [
            {
                path: '/crew',
                element: <DouglasHurley />
            },
            {
                path: '/crew/mark-shuttleworth',
                element: <MarkShuttleworth />
            },
            {
                path: '/crew/victor-glover',
                element: <VictorGlover />
            },
            {
                path: '/crew/anousheh-ansari',
                element: <AnoushehAnsari />
            }
        ]
    },
    {
        path: '/technology',
        element: <TechnologyLayout />
    }
])