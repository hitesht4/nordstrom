import React from 'react';
import styles from './single.module.css';
import {BsBagFill} from 'react-icons/bs';
import Accordions from './Accordions';
import Magnify from './Magnify';
import {MdDelete} from 'react-icons/md';
import Colors from './Colors';
import {Button} from 'react-bootstrap';
import { CartState } from '../../Context/CartProvider';



const SingleItem = (item) => {  
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className={styles.One}>
    <div className={styles.Im}>
      <Magnify image={item.image_url}/>
    </div>
    <div className={styles.two}>
      <Magnify image={item.image_url}/>
    </div >  
       <div className={styles.thr}>
        <p className={styles.ratings}>★★★★★ {item.ratings}</p>
        <p className={styles.name}>{item.name}</p>
        <p>{item.brand}</p>
        <p className={styles.Price}> INR. {item.price}</p>
        <p className={styles.light}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero iste, aliquid nulla assumenda consectetur omnis aliquam perferendis cumque consequatur amet saepe quos.
        </p>
        <p>Fit <span>true to size</span></p>
        <select name="" id="" className={styles.select}>
            <option value="" className={styles.bald}>Size</option>
            <option value="">30</option>
            <option value="">32</option>
            <option value="">34</option>
            <option value="">36</option>
            <option value="">38</option>
        </select>
        <br />
        <select name="" id="" className={styles.select}>
            <option value="">Black</option>
            <option value="">Blue</option>
            <option value="">Red</option>
            <option value="">Green</option>
            <option value="">Orange</option>
        </select>
      <p className={styles.red}>13 people are veiwing</p>
      <Colors/>
  <div className="mb-2 mt-2">
   {cart.some((p) => p.id === item.id) ? (
            <button className={styles.Cart2}
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload:item,
                })}>
             <MdDelete/> Remove from Cart
            </button>
          ) : (
            <button className={styles.Cart}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload:item,
                })}>
               <BsBagFill/> Buy Now
            </button>)}
  </div>  
       <Accordions/>
       </div>
    </div>
  )
}

export default SingleItem;