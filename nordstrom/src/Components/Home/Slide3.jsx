import React from 'react'
import { Carousel } from 'react-bootstrap';
import Image1 from './assets/overlay3.jpeg';
import Image2 from './assets/overlay4.jpeg';
import styles from './Slide3.module.css';

const Slide3 = () => {
  return (
    <Carousel className={styles.Not}>
      <Carousel.Item>
        <div className={styles.Slide1}>
            <div className={styles.Info}>
            <h4>Sustainable Style</h4>
            <p>
                Get to know Indie Lee and Rumpl, industry leaders making sustainability their business.
            </p>
            <div className={styles.Child}>
                <p>Go Behind the BrandsShop</p>
                <p>Sustainable Style</p>
            </div>
            </div>
            <div></div>
        </div>

  
      </Carousel.Item>


      <Carousel.Item>
        <div className={styles.Slide2}>
            <div className={styles.Info}>
            <h4>Free Style Help </h4>
            <p>
                Be the best-dressed wedding guest—meet with a stylist online or in store for personalized looks handpicked just for you.
            </p>
            <div className={styles.Child}>
                <p>Learn More</p>
                <p>Shop Sustainable Style</p>
            </div>
            </div>
            <div></div>
        </div>
      </Carousel.Item>

    </Carousel>
  )
}

export default Slide3;





 





  


