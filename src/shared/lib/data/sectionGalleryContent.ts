import image from "@assets/services/services_pc.png";

import tansar from "@assets/projects/Tansar/tansar06.webp";
import wendy from "@assets/projects/Wendys/Wendy03.webp";
import channel from "@assets/projects/31/31channel01_gallery.webp";
import doEat from "@assets/projects/DoEat/DoEat01_gallery.webp";
import freedomBank from "@assets/projects/FF/FFB05_gallery.webp";
import appleCity from "@assets/projects/AppleCity/AppleCity04_gallery.webp";

import { Photos } from "./smallGalleryContent";

interface iSectionGallerySlider {
  photos: Photos[];
}

export const sectionGalleryContent: Record<string, iSectionGallerySlider> = {
  first: {
    photos: [
      {
        photo: tansar,
      },
      {
        photo: wendy,
      },
      {
        photo: channel,
      },
      {
        photo: doEat,
      },
      {
        photo: freedomBank,
      },
      {
        photo: appleCity,
      },
    ],
  },
};
