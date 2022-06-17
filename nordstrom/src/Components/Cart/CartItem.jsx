import React,{useContext,useEffect} from 'react';
import { CartState } from '../../Context/CartProvider';
import styles from './Cart.module.css';
import { FormControl} from 'react-bootstrap';
import { CartContext } from '../../Context/CartProvider';
import {Form} from 'react-bootstrap';
import {MdLocalShipping} from 'react-icons/md';


const CartItem = ({item}) => {
  const {
    state:{ cart },
    dispatch,
  } = CartState();

  return (
    <div className={styles.CartItem}>
      <div className={styles.pic}>
        <img src={item.image_url} alt="" />
        </div>

        <div className={styles.Detail}>
          <p className={styles.bold}>{item.brand}</p>
          <p>{item.name}</p>
          <p>{item.color}</p>
          <p>Item : {item.id}</p>
          <p><MdLocalShipping style={{fontSize:"20px",marginRight:"6px"}}/>Delivery</p>
          <p>International orders usually arrive within 5–13 business days. We'll give you delivery dates in checkout.</p>   
          <div className={styles.Oper}>
            <button
              onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })}>
              Remove Item
            </button>
          </div>  
        </div>

        <div className={styles.Operations}>
             <div className={styles.Selectdiv}> 
               <Form.Control
                    as="select"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: item.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                      <option key={1}>1</option>
                      <option key={2}>2</option>
                      <option key={3}>3</option>
                      <option key={4}>4</option> 
                  </Form.Control>
                </div>

                <div className={styles.Deldiv}>
                 <p className={styles.bold}>INR.{item.price}.00</p>
                </div>
        </div>
        
        
    </div>
  )
}

export default CartItem;

