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
        <Fade delay={150}>
          <h4 className={styles.heading}>Проекты</h4>
        </Fade>
        <Fade delay={200}>
          <Separator marginTop="mt-4" />
        </Fade>
        <Fade delay={250} className="flex items-center justify-center">
          <p className="paragraph mt-4">
            Добро пожаловать на сайт AS Partners Architect, вашего надежного
            партнера в мире современной архитектуры и дизайна.
          </p>
        </Fade>
        <ProjectTab
          text="31 Канал"
          margin="mt-8"
          image="chanel"
          onClick={() => navigate("/portfolio/thirtyone")}
        />
        <ProjectTab
          text="Apple City"
          margin="mt-8"
          image="apple"
          onClick={() => navigate("/portfolio/apple_city")}
        />
        <ProjectTab
          text="Do Eat"
          margin="mt-8"
          image="doeat"
          onClick={() => navigate("/portfolio/do_eat")}
        />
        <ProjectTab
          text="Freedom Finance"
          margin="mt-8"
          image="ff"
          onClick={() => navigate("/portfolio/freedom_finance")}
        />
        <ProjectTab
          text="Gorky Tennis Park"
          margin="mt-8"
          image="gorky"
          onClick={() => navigate("/portfolio/gorky")}
        />
        <ProjectTab
          text="Lamiya"
          margin="mt-8 mb-8"
          image="lamiya"
          onClick={() => navigate("/portfolio/lamiya")}
        />
        <ProjectTab
          text="Lampadario"
          margin="mt-8 mb-8"
          image="Lampadario"
          onClick={() => navigate("/portfolio/lampadario")}
        />
        <ProjectTab
          text="Lenovo"
          margin="mt-8 mb-8"
          image="Lenovo"
          onClick={() => navigate("/portfolio/lenovo")}
        />
        <ProjectTab
          text="Ремизовка"
          margin="mt-8 mb-8"
          image="remizovka"
          onClick={() => navigate("/portfolio/remizovka")}
        />
        <ProjectTab
          text="Wendy's"
          margin="mt-8 mb-8"
          image="wendys"
          onClick={() => navigate("/portfolio/wendys")}
        />
        <ProjectTab
          text="Tansar"
          margin="mt-8 mb-8"
          image="tansar"
          onClick={() => navigate("/portfolio/tansar")}
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
            <p className="paragraph white mt-7 ml-8 !text-left max-[1112px]:w-[80%]">
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
            damping={0.05}
            className="w-[100%] flex flex-col items-center relative"
          >
            <ProjectTab
              text="31 Канал"
              margin="mt-8"
              image="chanel"
              onClick={() => navigate("/portfolio/thirtyone")}
            />
            <ProjectTab
              text="Apple City"
              margin="mt-8"
              image="apple"
              onClick={() => navigate("/portfolio/apple_city")}
            />
            <ProjectTab
              text="Do Eat"
              margin="mt-8"
              image="doeat"
              onClick={() => navigate("/portfolio/do_eat")}
            />
            <ProjectTab
              text="Freedom Finance"
              margin="mt-8"
              image="ff"
              onClick={() => navigate("/portfolio/freedom_finance")}
            />
            <ProjectTab
              text="Gorky Tennis Park"
              margin="mt-8"
              image="gorky"
              onClick={() => navigate("/portfolio/gorky")}
            />
            <ProjectTab
              text="Lamiya"
              margin="mt-8 mb-8"
              image="lamiya"
              onClick={() => navigate("/portfolio/lamiya")}
            />
            <ProjectTab
              text="Lampadario"
              margin="mt-8 mb-8"
              image="Lampadario"
              onClick={() => navigate("/portfolio/lampadario")}
            />
            <ProjectTab
              text="Lenovo"
              margin="mt-8 mb-8"
              image="Lenovo"
              onClick={() => navigate("/portfolio/lenovo")}
            />
            <ProjectTab
              text="Ремизовка"
              margin="mt-8 mb-8"
              image="remizovka"
              onClick={() => navigate("/portfolio/remizovka")}
            />
            <ProjectTab
              text="Wendy's"
              margin="mt-8 mb-8"
              image="wendys"
              onClick={() => navigate("/portfolio/wendys")}
            />
            <ProjectTab
              text="Tansar"
              margin="mt-8 mb-8"
              image="tansar"
              onClick={() => navigate("/portfolio/tansar")}
            />
          </Fade>
        </div>
      </section>
    </div>
  );
};
