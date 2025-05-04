import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { appRoutes } from "./AppRoutes";

import AppLayout from "@/Layout/AppLayout";
import LandingPage from "@/Pages/LandingPage/LandingPage";


const MainRoutes = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"landingPage"} />}></Route>
          <Route path="/landingPage" element={<LandingPage />} />

          <Route path="/app" element={<AppLayout />}>
            {appRoutes.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))}{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
