import React from "react";
import logo from "@assets/main/logo.svg";

import styles from "./styles.module.scss";
import { BurgerButton } from "@features/BurgerButton/ui";
import { MenuButton } from "@shared/ui/MenuButton";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.header__logo} alt="logo" />
      <MenuButton />
    </header>
  );
};
