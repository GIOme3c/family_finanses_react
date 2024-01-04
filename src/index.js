import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="auth" element={<AuthPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </Layout>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
