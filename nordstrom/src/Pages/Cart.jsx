import { ListGroup, } from "react-bootstrap";
import {CartContext} from '../Context/CartProvider';
import { useNavigate } from "react-router-dom";
import { CartState } from "../Context/CartProvider";
import './Cartstyles.css';
import Navabar from '../Components/Navabar';
import CartItem from '../Components/Cart/CartItem'; 
import Table from "../Components/Cart/Table";
import Product1 from "../Components/Home/Product1";
import Products2 from "../Components/Home/Products2";
import CartHeader from "../Components/Cart/CartHeader";


const Cart = () => {
  
  const {
    state: { cart },
    dispatch,
  } = CartState();
  
  return (
    <div>
      <div>
        <Navabar/>
      </div>
    <div className="CartContains">
    {cart.length===0 ? <h1 style={{textAlign:"center"}}>Cart is Empty !</h1> : <div> 
      <div className="productContainer" >
      <div>
        <CartHeader/>
      </div> 
        <ListGroup>
          {cart.map((item) => (
             <CartItem item={item} key={item.id}/>
          ))}
        </ListGroup>
      <Table/>
      <div>
      </div>
      </div>

      <div className="productContainer" style={{border:"none"}} >
        <div>
          <h4>Here's what caught your eye</h4>
          <p>Recently viewed</p>
        <Product1/>
      </div>
      </div>

      <div className="productContainer" style={{border:"none",marginTop:"-50px"}} >
        <div>
          <h4>Some More Recommendations for You</h4>
          <p>Recently viewed</p>
        <Products2/>
      </div>
      </div>  
    </div>}
   
    </div>
    </div>
    
  )
}


export default Cart;



 








