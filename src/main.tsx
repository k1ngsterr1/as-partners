import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "@shared/styles/global.scss";
import "@shared/styles/reset.scss";
import "animate.css";
import { Provider } from "react-redux";
import store from "@redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
