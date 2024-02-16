import React from "react";
import styles from "./styles.module.scss";

interface ServiceTabProps {
  text: string;
  margin: string;
  bgImage: string;
  onClick: () => void;
}

export const ServiceTab: React.FC<ServiceTabProps> = ({
  text,
  margin,
  onClick,
  bgImage,
}) => {
  return (
    <div
      className={`${styles.service_tab} ${margin} ${bgImage}`}
      onClick={onClick}
    >
      <span className={styles.service_tab__text}>{text}</span>
    </div>
  );
};
