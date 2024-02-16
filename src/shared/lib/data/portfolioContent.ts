import siemens from "@assets/projects/Siemens/Siemens01.webp";
import siemens02 from "@assets/projects/Siemens/Siemens02.webp";
import siemens03 from "@assets/projects/Siemens/Siemens03.webp";
import siemens04 from "@assets/projects/Siemens/Siemens04.webp";
import siemens05 from "@assets/projects/Siemens/Siemens05.webp";

import siemens_gallery from "@assets/projects/Siemens/gallery/siemens_gallery_01.webp";
import siemens_gallery02 from "@assets/projects/Siemens/gallery/siemens_gallery_02.webp";
import siemens_gallery03 from "@assets/projects/Siemens/gallery/siemens_gallery_03.webp";
import siemens_gallery04 from "@assets/projects/Siemens/gallery/siemens_gallery_04.webp";
import siemens_gallery05 from "@assets/projects/Siemens/gallery/siemens_gallery_05.webp";

import channel_gallery from "@assets/projects/31/gallery/31_channel_01.webp";
import channel_gallery02 from "@assets/projects/31/gallery/31_channel_02.webp";
import channel_gallery03 from "@assets/projects/31/gallery/31_channel_03.webp";
import channel_gallery04 from "@assets/projects/31/gallery/31_channel_04.webp";
import channel_gallery05 from "@assets/projects/31/gallery/31_channel_05.webp";

import applecity_gallery from "@assets/projects/AppleCity/gallery/apple_city_01.webp";
import applecity_gallery02 from "@assets/projects/AppleCity/gallery/apple_city_01.webp";
import applecity_gallery03 from "@assets/projects/AppleCity/gallery/apple_city_01.webp";
import applecity_gallery04 from "@assets/projects/AppleCity/gallery/apple_city_01.webp";
import applecity_gallery05 from "@assets/projects/AppleCity/gallery/apple_city_01.webp";

import doeat_gallery from "@assets/projects/DoEat/gallery/do_eat_gallery_01.webp";
import doeat_gallery02 from "@assets/projects/DoEat/gallery/do_eat_gallery_02.webp";
import doeat_gallery03 from "@assets/projects/DoEat/gallery/do_eat_gallery_03.webp";
import doeat_gallery04 from "@assets/projects/DoEat/gallery/do_eat_gallery_04.webp";
import doeat_gallery05 from "@assets/projects/DoEat/gallery/do_eat_gallery_05.webp";

import ff_gallery from "@assets/projects/FF/gallery/ff_01.webp";
import ff_gallery02 from "@assets/projects/FF/gallery/ff_02.webp";
import ff_gallery03 from "@assets/projects/FF/gallery/ff_03.webp";
import ff_gallery04 from "@assets/projects/FF/gallery/ff_04.webp";
import ff_gallery05 from "@assets/projects/FF/gallery/ff_05.webp";

import globaldev_gallery from "@assets/projects/GlobalDev/gallery/global_dev_gallery_01.webp";
import globaldev_gallery02 from "@assets/projects/GlobalDev/gallery/global_dev_gallery_02.webp";
import globaldev_gallery03 from "@assets/projects/GlobalDev/gallery/global_dev_gallery_03.webp";
import globaldev_gallery04 from "@assets/projects/GlobalDev/gallery/global_dev_gallery_04.webp";
import globaldev_gallery05 from "@assets/projects/GlobalDev/gallery/global_dev_gallery_05.webp";

import gorky_gallery from "@assets/projects/Gorky/gallery/gorky_gallery_01.webp";
import gorky_gallery02 from "@assets/projects/Gorky/gallery/gorky_gallery_02.webp";
import gorky_gallery03 from "@assets/projects/Gorky/gallery/gorky_gallery_03.webp";
import gorky_gallery04 from "@assets/projects/Gorky/gallery/gorky_gallery_04.webp";
import gorky_gallery05 from "@assets/projects/Gorky/gallery/gorky_gallery_05.webp";

import lamiya_gallery from "@assets/projects/Lamiya/gallery/lamiya_gallery_01-1.webp";
import lamiya_gallery02 from "@assets/projects/Lamiya/gallery/lamiya_gallery_02-1.webp";
import lamiya_gallery03 from "@assets/projects/Lamiya/gallery/lamiya_gallery_03.webp";

import lampadario_gallery from "@assets/projects/Lampadario/gallery/lampadario_01.webp";
import lampadario_gallery02 from "@assets/projects/Lampadario/gallery/lampadario_02.webp";
import lampadario_gallery03 from "@assets/projects/Lampadario/gallery/lampadario_03.webp";
import lampadario_gallery04 from "@assets/projects/Lampadario/gallery/lampadario_04.webp";
import lampadario_gallery05 from "@assets/projects/Lampadario/gallery/lampadario_05.webp";

import lenovo_gallery from "@assets/projects/Lenovo/gallery/lenovo_gallery_01.webp";
import lenovo_gallery02 from "@assets/projects/Lenovo/gallery/lenovo_gallery_02.webp";
import lenovo_gallery03 from "@assets/projects/Lenovo/gallery/lenovo_gallery_03.webp";

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
  thirtyone: {
    heading: "31 Канал",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: channel_gallery,
      },
      {
        photo: channel_gallery02,
      },
      {
        photo: channel_gallery03,
      },
      {
        photo: channel_gallery04,
      },
      {
        photo: channel_gallery05,
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
  apple_city: {
    heading: "Apple City",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: applecity_gallery,
      },
      {
        photo: applecity_gallery02,
      },
      {
        photo: applecity_gallery03,
      },
      {
        photo: applecity_gallery04,
      },
      {
        photo: applecity_gallery05,
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
  do_eat: {
    heading: "Do Eat",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: doeat_gallery,
      },
      {
        photo: doeat_gallery02,
      },
      {
        photo: doeat_gallery03,
      },
      {
        photo: doeat_gallery04,
      },
      {
        photo: doeat_gallery05,
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
  freedom_finance: {
    heading: "Freedom Finance",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: ff_gallery,
      },
      {
        photo: ff_gallery02,
      },
      {
        photo: ff_gallery03,
      },
      {
        photo: ff_gallery04,
      },
      {
        photo: ff_gallery05,
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
  global_dev: {
    heading: "Global Development",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: globaldev_gallery,
      },
      {
        photo: globaldev_gallery02,
      },
      {
        photo: globaldev_gallery03,
      },
      {
        photo: globaldev_gallery04,
      },
      {
        photo: globaldev_gallery05,
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
  gorky: {
    heading: "Tennis Park",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: gorky_gallery,
      },
      {
        photo: gorky_gallery02,
      },
      {
        photo: gorky_gallery03,
      },
      {
        photo: gorky_gallery04,
      },
      {
        photo: gorky_gallery05,
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
  lamiya: {
    heading: "Lamiya",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: lamiya_gallery,
      },
      {
        photo: lamiya_gallery02,
      },
      {
        photo: lamiya_gallery03,
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
  lampadario: {
    heading: "Lampadario",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: lampadario_gallery,
      },
      {
        photo: lampadario_gallery02,
      },
      {
        photo: lampadario_gallery03,
      },
      {
        photo: lampadario_gallery04,
      },
      {
        photo: lampadario_gallery05,
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
  lenovo: {
    heading: "Lenovo",
    headingSecond: "Второй заголовок",
    paragraph:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    paragraphSecond:
      "Компания Special Solution занимается разработкой передовых решений, способных удовлетворить самые изысканные и специфические запросы наших клиентов. Мы сочетаем глубокие знания отрасли с инновационным мышлением, чтобы предлагать продукты и услуги, выходящие за рамки стандартных предложений.",
    images: [
      {
        photo: lenovo_gallery,
      },
      {
        photo: lenovo_gallery02,
      },
      {
        photo: lenovo_gallery03,
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
