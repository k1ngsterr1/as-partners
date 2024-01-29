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
import { Menu } from "@features/Menu/ui";
import { Footer } from "@features/Footer/ui";
import { FormScreen } from "@widgets/Screens/Form";
import { Header } from "@entities/Header";
import { Lines } from "@shared/ui/Lines";
import { SectionGallery } from "@features/SectionGallery/ui";
import { LineSeparator } from "@shared/ui/LineSeparator";
import { ListItemComponent } from "@shared/ui/ListItem";
import { ThumbnainGallery } from "@features/ThumbnailGallery/ui";
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
      <div className="mobile min-[1024px]:hidden">
        <Menu />
        <main className="container-no-height !mb-40">
          <BurgerButton color="black_bg" />
          <h1 className="black mt-7">{heading}</h1>
          <Separator marginTop="mt-6" />
          <UnderText label="НАШИ УСЛУГИ" marginTop="mt-6" />
          <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-4" />
          <p className="paragraph_black mt-6">{paragraph}</p>
          <Button text="Подробнее" margin="mt-8" to={"more"} />
        </main>
        <img src={mainImage} className={styles.image} alt={heading} />
        <section className="container-no-height" id="more">
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
      </div>
      <div className="desktop w-full max-[448px]:hidden">
        <Header />
        <Menu />
        <main className="container-pc" id="upper">
          <Lines />
          <div className={styles.section_one}>
            <h1 className="black ml-8">{heading}</h1>
            <Separator marginTop="mt-8 ml-8" />
            <UnderText label="Дизайн Интерьеров" marginTop="mt-8 ml-8" />
            <Breadcrumbs crumbs={breadcrumbData} marginTop="mt-5 ml-8" />
            <Button text="Подробнее" margin="mt-8 ml-8" to={"more"} />
          </div>
          <div className={styles.section_two}>
            <SectionGallery images={images} />
          </div>
        </main>
        <LineSeparator />
        <img className="w-[100vw] h-[100vh]" src={mainImage} />
        <section className="container-pc" id="more">
          <div className={styles.section_one}>
            <ThumbnainGallery images={images} />
          </div>
          <div className={`${styles.section_two} !justify-center`}>
            <h3 className={styles.smaller_heading}>{headingSecond}</h3>
            <Separator marginTop="mt-5 mb-5 ml-8" />
            <p className="paragraph black ml-8">{paragraphSecond}</p>
            <p className="paragraph black mt-8 ml-8">{paragraphSecond}</p>
          </div>
        </section>
        <LineSeparator />
        <FormScreen />
        <Footer />
      </div>
    </>
  );
};
