import {CREATED_PINS_ROUTE, MAIN_ROUTE, PIN_ROUTE, SAVED_PINS_ROUTE, TITLE_ROUTE} from "./constants";

import {lazy} from "react";

import Main from "../pages/Main/Main";
import Title from "../pages/Title/Title";

const Profile = lazy(() => import("../pages/Profile/Profile"))
const Pin = lazy(() => import("../pages/Pin/Pin"))

export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: PIN_ROUTE,
        Component: Pin,
    },
    {
        path: SAVED_PINS_ROUTE,
        Component: Profile,
    },
    {
        path: CREATED_PINS_ROUTE,
        Component: Profile,
    },
];

export const routes = [
    {
        path: TITLE_ROUTE,
        Component: Title,
    },
];
