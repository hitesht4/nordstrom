import React,{useContext,useEffect} from 'react';
import Icons from '../Home/assets/Icons.png';
import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../../Context/CartProvider';
import { CartState } from '../../Context/CartProvider';

const Table = () => {
  const {total,handleTotal}=useContext(CartContext);
    const {state: { cart }} = CartState();

  useEffect(() => {
    handleTotal(cart);
  }, [cart]);

  const navigate=useNavigate();
    const handleClick=()=>{
    navigate("/payment")
  }

  return (
    <>
    <div className={styles.filters_summary}>
      
      <div>
        <p>Accepted Payment Methods</p>
        <img src={Icons} alt="" className={styles.Ico}/>
        <p>Need help? Call 1.888.282.6060 or chat with us</p>
        <button className={styles.Oper}>Shipping internationally?</button>
      </div>

      <div >
        <table>
          <tbody >
               <tr className={styles.Total} >
               <td>Total</td>
               <td>INR.{total}.00</td>
               </tr>
          </tbody>
        </table>
         <button 
         disabled={cart.length === 0} 
          className={styles.Checkout}
          onClick={handleClick}
          >Checkout</button>
      </div>

      </div>
    </>
  )
}

export default Table