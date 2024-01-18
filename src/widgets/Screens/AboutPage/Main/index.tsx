import { BurgerButton } from "@features/BurgerButton/ui";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
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
      <UnderText label="ИНФОРМАЦИЯ О НАС" marginTop="mt-4" />
      <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
    </main>
  );
};
