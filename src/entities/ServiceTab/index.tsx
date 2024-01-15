import React from "react";

import styles from "./styles.module.scss";

interface ServiceTabProps {
  text: string;
  margin: string;
}

export const ServiceTab: React.FC<ServiceTabProps> = ({ text, margin }) => {
  return (
    <div className={`${styles.service_tab} ${margin}`}>
      <span className={styles.service_tab__text}>{text}</span>
    </div>
  );
};
