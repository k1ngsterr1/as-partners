import image from "@assets/services/services.webp";
import { Photos } from "./smallGalleryContent";

interface iSectionGallerySlider {
  photos: Photos[];
}

export const sectionGalleryContent: Record<string, iSectionGallerySlider> = {
  first: {
    photos: [
      {
        photo: image,
      },
      {
        photo: image,
      },
      {
        photo: image,
      },
      {
        photo: image,
      },
      {
        photo: image,
      },
      {
        photo: image,
      },
    ],
  },
};
