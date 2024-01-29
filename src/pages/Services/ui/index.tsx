import { useEffect } from "react";
import { Menu } from "@features/Menu/ui";
import { Footer } from "@features/Footer/ui";
import { FormScreen } from "@widgets/Screens/Form";
import { useDispatch, useSelector } from "react-redux";
import { toggleOffLoader } from "@redux/loaderSlice";
import { RootState } from "@redux/store";
import { Loader } from "@features/Loader/ui";
import { AllServices } from "@widgets/Screens/ServicesPage/Services";
import { ServicesMain } from "@widgets/Screens/ServicesPage/Main";
import { Header } from "@entities/Header";
import { LineSeparator } from "@shared/ui/LineSeparator";

export const ServicesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleOffLoader());
    }, 2000);
  }, [isLoading]);

  return (
    <div className="page white_bg">
      <Loader />
      <Header />
      <Menu />
      <ServicesMain />
      <LineSeparator />
      <AllServices />
      <FormScreen />
      <Footer />
    </div>
  );
};
