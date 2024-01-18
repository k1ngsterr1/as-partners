import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbData {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  crumbs: BreadcrumbData[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <div>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={crumb.path}>
          {index > 0 && <span>/</span>}
          <Link to={crumb.path}>{crumb.label}</Link>
        </React.Fragment>
      ))}
    </div>
  );
};
