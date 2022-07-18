import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

import Header from "./components/Header/Header";
import AppRouter from "./router/AppRouter";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
