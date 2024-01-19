import { HomeScreen } from "@widgets/Screens/HomePage/Home";
import { AboutScreen } from "@widgets/Screens/HomePage/About";
import { ServicesScreen } from "@widgets/Screens/HomePage/Services";
import { ProjectsScreen } from "@widgets/Screens/HomePage/Projects";
import { ClientsScreen } from "@widgets/Screens/HomePage/Clients";
import { FormScreen } from "@widgets/Screens/Form";
import { Footer } from "@features/Footer";
import { Menu } from "@features/Menu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { Loader } from "@features/Loader/ui";
import { toggleOffLoader } from "@redux/loaderSlice";
import { useEffect } from "react";

export const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleOffLoader());
    }, 2000);
  }, [isLoading]);

  return (
    <>
      <div className="page main_bg">
        <Loader />
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
