import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/autoplay";

interface Photos {
  photo: string;
}

interface iSmallAutoSlider {
  photos: Photos[];
  name: string;
  className?: string;
}

export const SmallAutoSlider: React.FC<iSmallAutoSlider> = ({
  photos,
  className,
  name,
}) => {
  return (
    <>
      <Swiper
        className={`${styles.swiper} ${className}`}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {photos.map((photoObject, index) => (
          <SwiperSlide>
            <img
              src={photoObject.photo}
              key={index}
              className={styles.swiper__image}
              alt="service_photo"
            />
            <span className={styles.swiper__image__text}>{name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
