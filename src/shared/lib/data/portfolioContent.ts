import gallery02 from "@assets/services/service_tab_example.png";

import siemens from "@assets/projects/Siemens/Siemens01.webp";
import siemens02 from "@assets/projects/Siemens/Siemens02.webp";
import siemens03 from "@assets/projects/Siemens/Siemens03.webp";
import siemens04 from "@assets/projects/Siemens/Siemens04.webp";
import siemens05 from "@assets/projects/Siemens/Siemens05.webp";

import siemens_gallery from "@assets/projects/Siemens/siemens_gallery01.webp";
import siemens_gallery02 from "@assets/projects/Siemens/siemens_gallery02.webp";
import siemens_gallery03 from "@assets/projects/Siemens/siemens_gallery03.webp";
import siemens_gallery04 from "@assets/projects/Siemens/siemens_gallery04.webp";
import siemens_gallery05 from "@assets/projects/Siemens/siemens_gallery05.webp";

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
  images_thumbnail: PhotoItem[];
  listItems: ListItem[];
}

export const portfolioContent: Record<string, PortfolioContent> = {
  siemens: {
    heading: "Siemens",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: siemens_gallery,
      },
      {
        photo: siemens_gallery02,
      },
      {
        photo: siemens_gallery03,
      },
      {
        photo: siemens_gallery04,
      },
      {
        photo: siemens_gallery05,
      },
    ],
    images_thumbnail: [
      {
        photo: siemens02,
      },
      {
        photo: siemens03,
      },
      {
        photo: siemens04,
      },
      {
        photo: siemens05,
      },
    ],
    listItems: [
      {
        label: "Год проектирования:",
        value: "2021",
      },
      {
        label: "Площадь проекта:",
        value: "32 кв.м.",
      },
      {
        label: "Стадия Проекта:",
        value: "Завершен",
      },
    ],
    mainImage: siemens,
  },
};
