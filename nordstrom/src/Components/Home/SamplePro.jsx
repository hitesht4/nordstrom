import React from 'react';
import styles from '../Products/product.module.css';

const SamplePro = ({item}) => {
  return (
        <div className={styles.Card1}>

        <div className={styles.Imagediv}>
        <img src={item.image_url} alt="" />
        </div>

        <div style={{lineHeight:"10px"}}>
        <p style={{color:"orangered",fontWeight:'bold'}}>Matched</p>
        <p>{item.brand}</p>
           <p style={{color:"orangered"}}>INR {item.price}</p>
           <p className={styles.dflex}>INR {item.price}</p> 
        <p>★★★★★ 4.2</p>

        </div>

    </div>
  )
}

export default SamplePro