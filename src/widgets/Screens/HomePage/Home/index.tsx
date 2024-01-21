import { Slide } from "react-awesome-reveal";
import { Arrow } from "@shared/ui/Arrow";
import { BurgerButton } from "@features/BurgerButton/ui";
import { Separator } from "@shared/ui/Separator";

import logo from "@assets/main/logo_white.svg";

import styles from "./styles.module.scss";

export const HomeScreen = () => {
  return (
    <>
      <main className="container">
        <BurgerButton color="white_bg" />
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
      <main className="container-pc">
        <figure className={styles.line__left} />
        <figure className={styles.line__right} />
        <section className={`${styles.first_section} ml-8 mt-0`}>
          <h1 className="black w-[60%]">AS & Partners Architect</h1>
          <Separator marginTop="mt-5" />
          <p className="paragraph black mt-7 !w-[40%]">
            Добро пожаловать на сайт AS Partners Architect, вашего надежного
            партнера в мире современной архитектуры и дизайна. Мы
            специализируемся на создании инновационных, функциональных и
            эстетически привлекательных архитектурных решений, которые отражают
            последние тенденции в области урбанистики и дизайна интерьеров.
          </p>
        </section>
      </main>
    </>
  );
};
