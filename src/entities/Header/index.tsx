import logo from "@assets/main/logo.svg";
import { useNavigate } from "react-router-dom";
import { MenuButton } from "@shared/ui/MenuButton";

import styles from "./styles.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header} onClick={() => navigate("/home")}>
      <img src={logo} className={styles.header__logo} alt="logo" />
      <MenuButton />
    </header>
  );
};
