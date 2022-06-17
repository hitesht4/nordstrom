import React from 'react';
import styles from './category.module.css';
import Image1 from './assets/overlay1.jpeg';
import Image2 from './assets/overlay2.jpeg';
import Image3 from './assets/overlay3.jpeg';
import Image4 from './assets/overlay4.jpeg';

const Overlay = () => {
  return (
    <div className={styles.Dash}>
        <div className={styles.Head2}>
            <h4>CURRENTLY LOVING</h4>
            <p>Explore favorite looks from Instagram. Tag @Nordstrom to show us your finds.</p>
        </div>
    
    <div className={styles.Grid2}>


      <div className={styles.Part}>
        <img src={Image1} alt="" />
        <div className={styles.after}>Shop Now</div>
      </div>


      <div className={styles.Part}>
        <img src={Image2} alt="" />
        <div className={styles.after}>Shop Now</div>
      </div>


      <div className={styles.Part}>
        <img src={Image3} alt="" />
        <div className={styles.after}>Shop Now</div>
      </div>


      <div className={styles.Part}>
        <img src={Image4} alt="" />
        <div className={styles.after}>Shop Now</div>
      </div>
    </div>
    </div>
  )
}

export default Overlay;