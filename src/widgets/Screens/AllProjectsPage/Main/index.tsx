import { BurgerButton } from "@features/BurgerButton/ui";
import { Separator } from "@shared/ui/Separator";
import { UnderText } from "@shared/ui/UnderText";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
import { Button } from "@shared/ui/Button";
import { SmallAutoSlider } from "@features/SmallAutoSlider/ui";
import { smallGalleryContent } from "@shared/lib/data/smallGalleryContent";
import { Lines } from "@shared/ui/Lines";
import { Fade } from "react-awesome-reveal";

import styles from "./styles.module.scss";

export const AllProjectsMain = () => {
  const breadcrumbData = [
    { label: "Главная", path: "/home" },
    { label: " Архитектура", path: "/architecture" },
    { label: "Кварталы", path: "/poselki" },
  ];

  return (
    <>
      <main className="container">
        <BurgerButton color="black_bg" />
        <Fade delay={150}>
          <h1 className="black">НАШЕ ПОРТФОЛИО</h1>
        </Fade>
        <Fade delay={200}>
          <Separator marginTop="mt-4" />
        </Fade>
        <Fade delay={250} className="mt-4">
          <UnderText label="ПОРТФОЛИО ПРОЕКТОВ" marginTop="mt-4" />
        </Fade>
        <Fade delay={300}>
          <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
        </Fade>
        <Fade delay={350} className="flex items-center justify-center">
          <p className="paragraph_black text-center mt-5">
            Одним из направлений работы нашей студии является проектирование
            коттеджных поселков разного масштаба и типологии. В работе мы
            применяем наш авторский подход, сформированный многолетним опытом в
            сфере архитектуры и дизайна
          </p>
        </Fade>
        <Fade delay={400} className="w-full flex items-center justify-center">
          <Button text="Наши работы" margin="mt-8" to={"more"} />
        </Fade>
      </main>
      <main className="container-pc" id="upper">
        <Lines />
        <section className={styles.section_one}>
          <Fade delay={150}>
            <h1 className={`${styles.heading} w-[100%]  !text-custom-black`}>
              ПРОЕКТИРО­ВАНИЕ ПОСЕЛКОВ И КВАРТАЛОВ
            </h1>
          </Fade>
          <Fade delay={200}>
            <Separator marginTop="mt-5" />
          </Fade>
          <Fade delay={250} className="mt-5">
            <UnderText marginTop="mt-5" label="ПОРТФОЛИО ПРОЕКТОВ" />
          </Fade>
          <Fade delay={300}>
            <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
          </Fade>
        </section>
        <section className={styles.section_two}>
          <Fade delay={350}>
            <span className="font-[Montserrat] text-2xl  font-medium text-custom-black">
              ПРОЕКТИРОВАНИЕ ПОСЕЛКОВ И КВАРТАЛОВ ОТ AS & Partners Architects
            </span>
          </Fade>
          <Fade delay={400}>
            <p className="paragraph_black black !text-left mt-8">
              Одним из направлений работы нашей студии является проектирование
              коттеджных поселков разного масштаба и типологии. В работе мы
              применяем наш авторский подход, сформированный многолетним опытом
              в сфере архитектуры и дизайна
            </p>
          </Fade>
          <Fade delay={450}>
            <SmallAutoSlider
              className="ml-0 mt-8"
              photos={smallGalleryContent.first.photos}
            />
          </Fade>
          <Fade delay={500}>
            <Button text="Подробнее" margin="mt-8" to={"more"} />
          </Fade>
        </section>
      </main>
    </>
  );
};
