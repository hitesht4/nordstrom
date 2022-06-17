import React from 'react';
import styles from './product.module.css';
import {useNavigate} from 'react-router-dom';

const Product = ({item}) => {
  const navigate=useNavigate();

  const handleClick=(id)=>{
     navigate("/singleProduct"+"/"+id);
  }
  return (
    <div className={styles.Card}>
        <div className={styles.Part}>
        <img src={item.image_url} alt="" />

        <div className={styles.after}>
          <button className={styles.Click} onClick={()=>handleClick(item.id)}>Quick View</button>
        </div>
        </div>
        <div className={styles.Information}>
        <h6>{item.brand}</h6>
        <p>{item.name}</p>
        <h5>INR {item.price}</h5>
        <h6>★★★★★ {item.ratings}</h6>
        </div>

    </div>
  )
}

export default Product