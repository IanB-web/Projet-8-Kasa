import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Logements from "../pages/logements/Logements";
import ErrorPage from "../pages/error/Error";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.logements()} element={<Logements />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
