import { useEffect } from "react";
import { AboutMainScreen } from "@widgets/Screens/AboutPage/Main";
import { StatsScreen } from "@widgets/Screens/AboutPage/Stats";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { toggleOffLoader } from "@redux/loaderSlice";
import { Loader } from "@features/Loader/ui";
import { Menu } from "@features/Menu/ui";
import { MapScreen } from "@widgets/Screens/AboutPage/Map";
import { ClientsScreen } from "@widgets/Screens/HomePage/Clients";
import { Footer } from "@features/Footer/ui";
import { FormScreen } from "@widgets/Screens/Form";
import { Header } from "@entities/Header";
import { LineSeparator } from "@shared/ui/LineSeparator";

export const AboutPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleOffLoader());
    }, 2000);
  }, [isLoading]);

  return (
    <div className="page white-bg">
      <Header />
      <Loader />
      <AboutMainScreen />
      <LineSeparator />
      <StatsScreen />
      {/* <MapScreen /> */}
      <LineSeparator />
      <ClientsScreen />
      <LineSeparator />
      <FormScreen />
      <Footer />
      <Menu />
    </div>
  );
};
