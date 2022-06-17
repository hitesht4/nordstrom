import React from 'react';
import styles from './Pro.module.css';

const Sample = ({item}) => {
  return (
    <div>
        <div className={styles.Imagediv}>
        <img src={item.image_url} alt="" />
        </div>
        <div className={styles.Det}>
            <p className={styles.Brand}>{item.brand}</p>
            <p className={styles.Price}>INR. {item.price}</p>
        </div>
       
    </div>
  )
}

export default Sample