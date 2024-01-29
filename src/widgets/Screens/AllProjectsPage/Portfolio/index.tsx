import { useState } from "react";
import { useMemo } from "react";
import { ProjectTab } from "@entities/ProjectTab";
import { RootState } from "@redux/store";
import { Selector } from "@shared/ui/Selector";
import { Fade, Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { portfolioItems } from "@pages/Projects/ui/portfolioItems";
import { PortfolioProjectsTab } from "@entities/PortfolioProjectTab";
import { useNavigate } from "react-router-dom";

import name from "@assets/main/about_block_image.webp";

export const Portfolio = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "Дизайн Интерьера", label: "Дизайн Интерьера" },
    { value: "Дизайн Квартиры", label: "Дизайн Квартиры" },
    { value: "Дизайн Дома", label: "Дизайн Дома" },
  ];

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

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
        <Selector
          placeholder="Интерьер дома"
          options={options}
          value={selectedValue}
          onChange={handleSelectChange}
          margin="mt-0"
        />
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
