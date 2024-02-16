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
  image,
  margin,
  onClick,
}) => {
  return (
    <div
      className={`${styles.project_tab} ${margin} ${image}`}
      onClick={onClick}
    >
      <span className={styles.project_tab__text}>{text}</span>
    </div>
  );
};
