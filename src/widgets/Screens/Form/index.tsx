import { useEffect } from "react";
import { Button } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { Input } from "@shared/ui/Input";
import { Selector } from "@shared/ui/Selector";

import styles from "./styles.module.scss";

export const FormScreen = () => {
  const options = [
    { value: "interior_design", label: "Дизайн Интерьера" },
    { value: "apartment_design", label: "Дизайн Квартиры" },
    { value: "house_design", label: "Дизайн Дома" },
  ];

  useEffect(() => {
    console.log(options);
  });

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
    </div>
  );
};
