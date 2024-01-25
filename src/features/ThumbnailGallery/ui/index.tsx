import React from "react";
import { PhotoItem } from "@shared/lib/data/portfolioContent";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.scss";

interface IThumbnainGalleryData {
  images: PhotoItem[];
}

export const ThumbnainGallery: React.FC<IThumbnainGalleryData> = ({
  images,
}) => {
  const photos = images.map((photo) => ({
    original: photo.photo,
    thumbnail: photo.photo,
  }));

  return (
    <>
      <ImageGallery
        items={photos}
        swipeThreshold={10}
        showNav={true}
        showPlayButton={true}
        autoPlay={true}
      />
    </>
  );
};
