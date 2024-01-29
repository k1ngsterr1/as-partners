import { ProjectTab } from "@entities/ProjectTab";
import { ButtonWhite, ButtonWhiteNavigation } from "@shared/ui/Button";
import { Separator } from "@shared/ui/Separator";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const ProjectsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-custom-black">
      <section className="container">
        <div className={styles.button_row}>
          <ButtonWhiteNavigation
            text="Архитектурные решения"
            margin="mt-8 mb-4"
            to={"/services/architecture"}
          />
          <ButtonWhite
            text="Дизайн Интерьера"
            margin="mt-5 mb-4"
            to={"/services/architecture"}
          />
        </div>
        <h4 className={styles.heading}>Проекты</h4>
        <Separator marginTop="mt-4" />
        <p className="paragraph mt-4">
          Добро пожаловать на сайт AS Partners Architect, вашего надежного
          партнера в мире современной архитектуры и дизайна.
        </p>
        <ProjectTab
          text="Пример проекта"
          margin="mt-8"
          onClick={() => navigate("/portfolio/design")}
        />
        <ProjectTab
          text="Пример проекта"
          margin="mt-8"
          onClick={() => navigate("/portfolio/design")}
        />
        <ProjectTab
          text="Пример проекта"
          margin="mt-8"
          onClick={() => navigate("/portfolio/design")}
        />
        <ButtonWhiteNavigation
          text="Все проекты"
          margin="mt-8 mb-8"
          to={"/portfolio"}
        />
      </section>
      <section className="container-pc">
        <div className={`${styles.section_one}`}>
          <Fade delay={100}>
            <h4 className={`${styles.heading} ml-8`}>Проекты</h4>
          </Fade>
          <Fade delay={150}>
            <Separator marginTop="mt-5 ml-8" />
          </Fade>
          <Fade delay={200}>
            <p className="paragraph white mt-7 ml-8">
              Добро пожаловать на сайт AS Partners Architect, вашего надежного
              партнера в мире современной архитектуры и дизайна. Мы
              специализируемся на создании инновационных, функциональных и
              эстетически привлекательных архитектурных решений, которые
              отражают последние тенденции в области урбанистики и дизайна
              интерьеров.
            </p>
          </Fade>
          <Fade delay={250}>
            <ButtonWhiteNavigation
              to={"/portfolio"}
              text="Все проекты"
              margin="ml-8 mt-8"
            />
          </Fade>
        </div>
        <div className={`${styles.section_two} scrollable_section relative`}>
          <Fade
            cascade
            damping={0.2}
            className="w-[100%] flex flex-col items-center relative"
          >
            <ProjectTab
              text="Пример проекта"
              margin="mt-8"
              onClick={() => navigate("/portfolio/design")}
            />
            <ProjectTab
              text="Пример проекта"
              margin="mt-8"
              onClick={() => navigate("/portfolio/design")}
            />
            <ProjectTab
              text="Пример проекта"
              margin="mt-8"
              onClick={() => navigate("/portfolio/design")}
            />
            <ProjectTab
              text="Пример проекта"
              margin="mt-8"
              onClick={() => navigate("/portfolio/design")}
            />
            <ProjectTab
              text="Пример проекта"
              margin="mt-8"
              onClick={() => navigate("/portfolio/design")}
            />
            <ProjectTab
              text="Пример проекта"
              margin="mt-8"
              onClick={() => navigate("/portfolio/design")}
            />
            <ProjectTab
              text="Пример проекта"
              margin="mt-8 mb-8"
              onClick={() => navigate("/portfolio/design")}
            />
          </Fade>
        </div>
      </section>
    </div>
  );
};
