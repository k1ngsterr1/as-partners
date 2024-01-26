import { HomeScreen } from "@widgets/Screens/HomePage/Home";
import { AboutScreen } from "@widgets/Screens/HomePage/About";
import { ServicesScreen } from "@widgets/Screens/HomePage/Services";
import { ProjectsScreen } from "@widgets/Screens/HomePage/Projects";
import { ClientsScreen } from "@widgets/Screens/HomePage/Clients";
import { FormScreen } from "@widgets/Screens/Form";
import { Footer } from "@features/Footer/ui";
import { Menu } from "@features/Menu/ui";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { Loader } from "@features/Loader/ui";
import { toggleOffLoader, toggleOnLoader } from "@redux/loaderSlice";
import { Header } from "@entities/Header";
import { useEffect } from "react";
import { LineSeparator } from "@shared/ui/LineSeparator";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleOffLoader());
    }, 2000);
  }, []);

  return (
    <>
      <div className="page main_bg">
        <Loader />
        <Header />
        <HomeScreen />
        <Menu />
        <AboutScreen />
        <LineSeparator />
        <ServicesScreen />
        <ProjectsScreen />
        <ClientsScreen />
        <LineSeparator />
        <FormScreen />
      </div>
      <Footer />
    </>
  );
};
