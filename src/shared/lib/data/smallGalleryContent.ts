import image from "@assets/services/services.webp";

export interface Photos {
  photo: string;
}

export interface iSmallAutoSlider {
  photos: Photos[];
  name: string;
}

export const smallGalleryContent: Record<string, iSmallAutoSlider> = {
  first: {
    name: "Example",
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
    ],
  },
};
