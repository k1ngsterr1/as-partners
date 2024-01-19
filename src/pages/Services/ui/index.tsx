import { useEffect } from "react";
import { Menu } from "@features/Menu";
import { Footer } from "@features/Footer";
import { FormScreen } from "@widgets/Screens/Form";
import { useDispatch, useSelector } from "react-redux";
import { toggleOffLoader } from "@redux/loaderSlice";
import { RootState } from "@redux/store";
import { Loader } from "@features/Loader/ui";
import { ServicesScreen } from "@widgets/Screens/HomePage/Services";
import { AllServices } from "@widgets/Screens/ServicesPage/Services";
import { ServicesMain } from "@widgets/Screens/ServicesPage/Main";

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
      <ServicesMain />
      <AllServices />
      <Menu />
      <FormScreen />
      <Footer />
    </div>
  );
};
