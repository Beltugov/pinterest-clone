import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { authRoutes, routes } from "./routes";
import Header from "../container/Header/Header";
import { useTypeSelector } from "../hooks/useTypeSelector";

const AppRouter = () => {
  const isAuth = useTypeSelector((state) => state.userReducer.isAuth);
  const a = false;
  return (
    <Routes>
      {a
        ? authRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <div>
                  <Header />
                  <Component />
                </div>
              }
            />
          ))
        : routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRouter;
