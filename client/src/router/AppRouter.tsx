import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { MAIN_ROUTE } from "./constants";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {/*{authRoutes.map(({ path, Component }) => (*/}
      {/*  <div>1</div>*/}
      {/*  // <Route key={path} path={path} element={<Component />} />*/}
      {/*))}*/}
      <Route path="/*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
