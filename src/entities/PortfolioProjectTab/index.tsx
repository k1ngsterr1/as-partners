import React from "react";

import styles from "./styles.module.scss";
import { HoverEffect } from "@entities/HoverEffect";

interface PortfolioTabProps {
  image: string;
  tabName: string;
  projectType: string;
  curvedText: string;
  onClick: () => void;
}

export const PortfolioProjectsTab: React.FC<PortfolioTabProps> = ({
  image,
  tabName,
  projectType,
  onClick,
}) => {
  return (
    <div className={styles.project_tab} onClick={onClick}>
      <img src={image} className={styles.project_tab__image} alt={tabName} />
      <span className={styles.project_tab__text}>{tabName}</span>
      <span className={styles.project_tab__sub_text}>{projectType}</span>
      <HoverEffect text="Проверка" />
    </div>
  );
};
