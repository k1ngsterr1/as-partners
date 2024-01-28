import { BurgerButton } from "@features/BurgerButton/ui";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
import { Button } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { UnderText } from "@shared/ui/UnderText";
import { Lines } from "@shared/ui/Lines";
import { SmallAutoSlider } from "@features/SmallAutoSlider/ui";
import { smallGalleryContent } from "@shared/lib/data/smallGalleryContent";
import styles from "./styles.module.scss";

export const ServicesMain = () => {
  const breadcrumbData = [
    { label: "Главная", path: "/" },
    { label: "Услуги", path: "/services" },
  ];

  return (
    <>
      <main className="container-no-height">
        <BurgerButton color="black_bg" />
        <h1 className="mt-7 black">УСЛУГИ AS & PARTNERS</h1>
        <Separator marginTop="mt-4" />
        <UnderText label="НАШИ УСЛУГИ" marginTop="mt-6" />
        <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
        <p className="paragraph black mt-4">
          Одним из направлений работы нашей студии является проектирование
          коттеджных поселков разного масштаба и типологии.
        </p>
        <Button text="Подробнее" margin="mt-8 mb-40" to={"more"} />
      </main>
      <main className="container-pc">
        <Lines />
        <section className={styles.section_one}>
          <h1 className={`${styles.heading} w-[100%]  !text-custom-black`}>
            УСЛУГИ AS & PARTNERS
          </h1>
          <Separator marginTop="mt-5" />
          <UnderText marginTop="mt-5" label="СПИСОК ВСЕХ УСЛУГ" />
          <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
        </section>
        <section className={styles.section_two}>
          <span className="font-[Montserrat] text-2xl  font-medium text-custom-black">
            ПРОЕКТИРОВАНИЕ ПОСЕЛКОВ И КВАРТАЛОВ ОТ AS & Partners Architects
          </span>
          <p className="paragraph black !text-left mt-8">
            Одним из направлений работы нашей студии является проектирование
            коттеджных поселков разного масштаба и типологии. В работе мы
            применяем наш авторский подход, сформированный многолетним опытом в
            сфере архитектуры и дизайна
          </p>
          <SmallAutoSlider
            className="ml-0 mt-8"
            photos={smallGalleryContent.first.photos}
            name={smallGalleryContent.first.name}
          />
          <Button text="Подробнее" margin="mt-8" to={"more"} />
        </section>
      </main>
    </>
  );
};
