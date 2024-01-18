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
import { Loader } from "@features/Loader/ui";

export const HomePage = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  return (
    <>
      <div className="page main_bg">
        <HomeScreen />
        <Menu />
        <Loader />
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
