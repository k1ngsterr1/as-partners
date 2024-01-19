import { BurgerButton } from "@features/BurgerButton/ui";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
import { Button } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { UnderText } from "@shared/ui/UnderText";

import styles from "./styles.module.scss";
import Swiper from "swiper";

interface ServiceInnerProps {
  heading: string;
  headingSecond: string;
  serviceName: string;
  mainImage: string;
  paragraph: string;
  images: any[];
}

export const ServiceInner: React.FC<ServiceInnerProps> = ({
  heading,
  headingSecond,
  serviceName,
  mainImage,
  paragraph,
}) => {
  const breadcrumbData = [
    { label: "Главная", path: "/" },
    { label: "Услуги", path: "/services" },
    { label: `${serviceName}`, path: `/${serviceName}` },
  ];

  return (
    <>
      <main className="container">
        <BurgerButton color="black_bg" />
        <h1 className="black mt-7">{heading}</h1>
        <Separator marginTop="mt-6" />
        <UnderText label="НАШИ УСЛУГИ" marginTop="mt-4" />
        <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
        <Button text="Подробнее" margin="mt-8" />
      </main>
      <img src={mainImage} className={styles.image} alt={heading} />
      <section className="container">
        <h2 className={styles.heading}>Детали Услуги</h2>
        <p className="paragraph_black">
          <strong>
            Описание: <br /> <br /> {paragraph}
          </strong>
        </p>
      </section>
      <section className="container">
        <h3 className={styles.heading}>{headingSecond}</h3>
        <p className="paragraph_black text-left">{paragraph}</p>
        {/* <Swiper></Swiper> */}
      </section>
    </>
  );
};
