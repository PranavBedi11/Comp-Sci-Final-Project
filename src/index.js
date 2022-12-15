import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import UserAuthProvider from "./pages/signup&login-freelancer/UserAuthContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
  </React.StrictMode>
);
