import { FC, Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { ROUTE_CONSTANTS } from "@shared/config/routes";

import { Loader } from "@features/Loader/ui";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { HomePage } from "./Home/ui";
import { AboutPage } from "./About/ui";
// const LazyHomePage = lazy(() => import("./Home/ui/index"));

export const MyRoutes = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/index.html" element={<Navigate replace to="/home" />} />
          <Route
            path="/index.shtml"
            element={<Navigate replace to="/home" />}
          />
          <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
          <Route path={ROUTE_CONSTANTS.ABOUT} element={<AboutPage />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};
