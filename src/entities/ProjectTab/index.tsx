import React from "react";

import styles from "./styles.module.scss";

interface ProjectTabProps {
  text: string;
  margin: string;
}

export const ProjectTab: React.FC<ProjectTabProps> = ({ text, margin }) => {
  return (
    <div className={`${styles.project_tab} ${margin}`}>
      <span className={styles.project_tab__text}>{text}</span>
    </div>
  );
};
