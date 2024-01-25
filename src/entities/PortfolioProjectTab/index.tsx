import React from "react";
import { HoverEffect } from "@entities/HoverEffect";
import { useProjectTabAnimation } from "@shared/lib/hooks/useProjectTabAnimation";

import styles from "./styles.module.scss";

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
  curvedText,
  onClick,
}) => {
  const { hoverRef, animateOnHover, animateOnLeave } = useProjectTabAnimation();

  return (
    <div
      className={styles.project_tab}
      onClick={onClick}
      onMouseEnter={() => animateOnHover()}
      onMouseLeave={() => animateOnLeave()}
    >
      <img src={image} className={styles.project_tab__image} alt={tabName} />
      <span className={styles.project_tab__text}>{tabName}</span>
      <span className={styles.project_tab__sub_text}>{projectType}</span>
      <HoverEffect text={curvedText} ref={hoverRef} />
    </div>
  );
};
