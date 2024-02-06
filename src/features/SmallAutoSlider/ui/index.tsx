import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Photos } from "@shared/lib/data/smallGalleryContent";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/autoplay";

interface iSmallAutoSlider {
  photos: Photos[];
  name?: string;
  className?: string;
}

export const SmallAutoSlider: React.FC<iSmallAutoSlider> = ({
  photos,
  className,
}) => {
  const navigate = useNavigate();

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
          <SwiperSlide
            onClick={() => navigate(`/portfolio/${photoObject.navigation}`)}
          >
            <img
              src={photoObject.photo}
              key={index}
              className={styles.swiper__image}
              alt="service_photo"
            />
            <span className={styles.swiper__image__text}>
              {photoObject.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
