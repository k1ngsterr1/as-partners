import { PortfolioProjectsTab } from "@entities/PortfolioProjectTab";
import { ServiceTab } from "@entities/ServiceTab";
import { useNavigate } from "react-router-dom";

import name from "@assets/main/about_block_image.webp";

export const AllServices = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white mb-10">
      <section className="container" id="more">
        <ServiceTab
          text="Пример услуги"
          margin="mt-4"
          onClick={() => navigate("/services/design")}
        />
        <ServiceTab
          text="Пример услуги"
          margin="mt-4"
          onClick={() => navigate("/services/design")}
        />
        <ServiceTab
          text="Пример услуги"
          margin="mt-4"
          onClick={() => navigate("/services/design")}
        />
        <ServiceTab
          text="Пример услуги"
          margin="mt-4"
          onClick={() => navigate("/services/design")}
        />
      </section>
      <section className="container-pc-no-height flex-col">
        <div className="flex">
          <div className="w-[50%] flex flex-col">
            <div className="w-[100%] flex justify-start flex-wrap">
              <PortfolioProjectsTab
                tabName="Проверка"
                projectType="Проверка"
                curvedText="Проверка"
                image={name}
                onClick={() => console.log("Clicked")}
              />
              <PortfolioProjectsTab
                tabName="Проверка"
                projectType="Проверка"
                curvedText="Проверка"
                image={name}
                onClick={() => console.log("Clicked")}
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col">
            <div className="w-[100%] flex justify-start flex-wrap">
              <PortfolioProjectsTab
                tabName="Проверка"
                projectType="Проверка"
                curvedText="Проверка"
                image={name}
                onClick={() => console.log("Clicked")}
              />
              <PortfolioProjectsTab
                tabName="Проверка"
                projectType="Проверка"
                curvedText="Проверка"
                image={name}
                onClick={() => console.log("Clicked")}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[50%] flex flex-col">
            <div className="w-[100%] flex justify-start flex-wrap">
              <PortfolioProjectsTab
                tabName="Проверка"
                projectType="Проверка"
                curvedText="Проверка"
                image={name}
                onClick={() => console.log("Clicked")}
              />
              <PortfolioProjectsTab
                tabName="Проверка"
                projectType="Проверка"
                curvedText="Проверка"
                image={name}
                onClick={() => console.log("Clicked")}
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col">
            <div className="w-[100%] flex justify-start flex-wrap">
              <PortfolioProjectsTab
                tabName="Проверка"
                projectType="Проверка"
                curvedText="Проверка"
                image={name}
                onClick={() => console.log("Clicked")}
              />
              <PortfolioProjectsTab
                tabName="Проверка"
                projectType="Проверка"
                curvedText="Проверка"
                image={name}
                onClick={() => console.log("Clicked")}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
