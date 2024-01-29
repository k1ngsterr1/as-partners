import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

interface BreadcrumbData {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  crumbs: BreadcrumbData[];
  marginTop: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  crumbs,
  marginTop,
}) => {
  return (
    <div className={`${styles.breadcrumb} ${marginTop}`}>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={crumb.path}>
          {index > 0 && <span className="ml-2 mr-2 ">/</span>}
          <Link
            to={crumb.path}
            className="transition-all hover:text-custom-blue "
          >
            {crumb.label}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};
