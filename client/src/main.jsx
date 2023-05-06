import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
