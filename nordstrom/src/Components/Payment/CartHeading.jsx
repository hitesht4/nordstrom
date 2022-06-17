import React from 'react';
import {RiShoppingCartFill} from 'react-icons/ri';
import styles from './Order.module.css';
import { useContext,useState } from 'react';
import {CartContext} from '../../Context/CartProvider'
import {CartState} from '../../Context/CartProvider';
import {Form} from 'react-bootstrap';


const CartHeading = () => {
    const {total,setTotal}=useContext(CartContext);
    const [code,setCode]=useState("");
    const {state: { cart }} = CartState();
    const [show,setShow]=useState(false);
    const handleClick=()=>{
        setShow(!show);
    }
    const handlePromo=(e)=>{
       e.preventDefault();
       
       if(code==="Gift"){
        setTotal(Math.round(total-total/5));
        console.log(total);
       }
    }
    const applyPromo=(e)=>{
        setCode(e.target.value);
    }
  
  return (
    <div>
    <div className={styles.Heead}>
        <h3><RiShoppingCartFill/></h3>
        <h3>Your Order</h3>
    </div>

    <button className={styles.Ending}>Place Order</button>

     <table className={styles.Table}>
            <thead className={styles.Thead}>

            </thead>
            <tbody className={styles.Tbody}>
                <tr>
                    <td>Items</td>
                    <td>{cart.length}</td>
                </tr>
                <tr>
                    <td>Shipping </td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Duties & Taxes </td>
                    <td>Nil</td>
                </tr>
                <tr className={styles.Sum}>
                    <td><h4>Total</h4></td>
                    <td>
                       <h4 className={styles.Sums}><span>(INR)</span>{total}.00</h4>    
                    </td>
                </tr>
            </tbody>
    </table>

    <div className={styles.Hide}>
        <button onClick={handleClick}>Promo Code</button>

        {show ?   <div>
    <Form className= {`${styles.LastForm} d-flex`} onSubmit={handlePromo}>
    <Form.Control type="text" placeholder="Apply Coupon" onChange={applyPromo}/>
    <button variant="primary" type="submit">
        Submit
    </button>
</Form>

    </div> : ""}
    </div>
  

    <div className={styles.LastGrid}>
        {cart.map(item=>  
            <div key={item.id} className={styles.Fllex}>
                <div >
                    <img src={item.image_url} alt="" />
                </div>
                <div>
                    <h6>{item.name}</h6>
                    <p>Color:{item.color}</p>
                    <p>qty:{item.qty}</p>
                    <p>Size:Xl</p>
                </div>
            </div>
        )}
    </div>
    </div>
  )
}

export default CartHeading