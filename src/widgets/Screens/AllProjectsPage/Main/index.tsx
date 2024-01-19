import React from "react";

import { BurgerButton } from "@features/BurgerButton/ui";
import { Separator } from "@shared/ui/Separator";
import { UnderText } from "@shared/ui/UnderText";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
import { Button } from "@shared/ui/Button";

export const AllProjectsMain = () => {
  const breadcrumbData = [
    { label: "Главная", path: "/" },
    { label: "Портфолио", path: "/portfolio" },
  ];

  return (
    <main className="container">
      <BurgerButton color="black_bg" />
      <h1 className="black">НАШЕ ПОРТФОЛИО</h1>
      <Separator marginTop="mt-4" />
      <UnderText label="ПОРТФОЛИО ПРОЕКТОВ" marginTop="mt-4" />
      <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
      <p className="paragraph_black text-center mt-5">
        Одним из направлений работы нашей студии является проектирование
        коттеджных поселков разного масштаба и типологии. В работе мы применяем
        наш авторский подход, сформированный многолетним опытом в сфере
        архитектуры и дизайна
      </p>
      <Button text="Наши работы" margin="mt-8" />
    </main>
  );
};
