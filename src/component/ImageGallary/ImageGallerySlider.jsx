import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./ImageGallerySlider.css";
import ReactImageMagnify from "react-image-magnify";
const ImageGallerySlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/237/300/150",
      thumbnail: "https://picsum.photos/id/237/300/150",
    },
    {
      original: "https://picsum.photos/id/1/300/150",
      thumbnail: "https://picsum.photos/id/1/300/150",
    },
    {
      original: "https://picsum.photos/id/10/300/150",
      thumbnail: "https://picsum.photos/id/10/300/150",
    },
    {
      original: "https://picsum.photos/id/100/300/150",
      thumbnail: "https://picsum.photos/id/100/300/150",
    },
    {
      original: "https://picsum.photos/id/101/300/150",
      thumbnail: "https://picsum.photos/id/101/300/150",
    },
    {
      original: "https://picsum.photos/id/1000/300/150",
      thumbnail: "https://picsum.photos/id/1000/300/150",
    },
    {
      original: "https://picsum.photos/id/1001/300/150",
      thumbnail: "https://picsum.photos/id/1001/300/150",
    },
  ];

  function renderLeftNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="absolute -bottom-[55px] z-10 -left-[35px]"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaAngleLeft
          size={30}
          className={`${disabled ? "text-black" : "text-orange-400"}`}
        />
      </button>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="absolute -bottom-[55px] z-10 -right-[35px]"
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaAngleRight
          size={30}
          className={`${disabled ? "text-black" : "text-orange-400"}`}
        />
      </button>
    );
  }
  const [selectedIndex, setSelectedIndex] = useState(0); // Initial selected index

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };
  console.log(selectedIndex);

  return (
    <div>
      <div className="w-[600px] h-[700px] containerDev">
        <div className="fluid__image-container">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: images[selectedIndex].original,
               
              },
              largeImage: {
                src: images[selectedIndex].original,
                isFluidWidth: true,
                width: 700,
                height: 700
              },
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: true,
              enlargedImageContainerDimensions: {
                width: "100%",
                height: "100%"
              },
              
            }}
          />
        </div>
        <ImageGallery
          items={images.map((image) => ({
            thumbnail: image.thumbnail,
          }))}
          showBullets={false}
          showIndex={false}
          showThumbnails={true}
          lazyLoad={false}
          showPlayButton={false}
          showNav={true}
          showFullscreenButton={false}
          thumbnailPosition={"bottom"}
          infinite={false}
          renderLeftNav={renderLeftNav}
          renderRightNav={renderRightNav}
          onSlide={handleThumbnailClick}
        />
      </div>
    </div>
  );
};

export default ImageGallerySlider;
