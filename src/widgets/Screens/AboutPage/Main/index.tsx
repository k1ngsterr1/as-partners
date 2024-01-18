import { BurgerButton } from "@features/BurgerButton/ui";
import { Separator } from "@shared/ui/Separator";
import React from "react";

export const AboutMainScreen = () => {
  return (
    <main className="container">
      <BurgerButton color="black_bg" />
      <h1 className="black">AS & Partners Architect</h1>
      <Separator marginTop="mt-4" />
    </main>
  );
};
