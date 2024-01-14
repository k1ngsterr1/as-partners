import { BurgerButton } from "@features/BurgerButton/ui";
import { HomeScreen } from "@widgets/Screens/Home";

export const HomePage = () => {
  return (
    <div className="page main_bg">
      <BurgerButton />
      <HomeScreen />
    </div>
  );
};
