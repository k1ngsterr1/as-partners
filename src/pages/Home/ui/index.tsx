import { HomeScreen } from "@widgets/Screens/Home";
import { AboutScreen } from "@widgets/Screens/About";

export const HomePage = () => {
  return (
    <div className="page main_bg">
      <HomeScreen />
      <AboutScreen />
    </div>
  );
};
