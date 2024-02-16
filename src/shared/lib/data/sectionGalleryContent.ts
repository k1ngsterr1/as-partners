import gallery01 from "@assets/gallery/31_channel.webp";
import gallery02 from "@assets/gallery/apple_city.webp";
import gallery03 from "@assets/gallery/do_eat.webp";
import gallery04 from "@assets/gallery/ffb.webp";
import gallery05 from "@assets/gallery/gorky_tennis.webp";
import gallery06 from "@assets/gallery/lampadario.webp";
import gallery07 from "@assets/gallery/lenovo.webp";
import gallery08 from "@assets/gallery/ritz_carlton.webp";
import gallery09 from "@assets/gallery/siemens.webp";
import gallery10 from "@assets/gallery/takeda.webp";
import gallery11 from "@assets/gallery/wendys.webp";
import gallery12 from "@assets/projects/Tansar/tansar06.webp";
import gallery13 from "@assets/gallery/lamiya.webp";
import gallery14 from "@assets/gallery/cottage.webp";
import gallery15 from "@assets/gallery/remizovka.webp";

import { Photos } from "./smallGalleryContent";

interface iSectionGallerySlider {
  photos: Photos[];
}

export const sectionGalleryContent: Record<string, iSectionGallerySlider> = {
  first: {
    photos: [
      {
        navigation: "31_channel",
        photo: gallery01,
      },
      {
        navigation: "apple_city",
        photo: gallery02,
      },
      {
        navigation: "do_eat",
        photo: gallery03,
      },
      {
        navigation: "freedom_bank",
        photo: gallery04,
      },
      {
        navigation: "gorky_tennis",
        photo: gallery05,
      },
      {
        navigation: "lampadario",
        photo: gallery06,
      },
      {
        navigation: "lenovo",
        photo: gallery07,
      },
      {
        navigation: "ritz_carlton",
        photo: gallery08,
      },
      {
        navigation: "siemens",
        photo: gallery09,
      },
      {
        navigation: "takeda",
        photo: gallery10,
      },
      {
        navigation: "wendys",
        photo: gallery11,
      },
      {
        navigation: "tansar",
        photo: gallery12,
      },
      {
        navigation: "lamiya",
        photo: gallery13,
      },
      {
        navigation: "cottage",
        photo: gallery14,
      },
      {
        navigation: "remizovka",
        photo: gallery15,
      },
    ],
  },
};
