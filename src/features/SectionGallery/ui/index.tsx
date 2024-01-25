import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import styles from "./styles.module.scss";
import { PhotoItem } from "@shared/lib/data/portfolioContent";

interface ISectionGalleryData {
  images: PhotoItem[];
}

export const SectionGallery: React.FC<ISectionGalleryData> = ({ images }) => {
  return (
    <div className={styles.section_gallery}>
      <Swiper
        className={styles.section_gallery__swiper}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {images.map((photoObject, index) => (
          <SwiperSlide>
            <img
              src={photoObject.photo}
              key={index}
              className="w-full h-full"
              alt="portfolio_photo"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
