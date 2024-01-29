import { useEffect, useState } from "react";
import { BurgerButton } from "@features/BurgerButton/ui";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
import { Button } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { UnderText } from "@shared/ui/UnderText";

import styles from "./styles.module.scss";

export const AboutMainScreen = () => {
  const [isClientVisible, setIsClientVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);

  const breadcrumbData = [
    { label: "Главная", path: "/" },
    { label: "О Нас", path: "/about" },
  ];

  useEffect(() => {
    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.target.id === "clients") {
          setIsClientVisible(entry.isIntersecting);
        }
        if (entry.target.id === "map") {
          setIsMapVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const mapSection = document.getElementById("map");
    const clientSection = document.getElementById("clients");

    if (clientSection) observer.observe(clientSection);
    if (mapSection) observer.observe(mapSection);

    return () => {
      if (clientSection) observer.unobserve(clientSection);
      if (mapSection) observer.unobserve(mapSection);
    };
  }, []);

  return (
    <>
      <main className="container">
        <BurgerButton color="black_bg" />
        <h1 className="black">AS & Partners Architect</h1>
        <Separator marginTop="mt-4" />
        <UnderText label="ИНФОРМАЦИЯ О НАС" marginTop="mt-6" />
        <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
        <p className="paragraph_black text-center mt-5">
          Одним из направлений работы нашей студии является проектирование
          коттеджных поселков разного масштаба и типологии. В работе мы
          применяем наш авторский подход, сформированный многолетним опытом в
          сфере архитектуры и дизайна
        </p>
        <Button text="Подробнее" margin="mt-8" to={"more-mob"} />
      </main>
      <main className="container-pc" id="upper">
        <figure className={styles.line__left} />
        <figure className={styles.line__right} />
        {!isClientVisible && !isMapVisible && (
          <figure className={styles.line__center} />
        )}
        <section className={styles.section_one}>
          <h1 className={`${styles.section_one__heading} !text-custom-black`}>
            AS & Partners Architect
          </h1>
          <Separator marginTop="mt-5 mb-5" />
          <UnderText label="ИНФОРМАЦИЯ О НАС" marginTop="mt-0" />
          <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
          <Button text="Подробнее" margin="mt-10" to={"more-pc"} />
        </section>
        <section className={styles.section_two}>
          <p className="paragraph black">
            Одним из направлений работы нашей студии является проектирование
            коттеджных поселков разного масштаба и типологии. В работе мы
            применяем наш авторский подход, сформированный многолетним опытом в
            сфере архитектуры и дизайна
          </p>
          <br />
          <br />
          <p className="paragraph black">
            Одним из направлений работы нашей студии является проектирование
            коттеджных поселков разного масштаба и типологии. В работе мы
            применяем наш авторский подход, сформированный многолетним опытом в
            сфере архитектуры и дизайна
          </p>
        </section>
      </main>
    </>
  );
};
