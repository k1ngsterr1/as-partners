import { useMemo } from "react";
import { useSelector } from "react-redux";
import image from "@assets/services/services.webp";
import { RootState } from "@redux/store";

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
