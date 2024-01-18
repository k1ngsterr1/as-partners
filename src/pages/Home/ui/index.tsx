import { HomeScreen } from "@widgets/Screens/HomePage/Home";
import { AboutScreen } from "@widgets/Screens/HomePage/About";
import { ServicesScreen } from "@widgets/Screens/HomePage/Services";
import { ProjectsScreen } from "@widgets/Screens/HomePage/Projects";
import { ClientsScreen } from "@widgets/Screens/HomePage/Clients";
import { FormScreen } from "@widgets/Screens/Form";
import { Footer } from "@features/Footer";
import { Menu } from "@features/Menu";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { useEffect } from "react";

export const HomePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page main_bg">
        <HomeScreen />
        <Menu />
        <AboutScreen />
        <ServicesScreen />
        <ProjectsScreen />
        <ClientsScreen />
        <FormScreen />
      </div>
      <Footer />
    </>
  );
};
