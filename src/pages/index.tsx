import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { ROUTE_CONSTANTS } from "@shared/config/routes";
import { HomePage } from "./Home/ui";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
