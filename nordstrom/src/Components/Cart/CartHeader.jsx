import React from 'react';
import styles from './Cart.module.css';
import {AiOutlineGift} from 'react-icons/ai';
import Cart from '../../Pages/Cart';
import { CartState } from '../../Context/CartProvider';

const CartHeader = () => {
    const {state: { cart }} = CartState();
  return (
    <div className={styles.Detail}>
        <h4>Shopping Bag ({cart.length})</h4>
        <p>Items in your bag are not on hold.</p>
        <p><AiOutlineGift style={{fontSize:"16px"}}/>Choose gift options when you check out.</p>
    </div>
  )
}

export default CartHeader