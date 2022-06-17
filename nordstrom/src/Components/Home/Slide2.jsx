import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slides.css';
import img1 from './assets/slides1.jpg';
import img2 from './assets/slides2.jpg';
import img3 from './assets/slide3.jpg';

const Slide2 = () => {
  return (
    <div className='Slide1'>
    <Carousel className="Dex container-fluid">
       
      <Carousel.Item >

        <div className="SlideShow1">
        <div className='Image_div'>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />  
         </div>
         <div className="details">
           <h4 style={{fontWeight:"bold"}}>The Designer Edit: Getaway Styles</h4>
           <p>Pack these postcard-perfect pieces for your next vacation.</p>
           <p className="Underline">Learn More</p>
         </div>

         </div>
      
      </Carousel.Item>

      <Carousel.Item>
      <div className="SlideShow1">
        <div className='Image_div'>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />  
         </div>
         <div className="details">
           <h4 style={{fontWeight:"bold"}}>Need Now: Artisanal Sandals</h4>
           <p>We're loving styles made with woven materials, raffia, cork and wood, from Vince Camuto and more.</p>
           <p className="Underline">Learn More</p>
         </div>

         </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="SlideShow1">
        <div className='Image_div'>
        <img
          className="d-block w-100"
          src={img3}
          alt="Second slide"
        />  
         </div>
         <div className="details">
           <h4 style={{fontWeight:"bold"}}>Sunny-Side Up</h4>
           <p>Go from beach hangs to summer soirées in styles made for the sun.</p>
           <p className="Underline">Learn More</p>
         </div>

         </div>
      </Carousel.Item>

    </Carousel>
     </div>
  )
}

export default Slide2;