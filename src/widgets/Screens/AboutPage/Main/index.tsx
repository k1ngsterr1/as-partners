import { BurgerButton } from "@features/BurgerButton/ui";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
import { Button } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { UnderText } from "@shared/ui/UnderText";

import styles from "./styles.module.scss";

export const AboutMainScreen = () => {
  const breadcrumbData = [
    { label: "Главная", path: "/" },
    { label: "О Нас", path: "/about" },
  ];

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
        <Button text="Подробнее" margin="mt-8" />
      </main>
      <main className="container-pc">
        <figure className={styles.line__left} />
        <figure className={styles.line__right} />
        <figure className={styles.line__center} />
        <section className={styles.section_one}>
          <h1 className={`${styles.section_one__heading} !text-custom-black`}>
            AS & Partners Architect
          </h1>
          <Separator marginTop="mt-5 mb-5" />
          <UnderText label="ИНФОРМАЦИЯ О НАС" marginTop="mt-0" />
          <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
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
