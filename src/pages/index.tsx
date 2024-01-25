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
import { AllProjectsPage } from "./Projects/ui";
import { ServicesPage } from "./Services/ui";

// Content
import { serviceContent } from "@shared/lib/data/serviceContent";
import { portfolioContent } from "@shared/lib/data/portfolioContent";

const LazyServiceInner = lazy(() =>
  import("./ServiceInner/index").then((module) => ({
    default: module.ServiceInnerPage,
  }))
);

const LazyPortfolioInner = lazy(() =>
  import("./PortfolioInner/ui/index").then((module) => ({
    default: module.PortfolioInner,
  }))
);

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
          <Route path={ROUTE_CONSTANTS.ABOUT} element={<AboutPage />} />
          <Route
            path={ROUTE_CONSTANTS.PORTFOLIO}
            element={<AllProjectsPage />}
          />
          <Route path={ROUTE_CONSTANTS.SERVICES} element={<ServicesPage />} />
          {Object.entries(serviceContent).map(([serviceType, content]) => (
            <Route
              key={serviceType}
              path={ROUTE_CONSTANTS.SERVICES_OBJECT.replace(
                ":serviceType",
                serviceType
              )}
              element={<LazyServiceInner {...content} />}
            />
          ))}
          {Object.entries(portfolioContent).map(([portfolioType, content]) => (
            <Route
              key={portfolioType}
              path={ROUTE_CONSTANTS.PORTFOLIO_OBJECT.replace(
                ":portfolioType",
                portfolioType
              )}
              element={<LazyPortfolioInner {...content} />}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};
