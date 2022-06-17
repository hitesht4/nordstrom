import React from 'react';
import Zoom from 'react-img-zoom';

const Magnify = ({image}) => {
  return (
    <>
        <Zoom 
        img={image}
        zoomScale={1.4}
        width={420}
        height={665}
        transitionTime={0.5}
    />
    </>
  )
}

export default Magnify