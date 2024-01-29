import React from "react";
import styles from "./styles.module.scss";

interface ServiceTabProps {
  text: string;
  margin: string;
  onClick: () => void;
}

export const ServiceTab: React.FC<ServiceTabProps> = ({
  text,
  margin,
  onClick,
}) => {
  return (
    <div className={`${styles.service_tab} ${margin}`} onClick={onClick}>
      <span className={styles.service_tab__text}>{text}</span>
    </div>
  );
};
