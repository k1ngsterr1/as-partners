import React from "react";
import { ListItem } from "@shared/lib/data/portfolioContent";

import styles from "./styles.module.scss";

export const ListItemComponent: React.FC<ListItem> = ({ label, value }) => {
  return (
    <li className={styles.list_item}>
      <strong className="mr-2">{label}</strong> {value}
    </li>
  );
};
