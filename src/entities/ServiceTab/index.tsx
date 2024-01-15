import React from "react";

import styles from "./styles.module.scss";

interface ServiceTabProps {
  text: string;
}

export const ServiceTab: React.FC<ServiceTabProps> = ({ text }) => {
  return (
    <div className={styles.service_tab}>
      <span className={styles.service_tab__text}>{text}</span>
    </div>
  );
};
