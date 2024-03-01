import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";

import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="840385521989-9vps476qjdcalbbg9dgk4djbb196i7tb.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store} >
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
