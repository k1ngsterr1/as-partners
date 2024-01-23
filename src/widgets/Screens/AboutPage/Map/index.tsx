import map from "@assets/main/map_mobile.webp";
import styles from "./styles.module.scss";

export const MapScreen = () => {
  return (
    <>
      <div className="w-full bg-white" id="map">
        <section className="container-no-height">
          <h3 className={`${styles.heading}`}>
            География выполненных проектов
          </h3>
          <p className="paragraph_black mt-4">
            Добро пожаловать на сайт AS Partners Architect, вашего надежного
            партнера в мире современной архитектуры и дизайна.
          </p>
          <img src={map} className="mt-10 mb-20" alt="map_mobile" />
        </section>
      </div>
      <div className="w-full bg-white" id="map">
        <section className="container-pc-no-height flex flex-col items-center">
          <h3 className={`${styles.heading} w-[100%]`}>
            География выполненных проектов
          </h3>
          <p className="paragraph black !text-center !w-[50%] mt-4">
            Добро пожаловать на сайт AS Partners Architect, вашего надежного
            партнера в мире современной архитектуры и дизайна.
          </p>
          <img src={map} className="mt-10 mb-20" alt="map_mobile" />
        </section>
      </div>
    </>
  );
};
