import { HomeScreen } from "@widgets/Screens/HomePage/Home";
import { AboutScreen } from "@widgets/Screens/HomePage/About";
import { ServicesScreen } from "@widgets/Screens/HomePage/Services";

export const HomePage = () => {
  return (
    <div className="page main_bg">
      <HomeScreen />
      <AboutScreen />
      <ServicesScreen />
    </div>
  );
};
