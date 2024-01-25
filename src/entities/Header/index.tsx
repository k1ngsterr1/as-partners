import logo from "@assets/main/logo.svg";
import { useNavigate } from "react-router-dom";
import { MenuButton } from "@shared/ui/MenuButton";

import styles from "./styles.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <img
        src={logo}
        className={styles.header__logo}
        onClick={() => navigate("/home")}
        alt="logo"
      />
      <MenuButton />
    </header>
  );
};
