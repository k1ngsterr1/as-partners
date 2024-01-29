import image from "@assets/services/services.webp";

export type PortfolioItemProps = {
  name: string;
  img: string;
};

export type PortfolioItems = {
  [key: string]: PortfolioItemProps[];
};

export const portfolioItems: PortfolioItems = {
  houses: [
    {
      name: "Пример проекта",
      img: image,
    },
    {
      name: "Пример проекта",
      img: image,
    },
    {
      name: "Пример проекта",
      img: image,
    },
    {
      name: "Пример проекта",
      img: image,
    },
    {
      name: "Пример проекта",
      img: image,
    },
    {
      name: "Пример проекта",
      img: image,
    },
    {
      name: "Пример проекта",
      img: image,
    },
  ],
};
