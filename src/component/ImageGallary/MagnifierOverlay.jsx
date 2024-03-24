import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
const MagnifierOverlay = ({ isOpen, image, onClose }) => {
  console.log();
  const [isMagnified, setIsMagnified] = useState(false);

  const handleMagnify = () => setIsMagnified(true);
  const handleClose = () => {
    setIsMagnified(false);
    onClose();
  };

  return (
   <div>
    <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: image?.target?.currentSrc,
    },
    largeImage: {
        src: image?.target?.currentSrc,
        width: 1200,
        height: 1800
    }
}} />

   </div>
  );
};

export default MagnifierOverlay;
