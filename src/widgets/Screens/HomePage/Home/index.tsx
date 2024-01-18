import { Slide } from "react-awesome-reveal";
import { Arrow } from "@shared/ui/Arrow";
import { BurgerButton } from "@features/BurgerButton/ui";
import { Separator } from "@shared/ui/Separator";
import { useDispatch } from "react-redux";
import { openMenu } from "@redux/menuSlice";

import logo from "@assets/main/logo_white.svg";
import about from "@assets/main/about_block_image.webp";

import styles from "./styles.module.scss";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  function OpenMenu() {
    dispatch(openMenu());
  }

  return (
    <main className="container">
      <BurgerButton onClick={() => OpenMenu()} />
      <Slide delay={100} triggerOnce>
        <img src={logo} className={styles.logo} alt="logo" />
      </Slide>
      <Slide delay={150} direction="right" triggerOnce>
        <h1 className="mt-7">AS & Partners Architect</h1>
      </Slide>
      <Slide delay={200} direction="left" triggerOnce>
        <Separator marginTop="mt-2" />
      </Slide>
      <Slide
        delay={250}
        direction="right"
        className="w-full flex items-center justify-center"
        triggerOnce
      >
        <p className="paragraph mt-4">
          Добро пожаловать на сайт AS Partners Architect, вашего надежного
          партнера в мире современной архитектуры и дизайна.
        </p>
      </Slide>
      <Slide delay={300} direction="up">
        <Arrow />
      </Slide>
    </main>
  );
};
