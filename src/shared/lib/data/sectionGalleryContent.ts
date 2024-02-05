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
        navigation: "tansar",
        photo: tansar,
      },
      {
        navigation: "wendys",
        photo: wendy,
      },
      {
        navigation: "31_channel",
        photo: channel,
      },
      {
        navigation: "do_eat",
        photo: doEat,
      },
      {
        navigation: "freedom_bank",
        photo: freedomBank,
      },
      {
        navigation: "apple_city",
        photo: appleCity,
      },
    ],
  },
};
