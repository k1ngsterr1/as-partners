import { useMemo } from "react";
import { ProjectTab } from "@entities/ProjectTab";
import { RootState } from "@redux/store";
import { Selector } from "@shared/ui/Selector";
import { Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { portfolioItems } from "@pages/Projects/ui/portfolioItems";
import { PortfolioProjectsTab } from "@entities/PortfolioProjectTab";

import name from "@assets/main/about_block_image.webp";
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const options = [
    { value: "houses", label: "Дизайн Интерьера" },
    { value: "houses", label: "Дизайн Квартиры" },
    { value: "houses", label: "Дизайн Дома" },
  ];

  const navigate = useNavigate();

  const selectedOption: string = useSelector(
    (state: RootState) => state.portfolioSelector.selectedOption
  );

  const itemsToDisplay = useMemo(() => {
    return portfolioItems[selectedOption] || [];
  }, [selectedOption]);

  console.log(itemsToDisplay, selectedOption);

  return (
    <div className="w-full bg-white mb-10 min-[1024px]:mb-0" id="more">
      <section className="container">
        <Selector placeholder="Интерьер дома" options={options} />
        {itemsToDisplay.map((item, index) => (
          <Slide className="w-full flex flex-col mt-7" triggerOnce>
            <ProjectTab
              key={index}
              text={item.name}
              image={item.img}
              margin="mt-4"
              onClick={() => console.log("Clicked")}
            />
          </Slide>
        ))}
      </section>
      <section className="container-pc-no-height">
        <div className="w-[50%] flex flex-col">
          <div className="w-[100%] flex justify-start flex-wrap">
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              curvedText="Проверка"
              image={name}
              onClick={() => navigate("/portfolio/design")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              curvedText="Проверка"
              image={name}
              onClick={() => navigate("/portfolio/design")}
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
              onClick={() => navigate("/portfolio/design")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              curvedText="Проверка"
              image={name}
              onClick={() => navigate("/portfolio/design")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
