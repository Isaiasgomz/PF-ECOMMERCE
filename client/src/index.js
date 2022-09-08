import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./Store/index";
import { BrowserRouter } from "react-router-dom";
import dotenv from "dotenv";
import axios from "axios";

/* para deploy */
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-r5c6edlb.us.auth0.com"
        clientId="KFrQ6GHCJ9exg9gRMHZ6pE2V34Xrq1EW"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
