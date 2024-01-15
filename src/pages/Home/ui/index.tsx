import { HomeScreen } from "@widgets/Screens/HomePage/Home";
import { AboutScreen } from "@widgets/Screens/HomePage/About";
import { ServicesScreen } from "@widgets/Screens/HomePage/Services";
import { ProjectsScreen } from "@widgets/Screens/HomePage/Projects";
import { ClientsScreen } from "@widgets/Screens/HomePage/Clients";

export const HomePage = () => {
  return (
    <div className="page main_bg">
      <HomeScreen />
      <AboutScreen />
      <ServicesScreen />
      <ProjectsScreen />
      <ClientsScreen />
    </div>
  );
};
