import React from "react";

import styles from "./styles.module.scss";

interface UnderTextProps {
  label: string;
  marginTop: string;
  color?: string;
}

export const UnderText: React.FC<UnderTextProps> = ({
  label,
  marginTop,
  color,
}) => {
  return (
    <span className={`${styles.under_text} ${color} ${marginTop}`}>
      {label}
    </span>
  );
};
