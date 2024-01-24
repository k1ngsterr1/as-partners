import { useMemo } from "react";
import { ProjectTab } from "@entities/ProjectTab";
import { RootState } from "@redux/store";
import { Selector } from "@shared/ui/Selector";
import { Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { portfolioItems } from "@pages/Projects/ui/portfolioItems";
import { PortfolioProjectsTab } from "@entities/PortfolioProjectTab";

import name from "@assets/main/about_block_image.webp";
import ReactCurvedText from "react-curved-text";
import { HoverEffect } from "@entities/HoverEffect";

export const Portfolio = () => {
  const options = [
    { value: "houses", label: "Дизайн Интерьера" },
    { value: "houses", label: "Дизайн Квартиры" },
    { value: "houses", label: "Дизайн Дома" },
  ];

  const selectedOption: string = useSelector(
    (state: RootState) => state.portfolioSelector.selectedOption
  );

  const itemsToDisplay = useMemo(() => {
    return portfolioItems[selectedOption] || [];
  }, [selectedOption]);

  console.log(itemsToDisplay, selectedOption);

  return (
    <div className="w-full bg-white mb-10">
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
        {/* Left Side */}
        <div className="w-[50%] flex flex-col">
          <div className="w-[100%] flex">
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
          </div>
          <div className="w-[100%] flex">
            {" "}
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
          </div>
          <div className="w-[100%] flex">
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
          </div>
          <div className="w-[100%] flex">
            {" "}
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="w-[50%] flex flex-col">
          <div className="w-[100%] flex tabs">
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
          </div>
          <div className="w-[100%] flex">
            {" "}
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
          </div>
          <div className="w-[100%] flex tabs">
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
          </div>
          <div className="w-[100%] flex">
            {" "}
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
            <PortfolioProjectsTab
              tabName="Проверка"
              projectType="Проверка"
              image={name}
              onClick={() => console.log("Clicked")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
