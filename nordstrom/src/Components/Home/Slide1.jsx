import React from 'react';
import {Carousel} from 'react-bootstrap';
import './slides.css';

const Slide1 = () => {
  return (
    <div className='Slide1'>
    <Carousel className='container-fluid'>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid axss"
          src="https://n.nordstrommedia.com/id/07deb62c-f22f-40e0-8436-df178fc145fd.gif?h=200&w=1608"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid axss"
          src="https://n.nordstrommedia.com/id/ab6aebc0-9fad-41f1-9bdf-3738883d7a09.gif?h=200&w=1608"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slide1