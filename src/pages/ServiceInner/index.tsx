import { useEffect } from "react";
import { BurgerButton } from "@features/BurgerButton/ui";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs } from "@shared/ui/Breadcrumbs";
import { Button } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { UnderText } from "@shared/ui/UnderText";
import { ServiceContent } from "@shared/lib/data/serviceContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { toggleOffLoader } from "@redux/loaderSlice";
import { RootState } from "@redux/store";
import { Menu } from "@features/Menu";
import { Footer } from "@features/Footer";
import { FormScreen } from "@widgets/Screens/Form";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/autoplay";

export const ServiceInnerPage: React.FC<ServiceContent> = ({
  heading,
  headingSecond,
  mainImage,
  paragraph,
  paragraphSecond,
  images,
}) => {
  const breadcrumbData = [
    { label: "Главная", path: "/" },
    { label: "Услуги", path: "/services" },
    { label: `${heading}`, path: `/${heading}` },
  ];

  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  useEffect(() => {
    dispatch(toggleOffLoader());
  }, [isLoading]);

  return (
    <>
      <Menu />
      <main className="container-no-height !mb-40">
        <BurgerButton color="black_bg" />
        <h1 className="black mt-7">{heading}</h1>
        <Separator marginTop="mt-6" />
        <UnderText label="НАШИ УСЛУГИ" marginTop="mt-6" />
        <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
        <p className="paragraph_black mt-6">{paragraph}</p>
        <Button text="Подробнее" margin="mt-8" />
      </main>
      <img src={mainImage} className={styles.image} alt={heading} />
      <section className="container-no-height">
        <h2 className={`${styles.heading} mb-4`}>Детали Услуги</h2>
        <p className="paragraph_black">
          <strong className="mt-7">
            Описание: <br /> <br />
          </strong>
          {paragraphSecond}
        </p>
      </section>
      <Separator marginTop="mt-10 m-auto" />
      <section className="container-no-height ">
        <h3 className={styles.heading}>{headingSecond}</h3>
        <p className="paragraph_black text-left">{paragraph}</p>
        <Swiper
          className={styles.swiper}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.photo} alt="service_photo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <FormScreen />
      <Footer />
    </>
  );
};
