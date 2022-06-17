import React,{useState} from 'react';
import {createContext ,useContext, useReducer } from 'react';
import {cartReducer} from './reducer';
import products from '../Mens.json';

export const CartContext=createContext();

const CartProvider = ({children}) => {
    const [total,setTotal] = useState();
    const [prod,setProd]=useState([]);


  const handleTotal=(cart)=>{
    setTotal(
      cart.reduce((acc, curr) => acc + Math.round(Number(curr.price)) * curr.qty, 0)
    );
    }

  const [state, dispatch] = useReducer(cartReducer, {
    products:prod,
    cart: [],
  });

  return (
    <CartContext.Provider value={{total,setTotal,handleTotal,prod,setProd,state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export const CartState = () => {
  return useContext(CartContext);
};


export default CartProvider;