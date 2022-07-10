import Main from "../pages/Main/Main";
import Pin from "../pages/Pin/Pin";
import { MAIN_ROUTE, PIN_ROUTE } from "./constants";

export const authRoutes = [
  // {
  //   path: BASKET_ROUTE,
  //   Component: Basket,
  // },
  // {
  //   path: BASKET_ROUTE,
  //   Component: Basket,
  // },
];

export const routes = [
  // {
  //   path: SNEAKERS_ROUTE,
  //   Component: Shop,
  // },
  // {
  //   path: ACCESSORIES_ROUTE,
  //   Component: Shop,
  // },
  // {
  //   path: CLOTHES_ROUTE,
  //   Component: Shop,
  // },
  // {
  //   path: LOGIN_ROUTE,
  //   Component: Authorization,
  // },
  // {
  //   path: REGISTRATION_ROUTE,
  //   Component: Authorization,
  // },
  // {
  //   path: SNEAKERS_ROUTE + PRODUCT_ROUTE + "/:id",
  //   Component: Product,
  // },
  // {
  //   path: ACCESSORIES_ROUTE + PRODUCT_ROUTE + "/:id",
  //   Component: Product,
  // },
  {
    path: PIN_ROUTE,
    Component: Pin,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
];
