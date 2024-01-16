import { Separator } from "@shared/ui/Separator";

import styles from "./styles.module.scss";
import { Input } from "@shared/ui/Input";

export const FormScreen = () => {
  return (
    <div className="w-full bg-white">
      <div className="container">
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
        </form>
      </div>
    </div>
  );
};
