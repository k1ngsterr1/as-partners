import gorky from "@assets/projects/31/31channel01.webp";
import apple from "@assets/projects/AppleCity/AppleCity02.webp";
import takeda from "@assets/projects/Takeda/takeda01.webp";
import siemens from "@assets/projects/Siemens/Siemens01.webp";

export interface Photos {
  photo: string;
  name?: string;
  navigation?: string;
}

export interface iSmallAutoSlider {
  photos: Photos[];
}

export const smallGalleryContent: Record<string, iSmallAutoSlider> = {
  first: {
    photos: [
      {
        name: "31 Канал",
        photo: gorky,
        navigation: "31_channel",
      },
      {
        name: "Apple City",
        photo: apple,
        navigation: "apple_city",
      },
      {
        name: "Takeda",
        photo: takeda,
        navigation: "takeda",
      },
      {
        name: "Siemens",
        photo: siemens,
        navigation: "siemens",
      },
    ],
  },
};
