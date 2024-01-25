import React from "react";
import { PhotoItem } from "@shared/lib/data/portfolioContent";
import ImageGallery from "react-image-gallery";

interface IThumbnainGalleryData {
  images: PhotoItem[];
}

export const ThumbnainGallery: React.FC<IThumbnainGalleryData> = ({
  images,
}) => {
  const photos = images.map((photo) => ({
    original: photo.photo,
    thumbnail: photo.thumbnail,
  }));

  return (
    <>
      <ImageGallery items={photos} />
    </>
  );
};
