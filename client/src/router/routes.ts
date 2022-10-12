import Main from "../pages/Main/Main";
import Pin from "../pages/Pin/Pin";
import { MAIN_ROUTE, PIN_ROUTE, PROFILE_ROUTE, TITLE_ROUTE } from "./constants";
import Title from "../pages/Title/Title";
import Profile from "../pages/Profile/Profile";

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
    path: PROFILE_ROUTE,
    Component: Profile,
  },
];

export const routes = [
  {
    path: TITLE_ROUTE,
    Component: Title,
  },
];
