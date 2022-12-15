import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Logine from "./pages/LogIn-Employeer";
import Singupe from "./pages/Signup Employeer";
import SignUp from "./pages/signup&login-freelancer/Signup";
import Home from "./pages/Home";
import CreatePost from "./pages/Create-Post";
import View from "./pages/view-page";


/**
 * The App component is the root component of the Job Finder website. It uses the
 * Router component from the reach/router package to define the routes that are
 * available in the application, and render the appropriate component for each route.
 *
 * @returns {JSX.Element} A React component that renders the app.
 */
const App = () => (
  <div className="container">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/view" element={<View />} />
        <Route path="/logine" element={<Logine />} />
        <Route path="/signupe" element={<Singupe />} />
        <Route
          path="/signup"
          element={<SignUp title="Sign Up As Freelancer" />}
        />
        <Route path="/login" element={<SignUp title="Login As Freelacer" />} />
      </Routes>
    </Router>
  </div>
);

export default App;
