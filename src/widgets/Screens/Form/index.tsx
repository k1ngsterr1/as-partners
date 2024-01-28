import { useEffect, useState } from "react";
import { Button } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { Input } from "@shared/ui/Input";
import { Selector } from "@shared/ui/Selector";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

export const FormScreen = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "Дизайн Интерьера", label: "Дизайн Интерьера" },
    { value: "Дизайн Квартиры", label: "Дизайн Квартиры" },
    { value: "Дизайн Домв", label: "Дизайн Дома" },
  ];

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log("Selected Value:", value);
  };

  return (
    <div className="w-full bg-white">
      <div className="container-no-height">
        <h5 className={styles.heading}>Контакты</h5>
        <Separator marginTop="mt-4" />
        <p className="paragraph-black text-center mt-8">
          Добро пожаловать на сайт AS Partners Architect, вашего надежного
          партнера в мире современной архитектуры и дизайна.
        </p>
        <form className="w-full flex flex-col items-center">
          <Input placeholder="Ваше имя" type="text" required margin="mt-8" />
          <Input
            placeholder="Ваш Электронный адрес"
            type="email"
            required
            margin="mt-8"
          />
          <Selector placeholder="Услуга" margin="mt-8" options={options} />
          <Button text="Отправить" margin="mt-10" />
        </form>
      </div>
      <div className="container-pc-no-height !h-[70vh]">
        <section className={styles.section_one}>
          <Fade delay={100}>
            <form className="flex flex-col">
              <Input placeholder="Ваше имя" type="text" />
              <Input
                placeholder="Ваша электронный адрес"
                margin="mt-8"
                type="email"
              />
              <Selector
                placeholder="Услуга"
                margin="mt-8"
                options={options}
                value={selectedValue}
                onChange={handleSelectChange}
              />
              <Button text="Отправить" type="submit" margin="mt-12" />
            </form>
          </Fade>
        </section>
        <section className={styles.section_two}>
          <Fade delay={150}>
            <h5 className={styles.heading}>Контакты</h5>
          </Fade>
          <Fade delay={200}>
            <Separator marginTop="mt-5 mr-8" />
          </Fade>
          <Fade delay={300} className="flex justify-end">
            <p className="paragraph black !text-right !w-[60%] mr-8 mt-8">
              Добро пожаловать на сайт AS Partners Architect, вашего надежного
              партнера в мире современной архитектуры и дизайна. Мы
              специализируемся на создании инновационных.
            </p>
          </Fade>
        </section>
      </div>
    </div>
  );
};
