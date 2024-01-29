import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Arrow } from "@shared/ui/Arrow";
import { BurgerButton } from "@features/BurgerButton/ui";
import { Separator } from "@shared/ui/Separator";
import { SectionGallery } from "@features/SectionGallery/ui";
import { sectionGalleryContent } from "@shared/lib/data/sectionGalleryContent";

import logo from "@assets/main/logo_white.svg";

import styles from "./styles.module.scss";

export const HomeScreen = () => {
  const [isClientVisible, setIsClientVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsClientVisible(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );
    const clientSection = document.getElementById("clients");
    if (clientSection) {
      observer.observe(clientSection);
    }

    return () => {
      if (clientSection) {
        observer.unobserve(clientSection);
      }
    };
  });

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
      <main className="container-pc" id="upper">
        <figure className={styles.line__left} />
        <figure className={styles.line__right} />
        {isClientVisible ? null : <figure className={styles.line__center} />}
        <section className={`${styles.first_section} mt-0`}>
          <Fade cascade triggerOnce>
            <h1 className="black w-[100%] ml-8">AS & Partners Architect</h1>
            <Separator marginTop="mt-5 ml-8" />
            <p className="paragraph black mt-7 ml-8 !w-[70%]">
              Добро пожаловать на сайт AS Partners Architect, вашего надежного
              партнера в мире современной архитектуры и дизайна. Мы
              специализируемся на создании инновационных, функциональных и
              эстетически привлекательных архитектурных решений, которые
              отражают последние тенденции в области урбанистики и дизайна
              интерьеров.
            </p>
          </Fade>
        </section>
        <section className={`${styles.second_section}`}>
          <SectionGallery images={sectionGalleryContent.first.photos} />
        </section>
      </main>
    </>
  );
};
