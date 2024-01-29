import React from "react";

import styles from "./styles.module.scss";

interface ProjectTabProps {
  text: string;
  margin: string;
  image?: string;
  onClick: () => void;
}

export const ProjectTab: React.FC<ProjectTabProps> = ({
  text,
  margin,
  onClick,
}) => {
  return (
    <div className={`${styles.project_tab} ${margin}`} onClick={onClick}>
      <span className={styles.project_tab__text}>{text}</span>
    </div>
  );
};
