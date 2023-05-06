import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import { TripBuilderProvider } from "./context/TripBuilderContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TripBuilderProvider>
    <Auth0Provider
      domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        audience: import.meta.env.VITE_APP_AUTH0_AUDIENCE,
        scope: "read:current_user",
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </TripBuilderProvider>
);
