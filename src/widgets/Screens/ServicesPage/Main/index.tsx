import { BurgerButton } from "@features/BurgerButton/ui";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
import { Button } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { UnderText } from "@shared/ui/UnderText";

export const ServicesMain = () => {
  const breadcrumbData = [
    { label: "Главная", path: "/" },
    { label: "Услуги", path: "/services" },
  ];

  return (
    <main className="container-no-height">
      <BurgerButton color="black_bg" />
      <h1 className="mt-7 black">Наши Услуги</h1>
      <Separator marginTop="mt-4" />
      <UnderText label="НАШИ УСЛУГИ" marginTop="mt-6" />
      <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
      <p className="paragraph black mt-4">
        Одним из направлений работы нашей студии является проектирование
        коттеджных поселков разного масштаба и типологии.
      </p>
      <Button text="Подробнее" margin="mt-8 mb-40" />
    </main>
  );
};
