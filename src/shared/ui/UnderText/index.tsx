import React from "react";

import styles from "./styles.module.scss";

interface UnderTextProps {
  label: string;
  marginTop: string;
}

export const UnderText: React.FC<UnderTextProps> = ({ label, marginTop }) => {
  return <span className={`${styles.under_text} ${marginTop}`}>{label}</span>;
};
