import { BurgerButton } from "@features/BurgerButton/ui";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
import { Button } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { UnderText } from "@shared/ui/UnderText";

export const AboutMainScreen = () => {
  const breadcrumbData = [
    { label: "Главная", path: "/" },
    { label: "О Нас", path: "/abot" },
  ];

  return (
    <main className="container">
      <BurgerButton color="black_bg" />
      <h1 className="black">AS & Partners Architect</h1>
      <Separator marginTop="mt-4" />
      <UnderText label="ИНФОРМАЦИЯ О НАС" marginTop="mt-6" />
      <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
      <p className="paragraph_black text-center mt-5">
        Одним из направлений работы нашей студии является проектирование
        коттеджных поселков разного масштаба и типологии. В работе мы применяем
        наш авторский подход, сформированный многолетним опытом в сфере
        архитектуры и дизайна
      </p>
      <Button text="Подробнее" margin="mt-8" />
    </main>
  );
};
