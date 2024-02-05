import { useState } from "react";
import { useMemo } from "react";
import { ProjectTab } from "@entities/ProjectTab";
import { RootState } from "@redux/store";
import { Selector } from "@shared/ui/Selector";
import { Slide } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { portfolioItems } from "@pages/Projects/ui/portfolioItems";
import { PortfolioProjectsTab } from "@entities/PortfolioProjectTab";
import { useNavigate } from "react-router-dom";

import siemens from "@assets/projects/Siemens/Siemens01.webp";
import FB from "@assets/projects/FF/FFB02.webp";
import channel from "@assets/projects/31/31channel04.webp";
import gorky from "@assets/projects/Gorky/gorky_tennis01.webp";
import apple_city from "@assets/projects/AppleCity/AppleCity02.webp";
import ritz_carlton from "@assets/projects/RitzCarlton/ritzCarlton01.webp";
import lampadario from "@assets/projects/Lampadario/Lampadario01.webp";
import doEat from "@assets/projects/DoEat/DoEat01.webp";
import lamiya from "@assets/projects/Lamiya/Lamiya01.webp";
import lenovo from "@assets/projects/Lenovo/Lenovo01.webp";
import globalDev from "@assets/projects/GlobalDev/GlobalDev04.webp";
import parkView from "@assets/projects/ParkView/ParkView01.webp";
import remizovka from "@assets/projects/Remizovka/remizovka01.webp";
import takeda from "@assets/projects/Takeda/takeda02.webp";
import wendys from "@assets/projects/Wendys/Wendy01.webp";
import tansar from "@assets/projects/Tansar/tansar01.webp";

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
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-[50%] flex flex-col">
              <div className="w-[100%] flex justify-start flex-wrap">
                <PortfolioProjectsTab
                  tabName="Siemens"
                  projectType="Reception"
                  curvedText="Siemens"
                  image={siemens}
                  onClick={() => navigate("/portfolio/siemens")}
                />

                <PortfolioProjectsTab
                  tabName="Freedom Bank"
                  projectType="Bank"
                  curvedText="Freedom Bank"
                  image={FB}
                  onClick={() => navigate("/portfolio/freedom_bank")}
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col">
              <div className="w-[100%] flex justify-start flex-wrap">
                <PortfolioProjectsTab
                  tabName="31 Канал"
                  projectType="Office"
                  curvedText="31 Канал"
                  image={channel}
                  onClick={() => navigate("/portfolio/31_channel")}
                />
                <PortfolioProjectsTab
                  tabName="Gorky Tennis"
                  projectType="Park"
                  curvedText="Gorky Tennis"
                  image={gorky}
                  onClick={() => navigate("/portfolio/gorky")}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[50%] flex flex-col">
              <div className="w-[100%] flex justify-start flex-wrap">
                <PortfolioProjectsTab
                  tabName="Apple City"
                  projectType="Cafe"
                  curvedText="Apple City"
                  image={apple_city}
                  onClick={() => navigate("/portfolio/apple_city")}
                />

                <PortfolioProjectsTab
                  tabName="Ritz Carlton"
                  projectType="Hotel"
                  curvedText="Ritz Carlton"
                  image={ritz_carlton}
                  onClick={() => navigate("/portfolio/ritz_carlton")}
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col">
              <div className="w-[100%] flex justify-start flex-wrap">
                <PortfolioProjectsTab
                  tabName="Lampadario"
                  projectType="Office"
                  curvedText="Lampadario"
                  image={lampadario}
                  onClick={() => navigate("/portfolio/lampadario")}
                />
                <PortfolioProjectsTab
                  tabName="DoEat"
                  projectType="Cafe"
                  curvedText="DoEat"
                  image={doEat}
                  onClick={() => navigate("/portfolio/gorky")}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[50%] flex flex-col">
              <div className="w-[100%] flex justify-start flex-wrap">
                <PortfolioProjectsTab
                  tabName="Lamiya"
                  projectType="ЖК"
                  curvedText="Lamiya"
                  image={lamiya}
                  onClick={() => navigate("/portfolio/lamiya")}
                />
                <PortfolioProjectsTab
                  tabName="Lenovo"
                  projectType="Office"
                  curvedText="Lenovo"
                  image={lenovo}
                  onClick={() => navigate("/portfolio/lenovo")}
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col">
              <div className="w-[100%] flex justify-start flex-wrap">
                <PortfolioProjectsTab
                  tabName="Global Dev"
                  projectType="Office"
                  curvedText="Global Dev"
                  image={globalDev}
                  onClick={() => navigate("/portfolio/global_deb")}
                />
                <PortfolioProjectsTab
                  tabName="Park View"
                  projectType="Cafe"
                  curvedText="Park View"
                  image={parkView}
                  onClick={() => navigate("/portfolio/park_view")}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[50%] flex flex-col">
              <div className="w-[100%] flex justify-start flex-wrap">
                <PortfolioProjectsTab
                  tabName="Ремизовка"
                  projectType="ЖК"
                  curvedText="Ремизовка"
                  image={remizovka}
                  onClick={() => navigate("/portfolio/remizovka")}
                />
                <PortfolioProjectsTab
                  tabName="Takeda"
                  projectType="Office"
                  curvedText="Takeda"
                  image={takeda}
                  onClick={() => navigate("/portfolio/takeda")}
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col">
              <div className="w-[100%] flex justify-start flex-wrap">
                <PortfolioProjectsTab
                  tabName="Tansar"
                  projectType="Office"
                  curvedText="Tansar"
                  image={tansar}
                  onClick={() => navigate("/portfolio/tansar")}
                />
                <PortfolioProjectsTab
                  tabName="Wendy's"
                  projectType="Cafe"
                  curvedText="Wendy's"
                  image={wendys}
                  onClick={() => navigate("/portfolio/wendys")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
