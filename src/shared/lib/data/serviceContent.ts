import gallery02 from "@assets/services/service_tab_example.png";

interface PhotoItem {
  photo: string;
}

export interface ServiceContent {
  heading: string;
  headingSecond: string;
  mainImage: string;
  paragraph: string;
  paragraphSecond: string;
  images: PhotoItem[];
}

export const serviceContent: Record<string, ServiceContent> = {
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
    mainImage: gallery02,
  },
};
