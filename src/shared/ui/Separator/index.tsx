import React from "react";

import styles from "./styles.module.scss";
interface SeparatorProps {
  marginTop: string;
}

export const Separator: React.FC<SeparatorProps> = ({ marginTop }) => {
  return <hr className={`${styles.separator} ${marginTop}`}></hr>;
};
