import gallery02 from "@assets/services/service_tab_example.png";

export interface PhotoItem {
  photo: string;
  thumbnail?: string;
}

export interface ListItem {
  label: string;
  value: string;
}

export interface PortfolioContent {
  heading: string;
  headingSecond: string;
  mainImage: string;
  paragraph: string;
  paragraphSecond: string;
  images: PhotoItem[];
  listItems: ListItem[];
}

export const portfolioContent: Record<string, PortfolioContent> = {
  design: {
    heading: "Дизайн Интерьеров",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: gallery02,
      },
      {
        photo: gallery02,
      },
      {
        photo: gallery02,
      },
      {
        photo: gallery02,
      },
      {
        photo: gallery02,
      },
    ],
    listItems: [
      {
        label: "Год проектирования:",
        value: "2021",
      },
      {
        label: "Площадь проекта:",
        value: "11 762 кв.м.",
      },
      {
        label: "Стадия Проекта:",
        value: "Завершен",
      },
    ],
    mainImage: gallery02,
  },
};
